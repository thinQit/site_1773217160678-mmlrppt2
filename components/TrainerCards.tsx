"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Dumbbell, User, Star } from "lucide-react";

const TRAINERS = [
  {
    name: "Maya Torres",
    role: "Head Coach • HIIT & Strength",
    certifications: ["NASM-CPT", "Precision Nutrition L1"],
    specialties: ["Fat loss", "Strength foundations", "Athletic conditioning"],
    bio: "Maya blends strength training with smart conditioning so you can build muscle, move well, and keep energy high. Expect clear cues, measurable progress, and a plan you can stick to.",
    signatureSession: "45-min Strength + Sweat (dumbbells + sled finisher)",
    image: {
      src: "/images/trainers/maya-torres.jpg",
      alt: "Coach Maya Torres coaching a HIIT class",
    },
  },
  {
    name: "Darius King",
    role: "Boxing Coach • Conditioning",
    certifications: ["USA Boxing Certified Coach", "CPR/AED"],
    specialties: ["Boxing fundamentals", "Conditioning", "Confidence building"],
    bio: "Darius teaches clean technique first—then turns it into a workout that makes you feel unstoppable. Great for beginners and anyone who wants a high-skill sweat session.",
    signatureSession: "60-min Fundamentals + Bags (footwork + combos + rounds)",
    image: {
      src: "/images/trainers/darius-king.jpg",
      alt: "Coach Darius King demonstrating boxing technique",
    },
  },
  {
    name: "Priya Nair",
    role: "Yoga Coach • Mobility & Recovery",
    certifications: ["RYT-500", "Mobility Specialist"],
    specialties: ["Mobility", "Stress reduction", "Strength flow"],
    bio: "Priya’s classes are athletic and accessible—perfect for lifters, runners, and desk workers. You’ll leave with better range of motion and calmer breathing.",
    signatureSession: "50-min Mobility + Reset (hips/shoulders + breathwork)",
    image: {
      src: "/images/trainers/priya-nair.jpg",
      alt: "Coach Priya Nair leading a yoga flow class",
    },
  },
  {
    name: "Jordan Lee",
    role: "Spinning Coach • Endurance & Power",
    certifications: ["Spinning® Instructor", "CPR/AED"],
    specialties: ["Endurance building", "Power intervals", "Music-driven coaching"],
    bio: "Jordan coaches with precision and energy—helping you find the right resistance, cadence, and mindset to finish strong every ride.",
    signatureSession: "45-min Hills + Power (resistance climbs + sprint blocks)",
    image: {
      src: "/images/trainers/jordan-lee.jpg",
      alt: "Coach Jordan Lee leading a spinning class",
    },
  },
];

export default function TrainerCards() {
  return (
    <section id="trainers" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 animate-fade-in-up">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground" style={{ fontFamily: "var(--font-anton), 'Anton'" }}>
            Trainers Who Coach, Not Just Count Reps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Certified, friendly, and relentless about your progress.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.name}
              className="card-hover rounded-xl border border-border bg-card p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition"
            >
              <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full border-4 border-destructive/80">
                <Image
                  src={trainer.image.src}
                  alt={trainer.image.alt}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase text-foreground" style={{ fontFamily: "var(--font-anton), 'Anton'" }}>
                  {trainer.name}
                </h3>
                <p className="mt-1 text-destructive text-sm font-semibold">{trainer.role}</p>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {trainer.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="border border-destructive text-destructive text-xs rounded px-2 py-0.5 inline-block uppercase tracking-wide"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-sm text-muted-foreground">
                  {trainer.bio}
                </div>
                <div className="mt-3">
                  <span className="font-semibold text-muted-foreground text-xs">Specialties:</span>
                  <ul className="mt-1 flex flex-wrap gap-2 justify-center text-xs">
                    {trainer.specialties.map((sp) => (
                      <li key={sp} className="px-2 py-0.5 bg-muted rounded-full">{sp}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 text-xs text-muted-foreground italic">
                  Signature: {trainer.signatureSession}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
