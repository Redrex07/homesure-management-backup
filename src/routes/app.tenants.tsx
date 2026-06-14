import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { DataTable } from "@/components/common/DataTable";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { Plus, Mail } from "lucide-react";

export const Route = createFileRoute("/app/tenants")({
  head: () => ({
    meta: [{ title: "Tenants — HomeSure" }],
  }),
  component: TenantsPage,
});

function TenantsPage() {
  const [tenants, setTenants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTenants();
  }, []);

  async function loadTenants() {
    try {
      const { data, error } = await supabase
        .from("tenants")
        .select(`
          tenant_id,
          lease_start,
          lease_end,
          users (
            full_name,
            email
          ),
          properties (
            property_name,
            rent_amount
          )
        `);

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      const formatted =
        data?.map((t: any) => ({
          id: t.tenant_id,
          name: t.users?.full_name ?? "Unknown Tenant",
          email: t.users?.email ?? "-",
          property: t.properties?.property_name ?? "-",
          leaseStart: t.lease_start,
          leaseEnd: t.lease_end,
          rent: Number(t.properties?.rent_amount ?? 0),
          status: "Active",
        })) || [];

      setTenants(formatted);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  if (loading) {
    return <div className="p-6">Loading tenants...</div>;
  }

  return (
    <>
      <PageHeader
        title="Tenants"
        description="Manage tenant profiles and lease details."
        actions={
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Invite Tenant
          </Button>
        }
      />

      <DataTable
        rows={tenants}
        filterKeys={["name", "email", "property"] as any}
        columns={[
          {
            key: "name",
            header: "Tenant",
            sortable: true,
            render: (t: any) => (
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-primary-soft text-xs text-primary">
                    {t.name
                      .split(" ")
                      .map((w: string) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <div className="text-sm font-medium">
                    {t.name}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {t.email}
                  </div>
                </div>
              </div>
            ),
          },

          {
            key: "property",
            header: "Property",
          },

          {
            key: "leaseStart",
            header: "Lease Start",
          },

          {
            key: "leaseEnd",
            header: "Lease End",
          },

          {
            key: "rent",
            header: "Rent",
            render: (t: any) => (
              <span>
                ₹{t.rent.toLocaleString("en-IN")}
              </span>
            ),
          },

          {
            key: "status",
            header: "Status",
            render: (t: any) => (
              <StatusBadge value={t.status} />
            ),
          },

          {
            key: "actions",
            header: "",
            render: () => (
              <Button variant="ghost" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            ),
          },
        ]}
      />
    </>
  );
}