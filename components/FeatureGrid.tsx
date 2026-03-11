"use client";

import { cn } from "@/lib/utils";
import { Flame, HeartPulse, Bike, BoxingGlove, Check } from "lucide-react";

const FEATURES = [
  {
    title: "HIIT: Peak Conditioning",
    icon: Flame,
    description:
      "Warm-up, strength circuit, conditioning intervals, and a short finisher. Scaled options always available.",
    bullets: [
      "Dumbbells, kettlebells, sleds",
      "Heart-rate style pacing",
      "Technique-first coaching",
    ],
  },
  {
    title: "Yoga: Mobility + Reset",
    icon: HeartPulse,
    description:
      "Athletic yoga designed for lifters and desk workers—mobility, stability, and breathwork.",
    bullets: [
      "Hips/shoulders focus",
      "Core stability",
      "Recovery-friendly pacing",
    ],
  },
  {
    title: "Spinning: Power Ride",
    icon: Bike,
    description:
      "Music-driven rides with structured intervals. You’ll learn cadence and resistance targets.",
    bullets: [
      "Climbs + sprints",
      "Endurance blocks",
      "Coach cues for form",
    ],
  },
  {
    title: "Boxing: Fundamentals + Bags",
    icon: BoxingGlove,
    description:
      "Footwork, basic combos, and heavy-bag rounds. No sparring—just skill and conditioning.",
    bullets: [
      "Beginner-friendly",
      "Wraps recommended",
      "High-calorie burn",
    ],
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 animate-fade-in-up">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground" style={{ fontFamily: "var(--font-anton), 'Anton'" }}>
            What to Expect in Each Class
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Clear coaching, smart progressions, and a high-energy room.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="card-hover rounded-xl border border-border bg-card p-7 shadow group transition-all flex flex-col"
            >
              <div className="flex items-center justify-center mb-3">
                <feature.icon className="h-8 w-8 text-destructive" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold uppercase mb-2 text-foreground" style={{ fontFamily: "var(--font-anton), 'Anton'" }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
              <ul className="mt-3 flex-1 space-y-2">
                {feature.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-destructive" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
