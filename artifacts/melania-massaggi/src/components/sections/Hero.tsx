import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.png" 
          alt="Trattamento massaggi a lume di candela" 
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <Reveal delay={0.2} direction="down">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-primary/80 mb-6 font-medium">
            Bogliacco • Lago di Garda
          </p>
        </Reveal>
        
        <Reveal delay={0.4} direction="up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary mb-4 leading-tight">
            Melania
          </h1>
          <h2 className="text-xl md:text-3xl font-serif text-foreground/80 italic mb-8">
            Healing Touch
          </h2>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="w-16 h-[1px] bg-primary/40 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto font-light leading-relaxed mb-12">
            Massaggiatrice professionista. Ritrova il tuo equilibrio e il benessere profondo in uno spazio intimo, affacciato sulla serenità del lago.
          </p>
        </Reveal>

        <Reveal delay={0.8} direction="up">
          <a 
            href="https://wa.me/393273390521" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-none hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="tracking-widest uppercase text-sm font-medium">Prenota su WhatsApp</span>
          </a>
        </Reveal>
      </div>

      {/* Decorative leaf motif faint in background */}
      <div className="absolute -left-32 -bottom-32 w-96 h-96 opacity-10 pointer-events-none mix-blend-multiply">
        <img src="/botanical.png" alt="" className="w-full h-full object-cover rounded-full blur-sm" />
      </div>
    </section>
  );
}