import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { DataTable } from "@/components/common/DataTable";
import { properties } from "@/lib/mock-data";
import { Plus, Download } from "lucide-react";

export const Route = createFileRoute("/app/properties")({
  head: () => ({ meta: [{ title: "Properties — HomeSure" }] }),
  component: PropertiesPage,
});

function PropertiesPage() {
  return (
    <>
      <PageHeader
        title="Properties"
        description="All properties in your portfolio."
        actions={<>
          <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" /> Export</Button>
          <Button size="sm"><Plus className="mr-2 h-4 w-4" /> Add property</Button>
        </>}
      />
      <DataTable
        rows={properties}
        filterKeys={["name", "address", "id", "tenant"] as any}
        columns={[
          { key: "name", header: "Property", sortable: true, render: (p) => (
            <div className="flex items-center gap-3">
              <img src={p.image} alt="" className="h-10 w-14 rounded-md object-cover" />
              <div>
                <Link to="/app/properties/$id" params={{ id: p.id }} className="text-sm font-medium hover:underline">{p.name}</Link>
                <div className="text-xs text-muted-foreground">{p.address}</div>
              </div>
            </div>
          )},
          { key: "id", header: "ID", render: (p) => <span className="font-mono text-xs text-muted-foreground">{p.id}</span> },
          { key: "type", header: "Type", sortable: true },
          { key: "tenant", header: "Tenant", render: (p) => p.tenant ?? <span className="text-muted-foreground">—</span> },
          { key: "rent", header: "Rent", sortable: true, render: (p) => <span className="font-medium">${p.rent.toLocaleString()}</span> },
          { key: "status", header: "Status", render: (p) => <StatusBadge value={p.status} /> },
        ]}
      />
    </>
  );
}
