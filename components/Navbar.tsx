"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Classes", href: "/classes" },
  { label: "Trainers", href: "/trainers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Transformations", href: "/transformations" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={cn(
        "sticky top-0 z-40 bg-background/90 border-b border-border backdrop-blur-xl",
        "w-full"
      )}
      role="navigation"
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Iron Peak Fitness Home">
          <span
            className="text-2xl font-bold text-destructive tracking-widest uppercase"
            style={{ fontFamily: "var(--font-anton), 'Anton', system-ui, sans-serif" }}
          >
            Iron Peak
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 lg:gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium uppercase px-2 py-1 rounded transition-colors hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive"
              style={{ fontFamily: "var(--font-heading), var(--font-anton), 'Anton', sans-serif" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        {/* CTA - always on desktop */}
        <div className="hidden md:flex items-center ml-2">
          <Button variant="destructive" size="sm" asChild className="uppercase px-4 py-2 text-sm font-semibold tracking-wide">
            <Link href="/contact?intent=free-trial">Claim Free Trial</Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center p-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-7 w-7 text-destructive" /> : <Menu className="h-7 w-7 text-destructive" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="block md:hidden fixed inset-0 z-[50] bg-background/96 transition-all backdrop-blur-lg">
          <div className="max-w-7xl mx-auto flex flex-col h-full py-6 px-4">
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                className="text-2xl font-bold text-destructive tracking-widest uppercase"
                style={{ fontFamily: "var(--font-anton), 'Anton', system-ui, sans-serif" }}
                onClick={() => setMobileOpen(false)}
              >
                Iron Peak
              </Link>
              <button
                className="p-2"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-7 w-7 text-foreground" />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-semibold uppercase py-2 rounded hover:text-destructive transition-colors"
                  style={{ fontFamily: "var(--font-heading), var(--font-anton), 'Anton', sans-serif" }}
                  tabIndex={0}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-10">
              <Button
                variant="destructive"
                size="lg"
                className="w-full uppercase tracking-wider text-lg"
                asChild
                onClick={() => setMobileOpen(false)}
              >
                <Link href="/contact?intent=free-trial">Claim Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
