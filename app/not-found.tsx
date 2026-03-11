import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold">404</h1>
        <p className="mt-4 text-muted-foreground">This page doesn’t exist.</p>
        <Button asChild className="mt-8 transition-all duration-200 hover:scale-105">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
