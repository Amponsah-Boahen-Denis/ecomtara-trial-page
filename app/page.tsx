import Link from "next/link";
import {
  ShoppingBag,
  Sparkles,
  Check,
  Globe,
  Code2,
  Headphones,
  ShieldCheck,
  Layers,
  Boxes,
  Users,
  Truck,
  Lock,
  Store,
  Rocket,
  ArrowRight,
  Star,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const navItems = [
  "Home",
  "Demos",
  "Features",
  "Pricing",
  "Lifetime Plan",
  "Blog",
  "Contact",
];

const heroPills: { icon: LucideIcon; label: string }[] = [
  { icon: Globe, label: "All Domains" },
  { icon: Code2, label: "No Coding" },
  { icon: Headphones, label: "24/7 Support" },
  { icon: ShieldCheck, label: "Secure Updates" },
];

const stats: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Layers, value: "50+", label: "Premium Themes" },
  { icon: Boxes, value: "10+", label: "Ready-made Demos" },
  { icon: Star, value: "100%", label: "Satisfaction Guarantee" },
  { icon: Headphones, value: "24/7", label: "Customer Support" },
];

const features: {
  icon: LucideIcon;
  title: string;
  desc: string;
  tone: string;
}[] = [
  {
    icon: ShoppingBag,
    title: "E-commerce Website",
    desc: "Launch a professional online store with premium themes and an intuitive control panel.",
    tone: "bg-violet-100 text-violet-600",
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    desc: "Track stock, categories, and multi-branch operations from a single dashboard.",
    tone: "bg-blue-100 text-blue-600",
  },
  {
    icon: Users,
    title: "CRM System",
    desc: "Manage customer data, orders, and communication automatically in one place.",
    tone: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Truck,
    title: "Courier Automation",
    desc: "One-click integration with Pathao, Steadfast, RedX, and other major couriers.",
    tone: "bg-amber-100 text-amber-600",
  },
  {
    icon: Lock,
    title: "Smart Security",
    desc: "Enterprise-grade protection with advanced firewall and SSL out of the box.",
    tone: "bg-rose-100 text-rose-600",
  },
  {
    icon: Store,
    title: "Multi Store",
    desc: "Run multiple brands and stores together from a single unified dashboard.",
    tone: "bg-purple-100 text-purple-600",
  },
];

const demos: { name: string; url: string; tone: string; emoji: string }[] = [
  {
    name: "Electronics Demo",
    url: "electro.shopxet.com",
    tone: "from-blue-500 to-indigo-600",
    emoji: "🎧",
  },
  {
    name: "Food Demo",
    url: "food.shopxet.com",
    tone: "from-rose-500 to-orange-500",
    emoji: "🍔",
  },
  {
    name: "Cosmetics Demo",
    url: "cosmetics.shopxet.com",
    tone: "from-pink-400 to-pink-600",
    emoji: "💄",
  },
  {
    name: "Fashion Demo",
    url: "fashion.shopxet.com",
    tone: "from-slate-700 to-slate-900",
    emoji: "👗",
  },
];

const plans: {
  name: string;
  price: string;
  period: string;
  badge?: string;
  badgeTone?: string;
  features: string[];
  ctaTone: string;
}[] = [
  {
    name: "Monthly Plan",
    price: "$29",
    period: "/month",
    features: [
      "1,000 orders / month",
      "Premium themes",
      "All courier APIs",
      "Mobile app access",
      "24/7 support",
    ],
    ctaTone: "bg-violet-600 hover:bg-violet-700",
  },
  {
    name: "6-Month Plan",
    price: "$149",
    period: "/6 months",
    badge: "Popular",
    badgeTone: "bg-orange-500",
    features: [
      "5,000 orders / month",
      "Premium + custom themes",
      "Full courier integration",
      "Advanced analytics",
      "Priority support",
    ],
    ctaTone: "bg-orange-500 hover:bg-orange-600",
  },
  {
    name: "Annual Plan",
    price: "$269",
    period: "/year",
    badge: "Best Value",
    badgeTone: "bg-emerald-500",
    features: [
      "10,000 orders / month",
      "All premium features",
      "Free custom domain",
      "Multi-store support",
      "Dedicated account manager",
    ],
    ctaTone: "bg-emerald-500 hover:bg-emerald-600",
  },
];

const trustBrands = [
  "TechMart",
  "DailyFood",
  "BeautyCare",
  "FashionHub",
  "MegaStore",
  "DigitalShop",
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-9 items-center justify-center rounded-xl brand-gradient text-white shadow-md shadow-violet-500/30">
        <ShoppingBag className="size-5" />
      </div>
      <span className="text-xl font-bold tracking-tight text-violet-700">
        Ecomtara
      </span>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-violet-100/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item, i) => (
            <Link
              key={item}
              href="#"
              className={`text-sm transition-colors ${
                i === 0
                  ? "font-semibold text-violet-700"
                  : "text-slate-600 hover:text-violet-700"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>
        <Button
          render={<a href="#demo" />}
          className="brand-gradient h-10 rounded-xl px-5 text-white shadow-md shadow-violet-500/30 hover:opacity-90"
        >
          View Demo
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="soft-bg relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div>
          <Badge
            variant="secondary"
            className="mb-6 gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-violet-700"
          >
            <Sparkles className="size-3.5" />
            Your brand. Your e-commerce.
          </Badge>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
            The complete{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              SaaS
            </span>{" "}
            solution for your e-commerce business
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 lg:text-[1.05rem]">
            Ecomtara is a powerful, easy-to-use e-commerce SaaS platform.
            Website, inventory, CRM, and courier automation — all in one place.
            Take your business to new heights.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              render={<a href="#demo" />}
              className="brand-gradient h-12 rounded-xl px-6 text-[0.95rem] text-white shadow-lg shadow-violet-500/30 hover:opacity-90"
            >
              View Demo
              <ArrowRight className="ml-1 size-4" />
            </Button>
            <Button
              variant="outline"
              render={<a href="#pricing" />}
              className="h-12 rounded-xl border-violet-200 bg-white px-6 text-[0.95rem] text-violet-700 hover:bg-violet-50"
            >
              See Pricing
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {heroPills.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                  <Icon className="size-3" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <HeroShowcase />
      </div>
    </section>
  );
}

function HeroShowcase() {
  return (
    <div className="relative">
      <div className="relative ml-auto w-full max-w-xl rounded-2xl border border-violet-100 bg-white shadow-2xl shadow-violet-500/15">
        <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
          <span className="size-2.5 rounded-full bg-rose-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 text-[0.7rem] font-semibold text-slate-400">
            electro.shopxet.com
          </span>
        </div>
        <div className="relative h-44 overflow-hidden rounded-b-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-700">
          <div className="absolute inset-x-6 top-6 rounded-xl bg-white/95 p-4 shadow-lg">
            <div className="text-[0.65rem] font-semibold uppercase tracking-wider text-violet-600">
              Featured
            </div>
            <div className="mt-1 text-base font-bold text-slate-900">
              Mega Summer Sale 50% Off
            </div>
            <div className="mt-2 inline-flex items-center gap-1 rounded-md bg-violet-600 px-2 py-1 text-[0.65rem] font-semibold text-white">
              Shop Now
              <ArrowRight className="size-2.5" />
            </div>
          </div>
          <div className="absolute -right-2 bottom-2 text-6xl">🎧</div>
        </div>
        <div className="grid grid-cols-4 gap-2 px-4 py-3">
          {["📷", "⌚", "🎮", "💻"].map((e, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-lg bg-slate-50 text-2xl"
            >
              {e}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -left-4 -bottom-6 hidden w-44 rotate-[-6deg] rounded-[2rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl shadow-violet-500/30 sm:block lg:-left-10 lg:w-48">
        <div className="overflow-hidden rounded-[1.5rem] bg-white">
          <div className="flex items-center justify-between bg-rose-500 px-3 py-2 text-white">
            <span className="text-xs font-bold">food.</span>
            <span className="text-[0.6rem]">9:41</span>
          </div>
          <div className="relative h-24 bg-gradient-to-br from-rose-400 to-orange-500 p-3 text-white">
            <div className="text-[0.6rem] font-semibold">Featured</div>
            <div className="text-xs font-bold leading-tight">
              Delicious Food
              <br />
              Delivered Fast
            </div>
            <div className="absolute -right-1 bottom-1 text-3xl">🍔</div>
          </div>
          <div className="grid grid-cols-4 gap-1 p-2">
            {["🍕", "🍔", "🍟", "🌮"].map((e, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-md bg-slate-50 text-base"
              >
                {e}
              </div>
            ))}
          </div>
          <div className="px-2 pb-2">
            <div className="rounded-md border border-slate-100 p-1.5">
              <div className="text-[0.55rem] font-bold text-slate-900">
                Cheese Burger
              </div>
              <div className="text-[0.55rem] text-rose-500">$5.99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="mx-auto -mt-10 max-w-6xl px-4 lg:px-8">
      <Card className="rounded-2xl border-violet-100 shadow-md shadow-violet-500/5">
        <CardContent className="grid grid-cols-2 divide-y divide-violet-100 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4 p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                <Icon className="size-5" />
              </span>
              <div>
                <div className="text-2xl font-bold text-slate-900">
                  {value}
                </div>
                <div className="text-sm text-slate-500">{label}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
          Everything in one platform
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Every feature you need to run your e-commerce business — built in.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc, tone }) => (
          <Card
            key={title}
            className="rounded-2xl border-slate-100 transition-shadow hover:shadow-lg hover:shadow-violet-500/10"
          >
            <CardHeader>
              <div
                className={`mb-3 flex size-12 items-center justify-center rounded-xl ${tone}`}
              >
                <Icon className="size-6" />
              </div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="leading-relaxed text-slate-600">
                {desc}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

function LiveDemos() {
  return (
    <section id="demo" className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
          Our live demos
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Explore ready-made storefronts built for different categories.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {demos.map((d) => (
          <Card
            key={d.name}
            className="overflow-hidden rounded-2xl border-slate-100 p-0 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
          >
            <div
              className={`relative h-32 bg-gradient-to-br ${d.tone} text-white`}
            >
              <div className="absolute left-3 top-2 flex gap-1">
                <span className="size-1.5 rounded-full bg-white/70" />
                <span className="size-1.5 rounded-full bg-white/70" />
                <span className="size-1.5 rounded-full bg-white/70" />
              </div>
              <div className="absolute inset-x-4 bottom-3 rounded-md bg-white/95 p-2 text-slate-900">
                <div className="text-[0.6rem] font-semibold uppercase tracking-wide text-violet-600">
                  Featured
                </div>
                <div className="text-xs font-bold">
                  {d.name.replace(" Demo", "")}
                </div>
              </div>
              <div className="absolute right-2 top-2 text-3xl">{d.emoji}</div>
            </div>
            <CardContent className="px-4 py-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="flex size-6 items-center justify-center rounded-md bg-violet-100 text-violet-600">
                  <Store className="size-3.5" />
                </span>
                {d.name}
              </div>
              <div className="mt-1 text-xs text-violet-600">{d.url}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
          SaaS pricing plans
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Choose the plan that fits your business stage.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((p) => (
          <Card
            key={p.name}
            className="relative flex flex-col rounded-2xl border-slate-100 transition-shadow hover:shadow-xl hover:shadow-violet-500/10"
          >
            {p.badge && (
              <div
                className={`absolute right-4 top-4 rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold text-white ${p.badgeTone}`}
              >
                {p.badge}
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-base text-slate-700">
                {p.name}
              </CardTitle>
              <div className="mt-1">
                <span className="text-3xl font-bold text-slate-900">
                  {p.price}
                </span>
                <span className="ml-1 text-sm text-slate-500">{p.period}</span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <ul className="space-y-2.5 text-sm text-slate-600">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-6 h-11 rounded-xl text-white ${p.ctaTone}`}
              >
                Get started
              </Button>
            </CardContent>
          </Card>
        ))}

        <Card className="relative flex flex-col rounded-2xl border-violet-200 bg-gradient-to-br from-violet-50 to-white sm:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-base text-violet-700">
              Lifetime Plan
            </CardTitle>
            <p className="mt-1 text-sm text-slate-600">
              Pay once, get lifetime access and enjoy every premium feature.
            </p>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col justify-between">
            <ul className="space-y-2.5 text-sm text-slate-600">
              {[
                "Every feature in every plan",
                "Free lifetime updates",
                "Priority support",
                "Exclusive theme access",
                "Full customization",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                    <Check className="size-2.5" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-end justify-between gap-3">
              <Button
                variant="outline"
                className="h-10 rounded-xl border-violet-200 text-violet-700 hover:bg-violet-100"
              >
                Contact us
              </Button>
              <ShieldCheck className="size-12 shrink-0 text-violet-300" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <h3 className="mb-8 text-center text-xl font-semibold text-slate-700">
        Trusted by leading brands
      </h3>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
        {trustBrands.map((b) => (
          <div
            key={b}
            className="flex items-center justify-center gap-2 text-slate-500"
          >
            <Store className="size-5 text-violet-400" />
            <span className="text-sm font-semibold">{b}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="mx-auto mb-16 max-w-7xl px-4 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl brand-gradient px-6 py-10 text-white sm:px-10 lg:px-14">
        <div className="absolute -right-10 -top-10 size-48 rounded-full bg-white/10" />
        <div className="absolute -bottom-12 -left-12 size-56 rounded-full bg-white/5" />
        <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <Rocket className="size-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold leading-tight lg:text-3xl">
                Start your e-commerce journey today
              </h3>
              <p className="mt-2 max-w-xl text-sm text-white/80">
                Launch with Ecomtara and take your business to the next level.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button className="h-11 rounded-xl bg-white px-5 text-violet-700 hover:bg-violet-50">
              View Demo
            </Button>
            <Button
              variant="outline"
              className="h-11 rounded-xl border-white/40 bg-transparent px-5 text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Ecomtara. All rights reserved.
    </footer>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <LiveDemos />
      <Pricing />
      <Trust />
      <CtaBanner />
      <Footer />
    </main>
  );
}
