import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { P as PageHeader } from "./PageHeader-DxoWeRaK.mjs";
import { S as StatusBadge } from "./StatusBadge-Bnx6YLB6.mjs";
import { D as DataTable } from "./DataTable-gtLMsyX4.mjs";
import { a as tickets } from "./mock-data-rNC_n49y.mjs";
import { r as Plus } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/tailwind-merge.mjs";
import "./badge-DyfXZgLs.mjs";
import "./input-C0QjszdI.mjs";
import "./card-DIV666p3.mjs";
function SupportPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Support tickets", description: "Customer support queue and resolutions.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
      " New ticket"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { rows: tickets, filterKeys: ["subject", "user", "id"], columns: [{
      key: "id",
      header: "ID",
      render: (t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs", children: t.id })
    }, {
      key: "subject",
      header: "Subject",
      sortable: true,
      render: (t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t.subject })
    }, {
      key: "user",
      header: "Reporter",
      render: (t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: t.user }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
      ] })
    }, {
      key: "priority",
      header: "Priority",
      render: (t) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { value: t.priority })
    }, {
      key: "created",
      header: "Created"
    }, {
      key: "status",
      header: "Status",
      render: (t) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { value: t.status })
    }] })
  ] });
}
export {
  SupportPage as component
};
