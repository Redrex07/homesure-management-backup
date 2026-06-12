import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { P as PageHeader } from "./PageHeader-DxoWeRaK.mjs";
import { S as StatusBadge } from "./StatusBadge-Bnx6YLB6.mjs";
import { D as DataTable } from "./DataTable-gtLMsyX4.mjs";
import { S as StatCard } from "./StatCard-CyrchaZb.mjs";
import { s as subscriptions } from "./mock-data-rNC_n49y.mjs";
import { r as Plus, e as CreditCard, D as DollarSign, T as TrendingUp } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/tailwind-merge.mjs";
import "./badge-DyfXZgLs.mjs";
import "./input-C0QjszdI.mjs";
import "./card-DIV666p3.mjs";
function SubsPage() {
  const mrr = subscriptions.reduce((s, x) => s + x.mrr, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Subscriptions", description: "Plans, billing and renewals.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
      " Add subscription"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Active subs", value: String(subscriptions.filter((s) => s.status === "Active").length), icon: CreditCard, tone: "success" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "MRR", value: `$${mrr.toLocaleString()}`, icon: DollarSign, tone: "success", delta: 14 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Trials", value: String(subscriptions.filter((s) => s.status === "Trial").length), icon: TrendingUp, tone: "info" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { rows: subscriptions, filterKeys: ["customer", "plan"], columns: [{
      key: "id",
      header: "ID",
      render: (s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs", children: s.id })
    }, {
      key: "customer",
      header: "Customer",
      sortable: true,
      render: (s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: s.customer })
    }, {
      key: "plan",
      header: "Plan"
    }, {
      key: "seats",
      header: "Seats"
    }, {
      key: "mrr",
      header: "MRR",
      render: (s) => `$${s.mrr}`
    }, {
      key: "renews",
      header: "Renews"
    }, {
      key: "status",
      header: "Status",
      render: (s) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { value: s.status })
    }] })
  ] });
}
export {
  SubsPage as component
};
