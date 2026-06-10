import { createFileRoute } from "@tanstack/react-router";
import { useSession } from "@/lib/auth-store";
import {
  SuperAdminDashboard, ServiceAdminDashboard, LandlordDashboard,
  TenantDashboard, ContractorDashboard, RealtorDashboard,
} from "@/components/dashboards/Dashboards";

export const Route = createFileRoute("/app/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — HomeSure" }] }),
  component: DashboardPage,
});

function DashboardPage() {
  const s = useSession();
  switch (s?.role) {
    case "super_admin": return <SuperAdminDashboard />;
    case "service_admin": return <ServiceAdminDashboard />;
    case "tenant": return <TenantDashboard />;
    case "contractor": return <ContractorDashboard />;
    case "realtor": return <RealtorDashboard />;
    case "landlord":
    default:
      return <LandlordDashboard />;
  }
}
