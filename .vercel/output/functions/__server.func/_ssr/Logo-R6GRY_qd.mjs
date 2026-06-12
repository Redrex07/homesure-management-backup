import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { h as House } from "../_libs/lucide-react.mjs";
function Logo({ className, showText = true }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-2", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70 shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-4 w-4 text-primary-foreground", strokeWidth: 2.5 }) }),
    showText && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold tracking-tight text-foreground", children: "HomeSure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground", children: "Management" })
    ] })
  ] });
}
export {
  Logo as L
};
