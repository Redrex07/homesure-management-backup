import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Logo } from "./Logo-R6GRY_qd.mjs";
import { C as CircleCheck } from "../_libs/lucide-react.mjs";
function AuthShell({ title, subtitle, children, footer }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-h-screen lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col px-6 py-8 sm:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight text-foreground", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7", children }),
        footer && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center text-sm text-muted-foreground", children: footer })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-xs text-muted-foreground", children: "© 2026 HomeSure Management" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden overflow-hidden bg-gradient-to-br from-primary via-primary to-info p-12 text-primary-foreground lg:flex lg:flex-col lg:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_right,oklch(1_0_0_/_0.18),transparent_50%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest opacity-80", children: "The HomeSure platform" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-bold leading-tight", children: "One workspace for properties, tenants, contractors and warranty." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "relative space-y-3 text-sm", children: [
        "Six tailored role-based dashboards",
        "Real-time service request workflow",
        "Built-in invoicing & rent collection",
        "Audit logs and SOC-2 ready controls"
      ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 shrink-0" }),
        " ",
        b
      ] }, b)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 p-4 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm italic", children: '"HomeSure replaced four different tools for our team. Onboarding tenants takes minutes."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs opacity-80", children: "— Priya Raman, Landlord with 22 units" })
      ] })
    ] })
  ] });
}
export {
  AuthShell as A
};
