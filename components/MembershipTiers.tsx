"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    name: "Starter",
    price: "$79",
    period: "/month",
    highlights: "Getting consistent 1–2x/week",
    features: [
      "4 classes per month",
      "Open gym access",
      "1 complimentary InBody scan",
    ],
    cta: {
      label: "Choose Starter",
      href: "/contact?intent=starter",
    },
    highlighted: false,
  },
  {
    name: "Peak",
    price: "$129",
    period: "/month",
    highlights: "Training 3–4x/week",
    features: [
      "Unlimited classes",
      "Open gym access",
      "Monthly InBody scan",
      "Priority booking (48 hours)",
    ],
    cta: {
      label: "Choose Peak",
      href: "/contact?intent=peak",
    },
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Elite",
    price: "$219",
    period: "/month",
    highlights: "Fast results with coaching support",
    features: [
      "Unlimited classes",
      "2 personal training sessions/month",
      "Nutrition check-in (monthly)",
      "Priority booking (72 hours)",
    ],
    cta: {
      label: "Choose Elite",
      href: "/contact?intent=elite",
    },
    highlighted: false,
  },
];

const ADDONS = [
  {
    name: "1:1 Personal Training",
    price: "$85",
    unit: "per session",
    details: "50 minutes • customized plan • form coaching"
  },
  {
    name: "PT Pack (8 sessions)",
    price: "$640",
    unit: "pack",
    details: "Save $40 • use within 60 days"
  }
];

export default function MembershipTiers() {
  return (
    <section id="plans" className="py-16 md:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 animate-fade-in-up">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground" style={{ fontFamily: "var(--font-anton), 'Anton'" }}>
            Memberships Built for Momentum
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose a plan that matches your schedule. Upgrade anytime as your training becomes a habit.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative rounded-xl border flex flex-col bg-card card-hover shadow group transition-all p-7",
                tier.highlighted
                  ? "border-destructive ring-2 ring-destructive scale-105"
                  : "border-border"
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-block bg-destructive text-primary-foreground uppercase rounded-full px-5 py-1 text-xs font-bold shadow">
                    {tier.badge}
                  </span>
                </div>
              )}
              <div className="text-center mb-4">
                <div className="text-xl font-bold uppercase tracking-wide text-foreground" style={{ fontFamily: "var(--font-anton), 'Anton'" }}>
                  {tier.name}
                </div>
                <div className="mt-1 text-destructive font-semibold">{tier.highlights}</div>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
              </div>
              <ul className="flex-1 mt-4 mb-7 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-destructive">&#10003;</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.highlighted ? "destructive" : "outline"}
                className={cn(
                  "w-full uppercase tracking-wide font-semibold transition-all duration-150 hover:scale-105"
                )}
                asChild
              >
                <a href={tier.cta.href}>{tier.cta.label}</a>
              </Button>
            </div>
          ))}
        </div>
        {/* Add-ons */}
        <div className="mt-14 max-w-2xl mx-auto text-center">
          <div className="font-semibold text-lg text-foreground mb-2">Personal Training Add-Ons</div>
          <ul className="flex flex-wrap gap-6 justify-center">
            {ADDONS.map((addon) => (
              <li key={addon.name} className="rounded-lg bg-card border border-border py-3 px-5 shadow-sm text-sm">
                <span className="font-bold text-destructive">{addon.price}</span>
                {" "}
                <span className="text-muted-foreground">{addon.unit}</span>
                <div className="mt-1 text-muted-foreground">{addon.details}</div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xs text-muted-foreground">
            All memberships include locker rooms, towel service, and access to open gym during staffed hours. 30-day notice to cancel after the first month.
          </div>
        </div>
      </div>
    </section>
  );
}
