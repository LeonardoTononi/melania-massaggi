import React from "react";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  title?: string;
};

/** Lava-stone + leaf — signature hot stones + botanical care. */
export function BrandMark({ className, title = "Melania Massaggi" }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("text-primary", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <ellipse cx="20" cy="22" rx="14" ry="11" fill="currentColor" />
      <ellipse cx="15.5" cy="19" rx="5" ry="3" fill="white" opacity="0.28" />
      <path
        d="M20 5.5c-3.4 4.4-5.8 7.6-7.2 11.8 3-.5 5.2-.2 7.2 1.5 2-1.7 4.2-2 7.2-1.5C25.8 13.1 23.4 9.9 20 5.5Z"
        fill="currentColor"
        opacity="0.78"
      />
      <path
        d="M20 8v11.5"
        stroke="white"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
