import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { R as Root, I as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-DIV666p3.mjs";
import { R as ResponsiveContainer, A as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, a as Area, B as BarChart, L as Legend, b as Bar, P as PieChart, c as Pie, d as Cell } from "../_libs/recharts.mjs";
const Progress = reactExports.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = Root.displayName;
const tooltipStyle = {
  contentStyle: {
    background: "var(--color-popover)",
    border: "1px solid var(--color-border)",
    borderRadius: "8px",
    fontSize: "12px",
    boxShadow: "var(--shadow-elegant)"
  },
  labelStyle: { color: "var(--color-muted-foreground)", fontSize: "11px" }
};
function ChartCard({ title, action, children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `border-border/70 shadow-card ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: title }),
      action
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pl-2", children })
  ] });
}
function RevenueArea({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data, margin: { top: 10, right: 16, left: 0, bottom: 0 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "rev", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--color-primary)", stopOpacity: 0.35 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--color-primary)", stopOpacity: 0 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "exp", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--color-info)", stopOpacity: 0.25 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--color-info)", stopOpacity: 0 })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)", vertical: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", stroke: "var(--color-muted-foreground)", fontSize: 11, tickLine: false, axisLine: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--color-muted-foreground)", fontSize: 11, tickLine: false, axisLine: false, tickFormatter: (v) => `$${v / 1e3}k` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { ...tooltipStyle, formatter: (v) => `$${v.toLocaleString()}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "revenue", stroke: "var(--color-primary)", strokeWidth: 2, fill: "url(#rev)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "expenses", stroke: "var(--color-info)", strokeWidth: 2, fill: "url(#exp)" })
  ] }) });
}
function RequestsBar({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data, margin: { top: 10, right: 16, left: 0, bottom: 0 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)", vertical: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "day", stroke: "var(--color-muted-foreground)", fontSize: 11, tickLine: false, axisLine: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--color-muted-foreground)", fontSize: 11, tickLine: false, axisLine: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { ...tooltipStyle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 11 }, iconType: "circle" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "created", fill: "var(--color-primary)", radius: [4, 4, 0, 0] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "completed", fill: "var(--color-success)", radius: [4, 4, 0, 0] })
  ] }) });
}
const PIE_COLORS = ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)", "var(--color-chart-4)", "var(--color-chart-5)"];
function CategoryPie({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data, dataKey: "value", nameKey: "name", innerRadius: 50, outerRadius: 85, paddingAngle: 2, stroke: "var(--color-background)", children: data.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: PIE_COLORS[i % PIE_COLORS.length] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { ...tooltipStyle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { iconType: "circle", wrapperStyle: { fontSize: 11 } })
  ] }) });
}
export {
  ChartCard as C,
  Progress as P,
  RevenueArea as R,
  RequestsBar as a,
  CategoryPie as b
};
