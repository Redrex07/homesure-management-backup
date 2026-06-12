import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { P as PageHeader } from "./PageHeader-DxoWeRaK.mjs";
import { S as StatusBadge } from "./StatusBadge-Bnx6YLB6.mjs";
import { D as DataTable } from "./DataTable-gtLMsyX4.mjs";
import { p as properties } from "./mock-data-rNC_n49y.mjs";
import { v as Download, r as Plus } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/tailwind-merge.mjs";
import "./badge-DyfXZgLs.mjs";
import "./input-C0QjszdI.mjs";
import "./card-DIV666p3.mjs";
function PropertiesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Properties", description: "All properties in your portfolio.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
        " Export"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
        " Add property"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { rows: properties, filterKeys: ["name", "address", "id", "tenant"], columns: [{
      key: "name",
      header: "Property",
      sortable: true,
      render: (p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: "", className: "h-10 w-14 rounded-md object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/app/properties/$id", params: {
            id: p.id
          }, className: "text-sm font-medium hover:underline", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: p.address })
        ] })
      ] })
    }, {
      key: "id",
      header: "ID",
      render: (p) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: p.id })
    }, {
      key: "type",
      header: "Type",
      sortable: true
    }, {
      key: "tenant",
      header: "Tenant",
      render: (p) => p.tenant ?? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "—" })
    }, {
      key: "rent",
      header: "Rent",
      sortable: true,
      render: (p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
        "$",
        p.rent.toLocaleString()
      ] })
    }, {
      key: "status",
      header: "Status",
      render: (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { value: p.status })
    }] })
  ] });
}
export {
  PropertiesPage as component
};
