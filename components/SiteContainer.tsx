"use client";

import { cn } from "@/lib/utils";

interface SiteContainerProps {
  children?: React.ReactNode;
  className?: string;
  containerWidth?: string;
}

export default function SiteContainer({
  children = null,
  className = "",
  containerWidth = "max-w-7xl",
}: Partial<SiteContainerProps>) {
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", containerWidth, className)}>
      {children}
    </div>
  );
}
