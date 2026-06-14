import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { DataTable } from "@/components/common/DataTable";

import { Plus, MoreHorizontal } from "lucide-react";

export const Route = createFileRoute("/app/users")({
  head: () => ({ meta: [{ title: "Users — HomeSure" }] }),
  component: UsersPage,
});

function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .order("user_id");

    if (error) {
      console.error("Supabase Error:", error);
      return;
    }

    const formattedUsers =
      data?.map((u) => ({
        id: u.user_id,
        name: u.full_name,
        email: u.email,
        role: getRoleName(u.role_id),
        joined: new Date(u.created_at).toLocaleDateString(),
        status: "Active",
      })) || [];

    setUsers(formattedUsers);
    setLoading(false);
  }

  function getRoleName(roleId: number) {
    switch (roleId) {
      case 1:
        return "Super Admin";
      case 2:
        return "Service Admin";
      case 3:
        return "Landlord";
      case 4:
        return "Tenant";
      case 5:
        return "Contractor";
      case 6:
        return "Realtor";
      default:
        return "Unknown";
    }
  }

  if (loading) {
    return <div className="p-6">Loading users...</div>;
  }

  return (
    <>
      <PageHeader
        title="Users"
        description="Manage platform users and roles."
        actions={
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Invite User
          </Button>
        }
      />

      <DataTable
        rows={users}
        filterKeys={["name", "email", "role"] as any}
        columns={[
          {
            key: "name",
            header: "User",
            sortable: true,
            render: (u: any) => (
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-primary-soft text-xs text-primary">
                    {u.name
                      .split(" ")
                      .map((w: string) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <div className="text-sm font-medium">{u.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {u.email}
                  </div>
                </div>
              </div>
            ),
          },
          {
            key: "role",
            header: "Role",
          },
          {
            key: "joined",
            header: "Joined",
          },
          {
            key: "status",
            header: "Status",
            render: (u: any) => <StatusBadge value={u.status} />,
          },
          {
            key: "actions",
            header: "",
            render: () => (
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            ),
          },
        ]}
      />
    </>
  );
}