"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSpotlight() {
  return (
    <section className="bg-background py-20 md:py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
        className="max-w-3xl mx-auto text-center px-4"
      >
        <h1
          className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-anton), 'Anton'" }}
        >
          Classes That Hit Every Goal
        </h1>
        <p className="mt-5 text-lg md:text-2xl text-muted-foreground">
          HIIT for conditioning, yoga for mobility, spinning for endurance, and boxing for skill + sweat. Build a week that works.
        </p>
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
          <Button
            asChild
            variant="destructive"
            size="lg"
            className="uppercase tracking-wider px-8 py-4 text-lg font-bold transition-all duration-200 hover:scale-105"
          >
            <a href="/contact?intent=try-class">Try a Class Free</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="uppercase tracking-wider px-8 py-4 text-lg font-bold transition-all duration-200 hover:scale-105"
          >
            <a href="#weekly">See Weekly Schedule</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
