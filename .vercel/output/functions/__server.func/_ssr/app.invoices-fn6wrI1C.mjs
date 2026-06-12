import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { P as PageHeader } from "./PageHeader-DxoWeRaK.mjs";
import { S as StatCard } from "./StatCard-CyrchaZb.mjs";
import { S as StatusBadge } from "./StatusBadge-Bnx6YLB6.mjs";
import { D as DataTable } from "./DataTable-gtLMsyX4.mjs";
import { i as invoices } from "./mock-data-rNC_n49y.mjs";
import { D as DollarSign, w as Clock, x as TriangleAlert, v as Download } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/tailwind-merge.mjs";
import "./card-DIV666p3.mjs";
import "./badge-DyfXZgLs.mjs";
import "./input-C0QjszdI.mjs";
function InvoicesPage() {
  const paid = invoices.filter((i) => i.status === "Paid").reduce((s, i) => s + i.amount, 0);
  const pending = invoices.filter((i) => i.status === "Pending").reduce((s, i) => s + i.amount, 0);
  const overdue = invoices.filter((i) => i.status === "Overdue").reduce((s, i) => s + i.amount, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Invoices", description: "Track billing, payments and overdue accounts." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Paid (mo)", value: `$${paid.toLocaleString()}`, icon: DollarSign, tone: "success" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Pending", value: `$${pending.toLocaleString()}`, icon: Clock, tone: "warning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Overdue", value: `$${overdue.toLocaleString()}`, icon: TriangleAlert, tone: "destructive" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { rows: invoices, filterKeys: ["id", "request"], columns: [{
      key: "id",
      header: "Invoice",
      render: (i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs", children: i.id })
    }, {
      key: "request",
      header: "Request",
      render: (i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: i.request })
    }, {
      key: "issued",
      header: "Issued"
    }, {
      key: "due",
      header: "Due"
    }, {
      key: "amount",
      header: "Amount",
      sortable: true,
      render: (i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
        "$",
        i.amount.toLocaleString()
      ] })
    }, {
      key: "status",
      header: "Status",
      render: (i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { value: i.status })
    }, {
      key: "actions",
      header: "",
      render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }) })
    }] })
  ] });
}
export {
  InvoicesPage as component
};
