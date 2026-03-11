"use client";
import React from "react";
import { Dumbbell, Flame, HeartPulse, Timer, Shield, Trophy } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Flame,
  HeartPulse,
  Timer,
  Shield,
  Trophy,
};

export default function FeaturesCards3D({
  badge = 'Why Train With Us',
  headline = 'Built for Performance',
  subheadline = 'Programming, coaching, and support designed to keep you progressing every week.',
  features = [],
}: Partial<FeaturesCards3DProps>) {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-destructive">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const IconComponent = iconMap[feature.icon] || Dumbbell;
            return (
              <CardContainer key={index} className="inter-var">
                <CardBody className="card-hover relative w-auto h-auto rounded-xl p-6 border border-border bg-card">
                  <CardItem translateZ="50" className="text-destructive mb-4">
                    {React.createElement(IconComponent, { className: "h-8 w-8" })}
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-bold text-foreground uppercase">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ="40" className="text-muted-foreground mt-2 text-sm">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
