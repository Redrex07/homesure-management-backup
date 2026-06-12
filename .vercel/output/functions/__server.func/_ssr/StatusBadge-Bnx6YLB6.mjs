import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
const map = {
  Active: "bg-success/10 text-success border-success/20",
  Paid: "bg-success/10 text-success border-success/20",
  Approved: "bg-success/10 text-success border-success/20",
  Completed: "bg-success/10 text-success border-success/20",
  Resolved: "bg-success/10 text-success border-success/20",
  Occupied: "bg-success/10 text-success border-success/20",
  Pending: "bg-warning/15 text-warning-foreground border-warning/30",
  "In Progress": "bg-info/10 text-info border-info/20",
  Assigned: "bg-info/10 text-info border-info/20",
  Scheduled: "bg-info/10 text-info border-info/20",
  Trial: "bg-info/10 text-info border-info/20",
  Onboarding: "bg-info/10 text-info border-info/20",
  Listed: "bg-info/10 text-info border-info/20",
  Open: "bg-info/10 text-info border-info/20",
  Draft: "bg-muted text-muted-foreground border-border",
  Vacant: "bg-muted text-muted-foreground border-border",
  Maintenance: "bg-warning/15 text-warning-foreground border-warning/30",
  Invited: "bg-warning/15 text-warning-foreground border-warning/30",
  Overdue: "bg-destructive/10 text-destructive border-destructive/20",
  "Past Due": "bg-destructive/10 text-destructive border-destructive/20",
  Urgent: "bg-destructive/10 text-destructive border-destructive/20",
  High: "bg-destructive/10 text-destructive border-destructive/20",
  Medium: "bg-warning/15 text-warning-foreground border-warning/30",
  Low: "bg-muted text-muted-foreground border-border"
};
function StatusBadge({ value, className }) {
  const cls = map[value] ?? "bg-muted text-muted-foreground border-border";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: cn("font-medium", cls, className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current opacity-80") }),
    value
  ] });
}
export {
  StatusBadge as S
};
