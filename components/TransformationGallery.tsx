"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const GALLERY = [
  {
    name: "Erin • 12 weeks",
    result: "-18 lb • stronger core • improved posture",
    program: "Peak membership + 1 PT session/week",
    before: "/images/transformations/erin-before.jpg",
    after: "/images/transformations/erin-after.jpg",
    alt: "Before and after transformation of Erin after 12 weeks",
  },
  {
    name: "Marcus • 16 weeks",
    result: "+35 lb deadlift • -3\" waist",
    program: "HIIT + Boxing + strength-focused PT",
    before: "/images/transformations/marcus-before.jpg",
    after: "/images/transformations/marcus-after.jpg",
    alt: "Before and after transformation of Marcus after 16 weeks",
  },
  {
    name: "Sofia • 10 weeks",
    result: "Pain-free shoulders • better mobility",
    program: "Yoga + Spinning + mobility homework",
    before: "/images/transformations/sofia-before.jpg",
    after: "/images/transformations/sofia-after.jpg",
    alt: "Before and after transformation of Sofia after 10 weeks",
  },
  {
    name: "Daniel • 8 weeks",
    result: "First unassisted pull-up • +stamina",
    program: "Elite membership + technique coaching",
    before: "/images/transformations/daniel-before.jpg",
    after: "/images/transformations/daniel-after.jpg",
    alt: "Before and after transformation of Daniel after 8 weeks",
  },
];

export default function TransformationGallery() {
  const [modal, setModal] = useState<number | null>(null);

  return (
    <section id="transformations" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 animate-fade-in-up">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground" style={{ fontFamily: "var(--font-anton), 'Anton'" }}>
            Real Austin Transformations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Progress you can see—and performance you can feel. These members trained with a mix of classes and coaching.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {GALLERY.map((item, i) => (
            <div
              key={item.name}
              className="card-hover overflow-hidden rounded-xl border border-border bg-card shadow group transition transform hover:-translate-y-1"
              tabIndex={0}
              role="button"
              aria-label={`View transformation for ${item.name}`}
              onClick={() => setModal(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setModal(i);
              }}
            >
              <div className="relative w-full aspect-[4/5] flex items-center justify-center px-3 py-3 md:px-2 md:py-2">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex gap-1">
                    <Image
                      src={item.before}
                      alt={`Before: ${item.name}`}
                      width={300}
                      height={375}
                      className="rounded-lg object-cover w-1/2 border border-border"
                      unoptimized
                    />
                    <Image
                      src={item.after}
                      alt={`After: ${item.name}`}
                      width={300}
                      height={375}
                      className="rounded-lg object-cover w-1/2 border border-destructive"
                      unoptimized
                    />
                  </div>
                  <div className="mt-3 px-2">
                    <div className="text-destructive font-bold text-xs uppercase tracking-wide">{item.name}</div>
                    <div className="text-sm text-muted-foreground">{item.result}</div>
                    <div className="text-xs text-muted-foreground">{item.program}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Modal */}
        {modal !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center transition-all"
            onClick={() => setModal(null)}
          >
            <div
              className="bg-card rounded-lg shadow-xl p-0 relative max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
              tabIndex={0}
            >
              <div className="flex gap-2 w-full">
                <Image
                  src={GALLERY[modal].before}
                  alt={"Before"}
                  width={400}
                  height={500}
                  className="rounded-lg object-cover w-1/2 border border-border"
                  unoptimized
                />
                <Image
                  src={GALLERY[modal].after}
                  alt={"After"}
                  width={400}
                  height={500}
                  className="rounded-lg object-cover w-1/2 border border-destructive"
                  unoptimized
                />
              </div>
              <div className="p-5">
                <div className="text-destructive font-bold text-sm uppercase">{GALLERY[modal].name}</div>
                <div className="text-sm text-muted-foreground">{GALLERY[modal].result}</div>
                <div className="text-xs text-muted-foreground">{GALLERY[modal].program}</div>
                <button
                  className="absolute top-2 right-2 text-xl font-bold px-3 py-1 bg-border/60 rounded-full text-muted-foreground hover:bg-destructive hover:text-primary-foreground transition"
                  onClick={() => setModal(null)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="mt-6 text-xs text-muted-foreground text-center">
          Results vary based on consistency, nutrition, sleep, and training history.
        </div>
      </div>
    </section>
  );
}
