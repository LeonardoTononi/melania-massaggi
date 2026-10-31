import React from "react";
import { cn } from "@/lib/utils";

type WaveDividerProps = {
  className?: string;
  flip?: boolean;
  /** Fill uses currentColor — set text-* on parent */
  tone?: "background" | "card" | "primary" | "surface" | "blush";
};

const toneClass = {
  background: "text-background",
  card: "text-card",
  primary: "text-primary",
  surface: "text-surface",
  blush: "text-blush",
} as const;

/** Soft wave between sections — reads as “onda” without competing with content */
export function WaveDivider({
  className,
  flip = false,
  tone = "card",
}: WaveDividerProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden leading-none",
        toneClass[tone],
        flip && "rotate-180",
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        className="block h-10 w-full md:h-14"
      >
        <path
          fill="currentColor"
          d="M0,40 C180,70 360,10 540,32 C720,54 900,68 1080,44 C1260,20 1350,28 1440,40 L1440,72 L0,72 Z"
          opacity="0.55"
        />
        <path
          fill="currentColor"
          d="M0,48 C200,20 400,64 600,48 C800,32 1000,12 1200,36 C1320,50 1380,56 1440,48 L1440,72 L0,72 Z"
        />
      </svg>
    </div>
  );
}
