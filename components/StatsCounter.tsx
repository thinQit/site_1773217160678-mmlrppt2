"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const STATS = [
  {
    label: "Coach-led classes every week",
    value: 40,
    suffix: "+",
  },
  {
    label: "Average member check-ins per week",
    value: 3,
    suffix: "x",
  },
  {
    label: "Strength + conditioning zones",
    value: 5,
    suffix: "",
  },
  {
    label: "Minutes from Downtown Austin",
    value: 8,
    suffix: "",
  },
];

const HIGHLIGHTS = [
  "Turf lane, sleds, and functional rigs",
  "Heavy bags + boxing conditioning space",
  "Dedicated spin studio with performance bikes",
  "Recovery corner: mobility tools + stretching mats",
];

function useCountUp(end: number, duration: number) {
  const [count, setCount] = useState(0);
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) return;
    ref.current = true;
    let start = 0;
    const increment = Math.ceil(end / (duration * 60));
    let current = start;
    const tick = () => {
      current += increment;
      if (current >= end) {
        setCount(end);
      } else {
        setCount(current);
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
    // eslint-disable-next-line
  }, [end, duration]);

  return count;
}

export default function StatsCounter() {
  // Start counting when on-screen
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onScroll() {
      if (!ref.current || visible) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) setVisible(true);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    setTimeout(onScroll, 350);
    return () => window.removeEventListener("scroll", onScroll);
  }, [visible]);

  return (
    <section className="py-16 md:py-20 bg-muted/60" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 animate-fade-in-up">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground" style={{ fontFamily: "var(--font-anton), 'Anton'" }}>
            A Gym That’s Built for Progress
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Track the work. Celebrate the wins. Repeat.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {STATS.map((stat, i) => {
            const count = visible ? useCountUp(stat.value, 1.1 + i * 0.2) : 0;
            return (
              <div key={stat.label} className="flex flex-col items-center bg-card rounded-xl py-7 px-2 border border-border shadow card-hover">
                <div className="text-4xl md:text-5xl font-bold text-destructive" style={{ fontFamily: "var(--font-anton), 'Anton'" }}>
                  {count}
                  <span className="text-lg font-semibold">{stat.suffix}</span>
                </div>
                <div className="mt-2 text-base font-semibold text-muted-foreground text-center">{stat.label}</div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3 justify-center text-sm text-muted-foreground">
          {HIGHLIGHTS.map((h) => (
            <span key={h} className="px-3 py-1 bg-background rounded-full">{h}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
