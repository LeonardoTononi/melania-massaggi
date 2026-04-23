import React from "react";
import { Reveal } from "@/components/ui/reveal";

export function Philosophy() {
  return (
    <section className="py-24 md:py-32 bg-background relative" id="chi-sono">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 relative">
            <Reveal direction="right">
              <div className="aspect-[3/4] relative w-full max-w-md mx-auto overflow-hidden">
                <img 
                  src="/massage-hands.png" 
                  alt="Il tocco curativo di Melania" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/20 m-4"></div>
              </div>
            </Reveal>
            <div className="hidden lg:block absolute -right-12 -bottom-12 w-48 h-48 bg-secondary/20 -z-10 rounded-full blur-2xl"></div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <Reveal>
              <h2 className="text-4xl md:text-5xl">La mia filosofia</h2>
              <p className="text-primary italic mt-2 text-xl font-serif">Il massaggio come ascolto</p>
            </Reveal>

            <Reveal delay={0.2} className="space-y-6 text-foreground/80 font-light leading-relaxed text-lg">
              <p>
                Credo profondamente nel potere curativo del tocco. Non si tratta solo di sciogliere le tensioni fisiche, ma di creare uno spazio di profondo ascolto in cui corpo e mente possano finalmente deporre le armi e ritrovare il proprio respiro naturale.
              </p>
              <p>
                Nel mio studio a Bogliacco, ogni trattamento è un viaggio personalizzato. Mi prendo cura di te combinando manualità sapienti, l'energia degli elementi naturali e la calma silenziosa che solo il lago sa ispirare. 
              </p>
              <p>
                "Healing Touch" non è solo un motto, è l'intenzione che metto in ogni singolo gesto: un tocco che accoglie, che rassicura, che cura.
              </p>
            </Reveal>
            
            <Reveal delay={0.4}>
              <div className="pt-8">
                <img src="/botanical.png" alt="Foglie di salvia" className="w-16 h-16 object-cover mix-blend-multiply opacity-60 rounded-full" />
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}