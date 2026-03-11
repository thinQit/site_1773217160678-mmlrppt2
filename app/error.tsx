"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Something went wrong</h1>
        <p className="mt-4 text-muted-foreground">
          We hit a snag loading this page. Please try again.
        </p>
        <Button onClick={reset} className="mt-8 transition-all duration-200 hover:scale-105">
          Try again
        </Button>
      </div>
    </main>
  );
}
