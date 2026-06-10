import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { DataTable } from "@/components/common/DataTable";
import { auditLogs } from "@/lib/mock-data";

export const Route = createFileRoute("/app/audit-logs")({
  head: () => ({ meta: [{ title: "Audit Logs — HomeSure" }] }),
  component: AuditPage,
});

function AuditPage() {
  return (
    <>
      <PageHeader title="Audit logs" description="A complete record of platform activity." />
      <DataTable
        rows={auditLogs}
        filterKeys={["action", "actor", "ip"] as any}
        columns={[
          { key: "time", header: "Time", render: (l) => <span className="font-mono text-xs">{l.time}</span> },
          { key: "actor", header: "Actor" },
          { key: "action", header: "Action", render: (l) => <span className="text-sm">{l.action}</span> },
          { key: "ip", header: "IP", render: (l) => <span className="font-mono text-xs text-muted-foreground">{l.ip}</span> },
        ]}
      />
    </>
  );
}
