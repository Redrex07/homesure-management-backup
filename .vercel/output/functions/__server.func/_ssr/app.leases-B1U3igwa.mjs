import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { P as PageHeader } from "./PageHeader-DxoWeRaK.mjs";
import { D as DataTable } from "./DataTable-gtLMsyX4.mjs";
import { t as tenants, l as leaseDocs } from "./mock-data-rNC_n49y.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-DIV666p3.mjs";
import { v as Download, c as FileText } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/tailwind-merge.mjs";
import "./input-C0QjszdI.mjs";
function LeasesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Lease agreements", description: "All active and upcoming leases.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", children: "New lease" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { rows: tenants.filter((t) => t.status === "Active"), filterKeys: ["name", "property"], columns: [{
      key: "name",
      header: "Tenant"
    }, {
      key: "property",
      header: "Property"
    }, {
      key: "leaseStart",
      header: "Start"
    }, {
      key: "leaseEnd",
      header: "End"
    }, {
      key: "rent",
      header: "Rent",
      render: (t) => `$${t.rent.toLocaleString()}`
    }, {
      key: "actions",
      header: "",
      render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }) })
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/70 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Recent lease documents" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "grid gap-2 sm:grid-cols-2", children: leaseDocs.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-md border border-border/60 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-md bg-primary-soft text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: d.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            d.size,
            " · ",
            d.updated
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }) })
      ] }, d.id)) })
    ] })
  ] });
}
export {
  LeasesPage as component
};
