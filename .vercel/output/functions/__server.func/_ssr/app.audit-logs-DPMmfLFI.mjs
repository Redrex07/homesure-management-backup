import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-DxoWeRaK.mjs";
import { D as DataTable } from "./DataTable-gtLMsyX4.mjs";
import { j as auditLogs } from "./mock-data-rNC_n49y.mjs";
import "./input-C0QjszdI.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./button-BC9oXVxV.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "./card-DIV666p3.mjs";
import "../_libs/lucide-react.mjs";
function AuditPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Audit logs", description: "A complete record of platform activity." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { rows: auditLogs, filterKeys: ["action", "actor", "ip"], columns: [{
      key: "time",
      header: "Time",
      render: (l) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs", children: l.time })
    }, {
      key: "actor",
      header: "Actor"
    }, {
      key: "action",
      header: "Action",
      render: (l) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: l.action })
    }, {
      key: "ip",
      header: "IP",
      render: (l) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: l.ip })
    }] })
  ] });
}
export {
  AuditPage as component
};
