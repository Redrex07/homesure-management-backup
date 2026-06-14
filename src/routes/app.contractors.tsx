import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { Plus, Star, Phone } from "lucide-react";

export const Route = createFileRoute("/app/contractors")({
  head: () => ({
    meta: [{ title: "Contractors — HomeSure" }],
  }),
  component: ContractorsPage,
});

function ContractorsPage() {
  const [contractors, setContractors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContractors();
  }, []);

  async function loadContractors() {
    const { data, error } = await supabase
      .from("contractors")
      .select(`
        contractor_id,
        trade,
        rating,
        users (
          full_name,
          email
        )
      `);

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    const formatted =
      data?.map((c: any) => ({
        id: c.contractor_id,
        name: c.users?.full_name ?? "Unknown Contractor",
        email: c.users?.email ?? "-",
        trade: c.trade,
        rating: c.rating,
        available: true,
      })) || [];

    setContractors(formatted);
    setLoading(false);
  }

  if (loading) {
    return <div className="p-6">Loading contractors...</div>;
  }

  return (
    <>
      <PageHeader
        title="Contractor Directory"
        description="Browse trusted contractors and their availability."
        actions={
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Invite Contractor
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contractors.map((c) => (
          <Card
            key={c.id}
            className="border-border/70 shadow-card transition-shadow hover:shadow-elegant"
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary-soft text-sm text-primary">
                    {c.name
                      .split(" ")
                      .map((w: string) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="truncate font-semibold">
                      {c.name}
                    </div>

                    <Badge
                      variant="outline"
                      className="border-success/30 bg-success/10 text-success"
                    >
                      Available
                    </Badge>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {c.trade}
                  </div>

                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1 text-warning">
                      <Star className="h-3 w-3 fill-current" />
                      {c.rating}
                    </span>
                  </div>

                  <div className="mt-1 text-xs text-muted-foreground">
                    {c.email}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                >
                  <Phone className="mr-1 h-3.5 w-3.5" />
                  Call
                </Button>

                <Button size="sm" className="flex-1">
                  Assign Job
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}