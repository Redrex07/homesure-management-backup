import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { DataTable } from "@/components/common/DataTable";

import { Plus, Download } from "lucide-react";

export const Route = createFileRoute("/app/properties")({
  head: () => ({
    meta: [{ title: "Properties — HomeSure" }],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProperties();
  }, []);

  async function loadProperties() {
    const { data, error } = await supabase
      .from("properties")
      .select("*")
      .order("property_id");

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    const formatted =
      data?.map((p) => ({
        id: String(p.property_id),
        name: p.property_name,
        address: p.address,
        type: p.property_type,
        tenant: "-",
        rent: Number(p.rent_amount),
        status: p.status,
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
      })) || [];

    setProperties(formatted);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="p-6">
        Loading properties...
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title="Properties"
        description="All properties in your portfolio."
        actions={
          <>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>

            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Property
            </Button>
          </>
        }
      />

      <DataTable
        rows={properties}
        filterKeys={["name", "address", "type"] as any}
        columns={[
          {
            key: "name",
            header: "Property",
            sortable: true,
            render: (p: any) => (
              <div className="flex items-center gap-3">
                <img
                  src={p.image}
                  alt=""
                  className="h-10 w-14 rounded-md object-cover"
                />

                <div>
                  <Link
                    to="/app/properties/$id"
                    params={{ id: p.id }}
                    className="text-sm font-medium hover:underline"
                  >
                    {p.name}
                  </Link>

                  <div className="text-xs text-muted-foreground">
                    {p.address}
                  </div>
                </div>
              </div>
            ),
          },

          {
            key: "id",
            header: "ID",
            render: (p: any) => (
              <span className="font-mono text-xs text-muted-foreground">
                {p.id}
              </span>
            ),
          },

          {
            key: "type",
            header: "Type",
          },

          {
            key: "tenant",
            header: "Tenant",
          },

          {
            key: "rent",
            header: "Rent",
            sortable: true,
            render: (p: any) => (
              <span className="font-medium">
                ₹{p.rent.toLocaleString("en-IN")}
              </span>
            ),
          },

          {
            key: "status",
            header: "Status",
            render: (p: any) => (
              <StatusBadge value={p.status} />
            ),
          },
        ]}
      />
    </>
  );
}