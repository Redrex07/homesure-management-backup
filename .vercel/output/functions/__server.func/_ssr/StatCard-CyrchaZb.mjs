import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card, a as CardContent } from "./card-DIV666p3.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { O as ArrowUpRight, Q as ArrowDownRight } from "../_libs/lucide-react.mjs";
const toneMap = {
  default: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/15 text-warning-foreground",
  destructive: "bg-destructive/10 text-destructive",
  info: "bg-info/10 text-info"
};
function StatCard({ label, value, icon: Icon, delta, hint, tone = "default" }) {
  const up = (delta ?? 0) >= 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/70 shadow-card transition-shadow hover:shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-semibold tracking-tight text-foreground", children: value }),
      (delta !== void 0 || hint) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2 text-xs", children: [
        delta !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn(
          "inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 font-medium",
          up ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
        ), children: [
          up ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { className: "h-3 w-3" }),
          Math.abs(delta),
          "%"
        ] }),
        hint && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: hint })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", toneMap[tone]), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) })
  ] }) }) });
}
export {
  StatCard as S
};
