"use client";
import { AuroraBackground } from "@/components/ui/backgrounds/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text/text-generate-effect";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroAuroraProps {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroAurora({
  badge = 'UNLEASH YOUR POWER',
  headline = 'TRAIN HARD. MOVE FAST. STAY UNSTOPPABLE.',
  subheadline = 'High-energy coaching, world-class equipment, and results-driven programs built for every fitness level.',
  primaryCta = { label: 'Start Free Trial', href: '#' },
  secondaryCta = { label: 'View Classes', href: '#' },
}: Partial<HeroAuroraProps>) {
  return (
    <AuroraBackground auroraColors={['#ef4444', '#f97316', '#f87171', '#fca5a5', '#fb923c']}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 py-24 md:py-36 animate-fade-in-up"
      >
        {badge && (
          <span className="mb-2 inline-block rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-foreground uppercase">
            {badge}
          </span>
        )}
        <TextGenerateEffect
          words={headline}
          className="text-4xl font-bold text-center tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl uppercase"
        />
        <p className="mt-4 max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
          {subheadline}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" variant="destructive" className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105 uppercase" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105 uppercase" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
