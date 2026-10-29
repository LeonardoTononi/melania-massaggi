import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [loc] = useLocation();
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, [loc]);
  return null;
}
