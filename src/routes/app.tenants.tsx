import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { DataTable } from "@/components/common/DataTable";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { tenants } from "@/lib/mock-data";
import { Plus, Mail } from "lucide-react";

export const Route = createFileRoute("/app/tenants")({
  head: () => ({ meta: [{ title: "Tenants — HomeSure" }] }),
  component: TenantsPage,
});

function TenantsPage() {
  return (
    <>
      <PageHeader title="Tenants" description="Manage tenant profiles and lease details." actions={<Button size="sm"><Plus className="mr-2 h-4 w-4" /> Invite tenant</Button>} />
      <DataTable
        rows={tenants}
        filterKeys={["name", "email", "property"] as any}
        columns={[
          { key: "name", header: "Tenant", sortable: true, render: (t) => (
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9"><AvatarFallback className="bg-primary-soft text-xs text-primary">{t.name.split(" ").map(w=>w[0]).join("")}</AvatarFallback></Avatar>
              <div><div className="text-sm font-medium">{t.name}</div><div className="text-xs text-muted-foreground">{t.email}</div></div>
            </div>
          )},
          { key: "property", header: "Property" },
          { key: "leaseStart", header: "Lease start" },
          { key: "leaseEnd", header: "Lease end" },
          { key: "rent", header: "Rent", render: (t) => t.rent ? `$${t.rent.toLocaleString()}` : "—" },
          { key: "status", header: "Status", render: (t) => <StatusBadge value={t.status} /> },
          { key: "actions", header: "", render: () => <Button variant="ghost" size="sm"><Mail className="h-4 w-4" /></Button> },
        ]}
      />
    </>
  );
}
