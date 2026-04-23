import React, { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md py-4 shadow-sm border-b border-primary/5" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex flex-col">
          <span className="text-2xl font-serif text-primary tracking-wide">Melania</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase font-medium text-foreground/70">
          <a href="#chi-sono" className="hover:text-primary transition-colors">Filosofia</a>
          <a href="#trattamento-firma" className="hover:text-primary transition-colors">Il Rituale</a>
          <a href="#trattamenti" className="hover:text-primary transition-colors">Trattamenti</a>
          <a href="#luogo" className="hover:text-primary transition-colors">Lo Studio</a>
        </div>

        <a 
          href="#contatti" 
          className={`text-xs uppercase tracking-widest font-medium border border-primary px-4 py-2 transition-all duration-300 ${
            scrolled ? "text-primary hover:bg-primary hover:text-primary-foreground" : "text-primary border-primary hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          Prenota
        </a>
      </div>
    </nav>
  );
}