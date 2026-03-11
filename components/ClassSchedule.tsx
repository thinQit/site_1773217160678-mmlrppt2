"use client";

import { useState } from "react";
import { CalendarClock, Dumbbell, Flame, HeartPulse, Bike, BoxingGlove, User } from "lucide-react";
import { cn } from "@/lib/utils";

const SCHEDULE = [
  {
    day: "Monday",
    classes: [
      {
        time: "6:00 AM",
        name: "HIIT: Peak Conditioning",
        duration: "45 min",
        type: "HIIT",
        level: "All levels",
        coach: "Maya Torres",
        focus: "Intervals + strength circuits",
        spots: "16 spots",
      },
      {
        time: "12:00 PM",
        name: "Spinning: Power Ride",
        duration: "45 min",
        type: "Spinning",
        level: "All levels",
        coach: "Jordan Lee",
        focus: "Climbs + sprints",
        spots: "18 spots",
      },
      {
        time: "6:30 PM",
        name: "Boxing: Fundamentals + Bags",
        duration: "60 min",
        type: "Boxing",
        level: "Beginner-friendly",
        coach: "Darius King",
        focus: "Footwork + combos + conditioning",
        spots: "14 spots",
      },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      {
        time: "6:00 AM",
        name: "Spinning: Endurance Ride",
        duration: "45 min",
        type: "Spinning",
        level: "All levels",
        coach: "Jordan Lee",
        focus: "Sustained tempo",
        spots: "18 spots",
      },
      {
        time: "5:30 PM",
        name: "Yoga: Mobility + Reset",
        duration: "50 min",
        type: "Yoga",
        level: "All levels",
        coach: "Priya Nair",
        focus: "Hips, shoulders, breathwork",
        spots: "20 spots",
      },
      {
        time: "6:45 PM",
        name: "HIIT: Strength + Sweat",
        duration: "45 min",
        type: "HIIT",
        level: "Intermediate",
        coach: "Maya Torres",
        focus: "Dumbbells + EMOM finish",
        spots: "16 spots",
      },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      {
        time: "6:00 AM",
        name: "Boxing: Conditioning Rounds",
        duration: "60 min",
        type: "Boxing",
        level: "All levels",
        coach: "Darius King",
        focus: "Rounds + core + sled",
        spots: "14 spots",
      },
      {
        time: "12:00 PM",
        name: "HIIT: Lunchtime Express",
        duration: "35 min",
        type: "HIIT",
        level: "All levels",
        coach: "Maya Torres",
        focus: "Fast-paced full body",
        spots: "16 spots",
      },
      {
        time: "6:30 PM",
        name: "Yoga: Strength Flow",
        duration: "50 min",
        type: "Yoga",
        level: "All levels",
        coach: "Priya Nair",
        focus: "Core + balance",
        spots: "20 spots",
      },
    ],
  },
  {
    day: "Thursday",
    classes: [
      {
        time: "6:00 AM",
        name: "Spinning: Hills + Power",
        duration: "45 min",
        type: "Spinning",
        level: "Intermediate",
        coach: "Jordan Lee",
        focus: "Resistance climbs",
        spots: "18 spots",
      },
      {
        time: "5:30 PM",
        name: "HIIT: Athletic Performance",
        duration: "45 min",
        type: "HIIT",
        level: "All levels",
        coach: "Maya Torres",
        focus: "Plyos + strength",
        spots: "16 spots",
      },
      {
        time: "6:45 PM",
        name: "Boxing: Technique Lab",
        duration: "60 min",
        type: "Boxing",
        level: "Beginner-friendly",
        coach: "Darius King",
        focus: "Defense + counters",
        spots: "14 spots",
      },
    ],
  },
  {
    day: "Friday",
    classes: [
      {
        time: "6:00 AM",
        name: "HIIT: Friday Finish",
        duration: "45 min",
        type: "HIIT",
        level: "All levels",
        coach: "Maya Torres",
        focus: "Full-body burn",
        spots: "16 spots",
      },
      {
        time: "12:00 PM",
        name: "Yoga: Recovery Flow",
        duration: "50 min",
        type: "Yoga",
        level: "All levels",
        coach: "Priya Nair",
        focus: "Stretch + downshift",
        spots: "20 spots",
      },
      {
        time: "5:30 PM",
        name: "Spinning: Party Ride",
        duration: "45 min",
        type: "Spinning",
        level: "All levels",
        coach: "Jordan Lee",
        focus: "Intervals + playlist drops",
        spots: "18 spots",
      },
    ],
  },
  {
    day: "Saturday",
    classes: [
      {
        time: "9:00 AM",
        name: "HIIT: Weekend Warrior",
        duration: "50 min",
        type: "HIIT",
        level: "All levels",
        coach: "Maya Torres",
        focus: "Team circuits",
        spots: "18 spots",
      },
      {
        time: "10:15 AM",
        name: "Boxing: Bags + Burn",
        duration: "60 min",
        type: "Boxing",
        level: "All levels",
        coach: "Darius King",
        focus: "Heavy bag rounds",
        spots: "16 spots",
      },
      {
        time: "11:30 AM",
        name: "Yoga: Deep Stretch",
        duration: "55 min",
        type: "Yoga",
        level: "All levels",
        coach: "Priya Nair",
        focus: "Mobility + relaxation",
        spots: "22 spots",
      },
    ],
  },
  {
    day: "Sunday",
    classes: [
      {
        time: "10:00 AM",
        name: "Spinning: Smooth Endurance",
        duration: "45 min",
        type: "Spinning",
        level: "All levels",
        coach: "Jordan Lee",
        focus: "Zone training",
        spots: "18 spots",
      },
      {
        time: "11:15 AM",
        name: "Yoga: Breath + Balance",
        duration: "50 min",
        type: "Yoga",
        level: "All levels",
        coach: "Priya Nair",
        focus: "Stability + calm",
        spots: "22 spots",
      },
    ],
  },
];
const FILTERS = [
  { label: "All", icon: CalendarClock },
  { label: "HIIT", icon: Flame },
  { label: "Yoga", icon: HeartPulse },
  { label: "Spinning", icon: Bike },
  { label: "Boxing", icon: BoxingGlove },
];

function getIcon(type: string) {
  if (type === "HIIT") return <Flame className="h-4 w-4 text-destructive" />;
  if (type === "Yoga") return <HeartPulse className="h-4 w-4 text-destructive" />;
  if (type === "Spinning") return <Bike className="h-4 w-4 text-destructive" />;
  if (type === "Boxing") return <BoxingGlove className="h-4 w-4 text-destructive" />;
  return <CalendarClock className="h-4 w-4 text-destructive" />;
}

export default function ClassSchedule() {
  const [active, setActive] = useState("All");

  return (
    <section id="classes" className="py-16 md:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground" style={{ fontFamily: "var(--font-anton), 'Anton'" }}>
            Class Schedule That Keeps You Consistent
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Pick your intensity, lock in your time, and show up. Every class is coach-led with clear progressions.</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
          {FILTERS.map((filter) => (
            <button
              key={filter.label}
              className={cn(
                "uppercase px-4 py-2 rounded-lg font-semibold text-sm transition-colors",
                active === filter.label ? "bg-destructive text-primary-foreground" : "bg-background text-foreground hover:bg-muted"
              )}
              onClick={() => setActive(filter.label)}
              type="button"
            >
              <span className="flex items-center gap-2">
                <filter.icon className="h-4 w-4" />
                {filter.label}
              </span>
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="overflow-x-auto rounded-xl shadow-sm border border-border bg-card">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7">
            {SCHEDULE.map((day, i) => (
              <div key={day.day} className={cn("p-4 border-b md:border-b-0 md:border-r last:md:border-r-0 border-border min-w-[220px]")}>
                <h3 className="font-bold text-xl uppercase text-destructive text-center mb-4" style={{ fontFamily: "var(--font-anton), 'Anton'" }}>
                  {day.day}
                </h3>
                <div className="flex flex-col gap-4">
                  {day.classes
                    .filter(
                      (cls) =>
                        active === "All" ||
                        cls.type === active
                    )
                    .map((cls, j) => (
                      <div key={j} className="rounded-lg bg-muted px-3 py-2 card-hover border border-border shadow transition-all group">
                        <div className="flex items-center gap-2 mb-1 text-sm font-semibold">
                          <span className="flex items-center gap-1">{getIcon(cls.type)} {cls.time}</span>
                          <span className="ml-auto text-destructive">{cls.duration}</span>
                        </div>
                        <div className="font-bold text-muted-foreground text-xs uppercase tracking-wide">{cls.name}</div>
                        <div className="mt-1 flex items-center gap-2 text-xs">
                          <User className="h-3 w-3 text-primary" />
                          <span>{cls.coach}</span>
                        </div>
                        <div className="mt-1 text-[0.88rem] text-muted-foreground">{cls.focus}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{cls.level} • <span>{cls.spots}</span></div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 text-sm text-muted-foreground text-center">
          <span>Arrive 10 min early for your first class. Boxing wraps available at the front desk. </span>
          <br />
          <span>Spots are limited for each session – book ahead for peak times.</span>
        </div>
      </div>
    </section>
  );
}
