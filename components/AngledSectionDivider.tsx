"use client";

export default function AngledSectionDivider() {
  return (
    <div
      aria-hidden
      className="overflow-hidden w-full leading-none"
      style={{ height: "60px" }}
    >
      <svg
        viewBox="0 0 1440 60"
        className="block w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,60 1440,0 1440,60"
          fill="hsl(var(--background))"
        />
      </svg>
    </div>
  );
}
