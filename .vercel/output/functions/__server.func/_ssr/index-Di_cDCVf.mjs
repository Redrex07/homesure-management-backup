import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { C as Card, a as CardContent } from "./card-DIV666p3.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { L as Logo } from "./Logo-R6GRY_qd.mjs";
import { A as ArrowRight, o as Sparkles, k as Check, B as Building2, W as Wrench, U as Users, b as Calendar, R as Receipt, p as ShieldCheck, a as ChartColumn, d as Bell, q as Star } from "../_libs/lucide-react.mjs";
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
const features = [{
  icon: Building2,
  title: "Property portfolio",
  body: "Track properties, units, occupancy and rent in one elegant dashboard."
}, {
  icon: Wrench,
  title: "Maintenance workflow",
  body: "Create, assign, and resolve service requests with full audit trail."
}, {
  icon: Users,
  title: "Multi-role access",
  body: "Six tailored experiences: Super Admin, Service Admin, Landlord, Tenant, Contractor, Realtor."
}, {
  icon: Calendar,
  title: "Appointment calendar",
  body: "Schedule contractor visits with reminders and rescheduling."
}, {
  icon: Receipt,
  title: "Invoicing & rent",
  body: "Track payments, overdue invoices and revenue across the platform."
}, {
  icon: ShieldCheck,
  title: "Warranty coverage",
  body: "Bundle home warranty plans into your management workflow."
}, {
  icon: ChartColumn,
  title: "Real-time analytics",
  body: "Revenue, request volume, completion rates and tenant insights."
}, {
  icon: Bell,
  title: "Notification center",
  body: "Real-time alerts across email, in-app, and mobile."
}];
const plans = [{
  name: "Starter",
  price: 49,
  blurb: "For new landlords getting organized.",
  features: ["Up to 5 properties", "Tenant & lease management", "Maintenance requests", "Email support"]
}, {
  name: "Pro",
  price: 149,
  blurb: "For growing portfolios and teams.",
  features: ["Up to 50 properties", "Contractor marketplace", "Estimates & invoicing", "Advanced analytics", "Priority support"],
  popular: true
}, {
  name: "Enterprise",
  price: 599,
  blurb: "For property management firms.",
  features: ["Unlimited properties", "All Pro features", "Custom roles & SSO", "Dedicated CSM", "SLA & audit logs"]
}];
const testimonials = [{
  name: "Daniel Ortiz",
  role: "Owner, Ortiz Holdings",
  quote: "We cut maintenance turnaround by 38% in the first quarter. The contractor workflow alone paid for the platform."
}, {
  name: "Priya Raman",
  role: "Landlord, 22 units",
  quote: "Finally a tool that doesn't feel like a spreadsheet. Tenants actually use the app to pay rent on time."
}, {
  name: "Linda Park",
  role: "Realtor, Park & Co.",
  quote: "Listing analytics and tenant onboarding in the same dashboard is a game changer for our team."
}];
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-foreground", children: "Features" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#pricing", className: "hover:text-foreground", children: "Pricing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#testimonials", className: "hover:text-foreground", children: "Customers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-foreground", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", children: "Sign in" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "gap-1", children: [
          "Start free ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.95_0.04_260),transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "mb-6 gap-1.5 border-primary/30 bg-primary-soft text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
            " New: Home Warranty Module 2026"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl font-bold tracking-tight text-foreground sm:text-6xl", children: [
            "Property management ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-primary to-info bg-clip-text text-transparent", children: "that actually feels modern." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground sm:text-xl", children: "HomeSure unifies properties, tenants, contractors and warranty services for landlords, realtors and managers — in one beautifully designed dashboard." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "gap-2", children: [
              "Start free trial ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", children: "Live demo" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-success" }),
            " 14-day free trial · No credit card required"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-16 max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-2 shadow-elegant ring-1 ring-primary/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-border bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 border-b border-border bg-background/80 px-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-destructive/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-warning/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-success/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-3 text-xs text-muted-foreground", children: "app.homesure.com/dashboard" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 p-4 sm:grid-cols-4", children: [{
            l: "Properties",
            v: "128",
            d: "+12%"
          }, {
            l: "Active tenants",
            v: "412",
            d: "+4%"
          }, {
            l: "Open requests",
            v: "37",
            d: "-8%"
          }, {
            l: "MRR",
            v: "$71.9k",
            d: "+18%"
          }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium uppercase tracking-wide text-muted-foreground", children: s.l }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xl font-semibold", children: s.v }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[10px] text-success", children: [
              s.d,
              " vs last month"
            ] })
          ] }, s.l)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 px-4 pb-4 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 h-40 rounded-lg border border-border bg-gradient-to-br from-primary-soft via-background to-info/5 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-foreground", children: "Revenue trend" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 120", className: "mt-2 h-28 w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: "0.4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,90 C50,80 80,60 120,55 C170,48 200,70 240,52 C290,30 320,20 400,12 L400,120 L0,120 Z", fill: "url(#g)", className: "text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,90 C50,80 80,60 120,55 C170,48 200,70 240,52 C290,30 320,20 400,12", fill: "none", strokeWidth: "2", className: "stroke-primary" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-40 rounded-lg border border-border bg-card p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-foreground", children: "Recent requests" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-2 text-xs", children: ["Leaking faucet · Maplewood", "AC not cooling · Sunset", "Outlet sparks · Oakridge"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-md border border-border/60 px-2 py-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "2h" })
              ] }, t)) })
            ] })
          ] })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "border-b border-border/60 py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Platform" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold tracking-tight sm:text-4xl", children: "Everything you need to run a portfolio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "From day-one onboarding to long-term warranty coverage, HomeSure replaces a stack of disconnected tools." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/70 transition-shadow hover:shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-semibold", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: f.body })
      ] }) }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pricing", className: "border-b border-border/60 py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Pricing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold tracking-tight sm:text-4xl", children: "Simple plans, no surprises" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Start free for 14 days. Switch plans or cancel anytime." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 lg:grid-cols-3", children: plans.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: p.popular ? "relative border-primary/40 shadow-elegant ring-1 ring-primary/20" : "border-border/70", children: [
        p.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary text-primary-foreground", children: "Most popular" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: p.blurb }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-4xl font-bold", children: [
              "$",
              p.price
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "/month" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", className: "mt-5 block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full", variant: p.popular ? "default" : "outline", children: "Start free trial" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2.5 text-sm", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-success" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
          ] }, f)) })
        ] })
      ] }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "testimonials", className: "border-b border-border/60 py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Customers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold tracking-tight sm:text-4xl", children: "Loved by landlords & teams" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 lg:grid-cols-3", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-warning", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm leading-relaxed text-foreground", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
        ] })
      ] }) }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "border-b border-border/60 py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold tracking-tight sm:text-4xl", children: "Talk to our team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Have questions about migrating from your current PMS or rolling out HomeSure across multiple regions? We'd love to chat." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Sales:" }),
            " sales@homesure.app"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Support:" }),
            " support@homesure.app"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Phone:" }),
            " +1 (888) 555-HOME"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/70 shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "grid gap-3", onSubmit: (e) => {
        e.preventDefault();
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2", placeholder: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2", placeholder: "Company" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2", placeholder: "Work email", type: "email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, className: "rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2", placeholder: "How can we help?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "mt-2", children: "Send message" })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border/60 bg-gradient-to-br from-primary to-info py-20 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 text-center sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold tracking-tight sm:text-4xl", children: "Ready to modernize your portfolio?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-primary-foreground/85", children: "Join 1,200+ landlords and management firms running on HomeSure." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "secondary", className: "bg-background text-foreground hover:bg-background/90", children: "Start free trial" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", className: "border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10", children: "Live demo" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-background py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-4 sm:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "Modern property management & home warranty platform." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-foreground", children: "Features" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#pricing", className: "hover:text-foreground", children: "Pricing" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "hover:text-foreground", children: "Sign in" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "About" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Customers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Careers" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Legal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Privacy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Terms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Security" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-10 max-w-7xl border-t border-border px-4 pt-6 text-xs text-muted-foreground sm:px-6", children: "© 2026 HomeSure Management. All rights reserved." })
    ] })
  ] });
}
export {
  Landing as component
};
