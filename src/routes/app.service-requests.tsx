import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { DataTable } from "@/components/common/DataTable";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Plus } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/app/service-requests")({
  head: () => ({
    meta: [{ title: "Service Requests — HomeSure" }],
  }),
  component: ServiceRequestsPage,
});

function ServiceRequestsPage() {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [statusFilter, setStatusFilter] = useState("all");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadRequests();
  }, []);

  async function loadRequests() {
    const { data, error } = await supabase
      .from("service_requests")
      .select(`
        request_id,
        title,
        description,
        status,
        created_at,
        properties (
          property_name
        ),
        tenants (
          tenant_id,
          users (
            full_name
          )
        ),
        contractors (
          trade,
          users (
            full_name
          )
        )
      `);

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    const formatted =
      data?.map((r: any) => ({
        id: r.request_id,
        title: r.title,
        description: r.description,
        property:
          r.properties?.property_name ?? "Unknown Property",

        tenant:
          r.tenants?.users?.full_name ?? "Unknown Tenant",

        contractor:
          r.contractors?.users?.full_name ??
          "Unassigned",

        trade:
          r.contractors?.trade ?? "-",

        status: r.status,

        created:
          new Date(r.created_at).toLocaleDateString(
            "en-IN"
          ),
      })) || [];

    setRequests(formatted);
    setLoading(false);
  }

  const filtered =
    statusFilter === "all"
      ? requests
      : requests.filter(
          (r) =>
            r.status.toLowerCase() ===
            statusFilter.toLowerCase()
        );

  if (loading) {
    return (
      <div className="p-6">
        Loading service requests...
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title="Service Requests"
        description="Track maintenance work end-to-end."
        actions={
          <Dialog
            open={open}
            onOpenChange={setOpen}
          >
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                New Request
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Create Service Request
                </DialogTitle>

                <DialogDescription>
                  Submit a maintenance request.
                </DialogDescription>
              </DialogHeader>

              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();

                  toast.success(
                    "Request created successfully"
                  );

                  setOpen(false);
                }}
              >
                <div className="space-y-1.5">
                  <Label>Title</Label>

                  <Input
                    placeholder="Leaking Sink"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label>Description</Label>

                  <Textarea
                    rows={3}
                    placeholder="Describe issue..."
                  />
                </div>

                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>

                  <Button type="submit">
                    Submit
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        }
      />

      <DataTable
        rows={filtered}
        filterKeys={[
          "title",
          "property",
          "tenant",
          "contractor",
        ] as any}
        toolbar={
          <Select
            value={statusFilter}
            onValueChange={setStatusFilter}
          >
            <SelectTrigger className="h-9 w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">
                All Status
              </SelectItem>

              <SelectItem value="open">
                Open
              </SelectItem>

              <SelectItem value="in progress">
                In Progress
              </SelectItem>

              <SelectItem value="completed">
                Completed
              </SelectItem>
            </SelectContent>
          </Select>
        }
        columns={[
          {
            key: "id",
            header: "ID",
            render: (r: any) => (
              <span className="font-mono text-xs text-muted-foreground">
                #{r.id}
              </span>
            ),
          },

          {
            key: "title",
            header: "Request",
            sortable: true,
            render: (r: any) => (
              <div>
                <div className="font-medium">
                  {r.title}
                </div>

                <div className="text-xs text-muted-foreground">
                  {r.description}
                </div>
              </div>
            ),
          },

          {
            key: "property",
            header: "Property",
          },

          {
            key: "tenant",
            header: "Tenant",
          },

          {
            key: "contractor",
            header: "Contractor",
          },

          {
            key: "trade",
            header: "Trade",
          },

          {
            key: "created",
            header: "Created",
          },

          {
            key: "status",
            header: "Status",
            render: (r: any) => (
              <StatusBadge value={r.status} />
            ),
          },
        ]}
      />
    </>
  );
}