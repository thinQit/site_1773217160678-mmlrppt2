"use client";

import Link from "next/link";
import { Instagram, Youtube, Tiktok, MapPin, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const FOOTER_META = {
  address: "2710 S Lamar Blvd, Suite 120, Austin, TX 78704",
  phone: "(512) 555-0198",
  email: "hello@ironpeakfitness.com",
  hours: [
    "Mon–Thu: 5:30 AM – 8:30 PM",
    "Fri: 5:30 AM – 7:30 PM",
    "Sat: 8:00 AM – 2:00 PM",
    "Sun: 9:00 AM – 1:00 PM",
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/ironpeakfitness", icon: Instagram },
    { label: "YouTube", href: "https://youtube.com/@ironpeakfitness", icon: Youtube },
    { label: "TikTok", href: "https://tiktok.com/@ironpeakfitness", icon: Tiktok },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className={cn("w-full border-t border-border bg-muted/80 text-foreground font-sans mt-24")}>
      <div
        className={cn(
          "max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10"
        )}
      >
        {/* Brand + Social */}
        <section>
          <Link href="/" className="text-2xl font-bold text-destructive tracking-widest uppercase" style={{ fontFamily: "var(--font-anton), 'Anton', sans-serif" }}>
            Iron Peak Fitness
          </Link>
          <p className="mt-2 text-muted-foreground text-sm">Austin, Texas • South Lamar</p>
          <div className="flex items-center gap-3 mt-4">
            {FOOTER_META.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="p-2 rounded-full bg-card hover:bg-destructive transition-colors text-destructive hover:text-primary-foreground"
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </section>
        {/* Address & Contact */}
        <section>
          <h3 className="font-semibold text-xl mb-2">Contact</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-destructive mt-1" />
              <span>{FOOTER_META.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 text-destructive mt-1" />
              <a href="tel:+15125550198" className="hover:text-destructive">{FOOTER_META.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 text-destructive mt-1" />
              <a href="mailto:hello@ironpeakfitness.com" className="hover:text-destructive">{FOOTER_META.email}</a>
            </li>
          </ul>
        </section>
        {/* Hours */}
        <section>
          <h3 className="font-semibold text-xl mb-2">Hours</h3>
          <ul className="space-y-1 text-muted-foreground text-sm">
            {FOOTER_META.hours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
        {/* Legal & Links */}
        <section>
          <h3 className="font-semibold text-xl mb-2">Info</h3>
          <nav className="flex flex-col space-y-2">
            {FOOTER_META.legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-destructive text-sm"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="https://maps.google.com/?q=2710+S+Lamar+Blvd+Suite+120+Austin+TX+78704"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-destructive text-sm"
            >
              Directions
            </Link>
          </nav>
        </section>
      </div>
      <div className="text-center text-muted-foreground text-xs py-4 border-t border-border">
        &copy; {new Date().getFullYear()} Iron Peak Fitness. All rights reserved.
      </div>
    </footer>
  );
}
