import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { C as Card, a as CardContent } from "./card-DIV666p3.mjs";
import { P as PageHeader } from "./PageHeader-DxoWeRaK.mjs";
import { n as notifications } from "./mock-data-rNC_n49y.mjs";
import { k as Check, d as Bell } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/tailwind-merge.mjs";
function NotificationsPage() {
  const [notes, setNotes] = reactExports.useState(notifications);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Notifications", description: "All recent activity in your workspace.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => setNotes(notes.map((n) => ({
      ...n,
      read: true
    }))), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mr-2 h-4 w-4" }),
      "Mark all read"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/70 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "divide-y divide-border p-0", children: notes.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-4 p-4 ${!n.read ? "bg-primary-soft/30" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${!n.read ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: n.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: n.time })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-sm text-muted-foreground", children: n.body })
      ] })
    ] }, n.id)) }) })
  ] });
}
export {
  NotificationsPage as component
};
