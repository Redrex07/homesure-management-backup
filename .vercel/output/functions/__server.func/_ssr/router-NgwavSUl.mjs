import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster } from "../_libs/sonner.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-Ai5Y2Ob-.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$n = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HomeSure Management — Property & Home Warranty Platform" },
      { name: "description", content: "Unified property management and home warranty platform for landlords, tenants, contractors, realtors and admins." },
      { property: "og:title", content: "HomeSure Management — Property & Home Warranty Platform" },
      { property: "og:description", content: "Unified property management and home warranty platform for landlords, tenants, contractors, realtors and admins." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "HomeSure Management — Property & Home Warranty Platform" },
      { name: "twitter:description", content: "Unified property management and home warranty platform for landlords, tenants, contractors, realtors and admins." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c3266e0a-acef-40b4-bf12-5ae7c640da85/id-preview-276901a2--a287d24e-1400-4907-96f0-2f1a8ef01ee9.lovable.app-1780293203462.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c3266e0a-acef-40b4-bf12-5ae7c640da85/id-preview-276901a2--a287d24e-1400-4907-96f0-2f1a8ef01ee9.lovable.app-1780293203462.png" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$n.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-right", richColors: true, closeButton: true })
  ] });
}
const $$splitComponentImporter$m = () => import("./signup-CDIrbk4R.mjs");
const Route$m = createFileRoute("/signup")({
  head: () => ({
    meta: [{
      title: "Create your account — HomeSure"
    }, {
      name: "description",
      content: "Start your 14-day free trial."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./reset-password-BclDTmVN.mjs");
const Route$l = createFileRoute("/reset-password")({
  head: () => ({
    meta: [{
      title: "Reset password — HomeSure"
    }, {
      name: "description",
      content: "Choose a new password."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./login-972Fn9mD.mjs");
const Route$k = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Sign in — HomeSure"
    }, {
      name: "description",
      content: "Sign in to your HomeSure account."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./forgot-password-B5BqLtDf.mjs");
const Route$j = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [{
      title: "Forgot password — HomeSure"
    }, {
      name: "description",
      content: "Reset your HomeSure password."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./app-BUUvo1Em.mjs");
const Route$i = createFileRoute("/app")({
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./index-Di_cDCVf.mjs");
const Route$h = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "HomeSure Management — Property & Home Warranty Platform"
    }, {
      name: "description",
      content: "Manage properties, leases, maintenance, and home warranty services in one unified platform."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./app.users-ClZUyEC2.mjs");
const Route$g = createFileRoute("/app/users")({
  head: () => ({
    meta: [{
      title: "Users — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./app.tenants-CE4O14o5.mjs");
const Route$f = createFileRoute("/app/tenants")({
  head: () => ({
    meta: [{
      title: "Tenants — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./app.support-lZaEvATR.mjs");
const Route$e = createFileRoute("/app/support")({
  head: () => ({
    meta: [{
      title: "Support — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./app.subscriptions-B1Pp8yHW.mjs");
const Route$d = createFileRoute("/app/subscriptions")({
  head: () => ({
    meta: [{
      title: "Subscriptions — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./app.settings-celJHl-y.mjs");
const Route$c = createFileRoute("/app/settings")({
  head: () => ({
    meta: [{
      title: "Settings — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./app.service-requests-UKER_21f.mjs");
const Route$b = createFileRoute("/app/service-requests")({
  head: () => ({
    meta: [{
      title: "Service Requests — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./app.properties-BihoaSUc.mjs");
const Route$a = createFileRoute("/app/properties")({
  head: () => ({
    meta: [{
      title: "Properties — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./app.notifications-CBu78v_-.mjs");
const Route$9 = createFileRoute("/app/notifications")({
  head: () => ({
    meta: [{
      title: "Notifications — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./app.leases-B1U3igwa.mjs");
const Route$8 = createFileRoute("/app/leases")({
  head: () => ({
    meta: [{
      title: "Leases — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./app.invoices-fn6wrI1C.mjs");
const Route$7 = createFileRoute("/app/invoices")({
  head: () => ({
    meta: [{
      title: "Invoices — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./app.estimates-NZOCOorA.mjs");
const Route$6 = createFileRoute("/app/estimates")({
  head: () => ({
    meta: [{
      title: "Estimates — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./app.dashboard-D3CLIRU_.mjs");
const Route$5 = createFileRoute("/app/dashboard")({
  head: () => ({
    meta: [{
      title: "Dashboard — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./app.contractors-B5LiDrxY.mjs");
const Route$4 = createFileRoute("/app/contractors")({
  head: () => ({
    meta: [{
      title: "Contractors — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./app.audit-logs-DPMmfLFI.mjs");
const Route$3 = createFileRoute("/app/audit-logs")({
  head: () => ({
    meta: [{
      title: "Audit Logs — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./app.appointments-Bu7zNkP9.mjs");
const Route$2 = createFileRoute("/app/appointments")({
  head: () => ({
    meta: [{
      title: "Appointments — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./app.analytics-DFB-seZj.mjs");
const Route$1 = createFileRoute("/app/analytics")({
  head: () => ({
    meta: [{
      title: "Analytics — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./app.properties._id-BfKfmKZP.mjs");
const Route = createFileRoute("/app/properties/$id")({
  head: () => ({
    meta: [{
      title: "Property details — HomeSure"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SignupRoute = Route$m.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => Route$n
});
const ResetPasswordRoute = Route$l.update({
  id: "/reset-password",
  path: "/reset-password",
  getParentRoute: () => Route$n
});
const LoginRoute = Route$k.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$n
});
const ForgotPasswordRoute = Route$j.update({
  id: "/forgot-password",
  path: "/forgot-password",
  getParentRoute: () => Route$n
});
const AppRoute = Route$i.update({
  id: "/app",
  path: "/app",
  getParentRoute: () => Route$n
});
const IndexRoute = Route$h.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$n
});
const AppUsersRoute = Route$g.update({
  id: "/users",
  path: "/users",
  getParentRoute: () => AppRoute
});
const AppTenantsRoute = Route$f.update({
  id: "/tenants",
  path: "/tenants",
  getParentRoute: () => AppRoute
});
const AppSupportRoute = Route$e.update({
  id: "/support",
  path: "/support",
  getParentRoute: () => AppRoute
});
const AppSubscriptionsRoute = Route$d.update({
  id: "/subscriptions",
  path: "/subscriptions",
  getParentRoute: () => AppRoute
});
const AppSettingsRoute = Route$c.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => AppRoute
});
const AppServiceRequestsRoute = Route$b.update({
  id: "/service-requests",
  path: "/service-requests",
  getParentRoute: () => AppRoute
});
const AppPropertiesRoute = Route$a.update({
  id: "/properties",
  path: "/properties",
  getParentRoute: () => AppRoute
});
const AppNotificationsRoute = Route$9.update({
  id: "/notifications",
  path: "/notifications",
  getParentRoute: () => AppRoute
});
const AppLeasesRoute = Route$8.update({
  id: "/leases",
  path: "/leases",
  getParentRoute: () => AppRoute
});
const AppInvoicesRoute = Route$7.update({
  id: "/invoices",
  path: "/invoices",
  getParentRoute: () => AppRoute
});
const AppEstimatesRoute = Route$6.update({
  id: "/estimates",
  path: "/estimates",
  getParentRoute: () => AppRoute
});
const AppDashboardRoute = Route$5.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => AppRoute
});
const AppContractorsRoute = Route$4.update({
  id: "/contractors",
  path: "/contractors",
  getParentRoute: () => AppRoute
});
const AppAuditLogsRoute = Route$3.update({
  id: "/audit-logs",
  path: "/audit-logs",
  getParentRoute: () => AppRoute
});
const AppAppointmentsRoute = Route$2.update({
  id: "/appointments",
  path: "/appointments",
  getParentRoute: () => AppRoute
});
const AppAnalyticsRoute = Route$1.update({
  id: "/analytics",
  path: "/analytics",
  getParentRoute: () => AppRoute
});
const AppPropertiesIdRoute = Route.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => AppPropertiesRoute
});
const AppPropertiesRouteChildren = {
  AppPropertiesIdRoute
};
const AppPropertiesRouteWithChildren = AppPropertiesRoute._addFileChildren(
  AppPropertiesRouteChildren
);
const AppRouteChildren = {
  AppAnalyticsRoute,
  AppAppointmentsRoute,
  AppAuditLogsRoute,
  AppContractorsRoute,
  AppDashboardRoute,
  AppEstimatesRoute,
  AppInvoicesRoute,
  AppLeasesRoute,
  AppNotificationsRoute,
  AppPropertiesRoute: AppPropertiesRouteWithChildren,
  AppServiceRequestsRoute,
  AppSettingsRoute,
  AppSubscriptionsRoute,
  AppSupportRoute,
  AppTenantsRoute,
  AppUsersRoute
};
const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AppRoute: AppRouteWithChildren,
  ForgotPasswordRoute,
  LoginRoute,
  ResetPasswordRoute,
  SignupRoute
};
const routeTree = Route$n._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};
