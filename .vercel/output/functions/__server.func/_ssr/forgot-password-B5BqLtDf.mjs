import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AuthShell } from "./AuthShell-C_Ux1XTK.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { M as MailCheck } from "../_libs/lucide-react.mjs";
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
import "./Logo-R6GRY_qd.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
function ForgotPage() {
  const [sent, setSent] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthShell, { title: "Forgot password", subtitle: "We'll send you a reset link.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Remembered? ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "font-medium text-primary hover:underline", children: "Back to sign in" })
  ] }), children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-success/20 bg-success/10 p-4 text-sm text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-medium text-success", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MailCheck, { className: "h-4 w-4" }),
      " Check your inbox"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5 text-muted-foreground", children: [
      "If an account exists for ",
      email,
      ", we sent a reset link."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/reset-password", className: "mt-3 inline-block text-xs font-medium text-primary hover:underline", children: "Open reset page (demo) →" })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-4", onSubmit: (e) => {
    e.preventDefault();
    setSent(true);
    toast.success("Reset link sent");
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", children: "Send reset link" })
  ] }) });
}
export {
  ForgotPage as component
};
