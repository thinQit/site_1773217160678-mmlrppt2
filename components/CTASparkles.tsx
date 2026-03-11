"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const OFFER_BULLETS = [
  "One free class or 30-minute training consult",
  "Beginner-friendly options available daily",
  "Includes quick movement screen + goal chat"
];

export default function CTASparkles() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-background via-muted to-background relative">
      {/* Sparkle element */}
      <Sparkles className="absolute left-3 top-3 w-16 h-16 text-destructive opacity-30 animate-spin pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight gradient-text mb-5" style={{ fontFamily: "var(--font-anton), 'Anton'" }}>
          Get Your First Session Free
        </h2>
        <p className="text-lg mb-8 text-muted-foreground">
          Tell us your goal and schedule. We’ll match you to the right class and coach—no pressure, just a great workout.
        </p>
        <div className="flex flex-col md:flex-row md:justify-center gap-4 mb-7">
          <Button
            asChild
            variant="destructive"
            size="lg"
            className="uppercase tracking-wider px-8 py-4 text-lg font-bold transition-all duration-200 hover:scale-105"
          >
            <a href="/contact?intent=free-trial">Claim Free Trial</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="uppercase tracking-wider px-8 py-4 text-lg font-bold transition-all duration-200 hover:scale-105"
          >
            <a href="tel:+15125550198">Call (512) 555-0198</a>
          </Button>
        </div>
        <ul className="flex flex-col items-center gap-2 mb-3 md:flex-row md:justify-center md:gap-6">
          {OFFER_BULLETS.map((b, i) => (
            <li key={i} className="flex items-center text-muted-foreground">
              <span className="inline-block rounded-full bg-destructive/70 w-2 h-2 mr-2" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-destructive font-medium mt-1">Limited trial spots each week to keep coaching quality high.</p>
      </div>
    </section>
  );
}
