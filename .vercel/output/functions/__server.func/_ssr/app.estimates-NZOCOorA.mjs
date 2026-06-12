import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { P as PageHeader } from "./PageHeader-DxoWeRaK.mjs";
import { S as StatusBadge } from "./StatusBadge-Bnx6YLB6.mjs";
import { D as DataTable } from "./DataTable-gtLMsyX4.mjs";
import { e as estimates } from "./mock-data-rNC_n49y.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { r as Plus, k as Check, X } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/tailwind-merge.mjs";
import "./badge-DyfXZgLs.mjs";
import "./input-C0QjszdI.mjs";
import "./card-DIV666p3.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function EstimatesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Estimates", description: "Submitted estimates awaiting approval.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
      " Submit estimate"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { rows: estimates, filterKeys: ["id", "request", "contractor"], columns: [{
      key: "id",
      header: "Estimate",
      render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs", children: e.id })
    }, {
      key: "request",
      header: "Request",
      render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs", children: e.request })
    }, {
      key: "contractor",
      header: "Contractor"
    }, {
      key: "submitted",
      header: "Submitted"
    }, {
      key: "amount",
      header: "Amount",
      sortable: true,
      render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
        "$",
        e.amount.toLocaleString()
      ] })
    }, {
      key: "status",
      header: "Status",
      render: (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { value: e.status })
    }, {
      key: "actions",
      header: "",
      render: (e) => e.status === "Pending" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-8 px-2", onClick: () => toast.success("Estimate approved"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-success" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-8 px-2", onClick: () => toast.error("Estimate rejected"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5 text-destructive" }) })
      ] }) : null
    }] })
  ] });
}
export {
  EstimatesPage as component
};
