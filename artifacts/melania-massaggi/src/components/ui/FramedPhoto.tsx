import React from "react";
import { cn } from "@/lib/utils";

type FramedPhotoProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  /** Default matches Come lavoro */
  aspectClassName?: string;
};

/** Home content photos — same frame as “Come lavoro” (except hero). */
export function FramedPhoto({
  src,
  alt,
  caption,
  className,
  aspectClassName = "aspect-[4/5]",
}: FramedPhotoProps) {
  return (
    <figure
      className={cn(
        "mx-auto max-w-md overflow-hidden rounded-3xl bg-surface shadow-md shadow-primary/8",
        className,
      )}
    >
      <img src={src} alt={alt} className={cn("w-full object-cover", aspectClassName)} />
      {caption ? (
        <figcaption className="border-t border-border/70 px-5 py-3.5 text-sm text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
