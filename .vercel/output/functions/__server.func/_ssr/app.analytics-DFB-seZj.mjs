import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-DxoWeRaK.mjs";
import { S as StatCard } from "./StatCard-CyrchaZb.mjs";
import { C as ChartCard, R as RevenueArea, a as RequestsBar, b as CategoryPie, P as Progress } from "./Charts-nrIJUvHH.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-DIV666p3.mjs";
import { r as revenueSeries, f as requestsSeries, h as categoryBreakdown } from "./mock-data-rNC_n49y.mjs";
import { D as DollarSign, B as Building2, U as Users, W as Wrench } from "../_libs/lucide-react.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-progress.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/recharts.mjs";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
function AnalyticsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Analytics", description: "Revenue, service operations and user metrics." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Revenue (mo)", value: "$71,900", icon: DollarSign, tone: "success", delta: 18 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Occupancy", value: "92%", icon: Building2, tone: "info", delta: 3 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Active users", value: "4,218", icon: Users, delta: 12 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Avg. resolution", value: "2.4d", icon: Wrench, tone: "warning", delta: -9 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Revenue trend", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RevenueArea, { data: revenueSeries }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Request volume", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RequestsBar, { data: requestsSeries }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Request categories", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryPie, { data: categoryBreakdown }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/70 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Top performing properties" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: [{
          name: "Maplewood Apartments #3B",
          v: 96
        }, {
          name: "Birchwood Townhome",
          v: 88
        }, {
          name: "Oakridge Single Family",
          v: 81
        }, {
          name: "Harbor View Loft 12",
          v: 72
        }, {
          name: "Sunset Villas #7",
          v: 65
        }].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: p.v })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: p.v, className: "mt-1.5" })
        ] }, p.name)) })
      ] })
    ] })
  ] });
}
export {
  AnalyticsPage as component
};
