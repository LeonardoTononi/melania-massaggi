import React from "react";
import { Reveal } from "@/components/ui/reveal";

export function SignatureTreatment() {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden" id="trattamento-firma">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <p className="tracking-[0.2em] uppercase text-xs text-primary/70 mb-4">Trattamento Firma</p>
            <h2 className="text-4xl md:text-5xl mb-6">Pietre Laviche e Oli Essenziali</h2>
            <p className="text-xl italic font-serif text-muted-foreground">Lava stone and essential oil massage</p>
          </div>
        </Reveal>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-8">
            <Reveal delay={0.2} className="space-y-6 text-foreground/80 font-light leading-relaxed text-lg">
              <p>
                Il rituale in cui le{" "}
                <span className="font-normal text-foreground">pietre laviche</span> sono
                protagoniste, insieme agli oli essenziali: un trattamento dedicato che molti scelgono
                da solo o dopo aver provato altri massaggi in studio.
              </p>
              <p>
                Le pietre di basalto, riscaldate e posizionate nei punti nevralgici del corpo, cedono lentamente il loro calore, sciogliendo le contratture muscolari in modo dolce e profondo. Nel frattempo, movimenti lenti e ritmici, accompagnati dall'aroma distensivo degli oli, guidano la mente in uno stato di totale abbandono.
              </p>
              <p>
                È un'esperienza sensoriale completa, ideale per chi cerca un rilassamento assoluto, per alleviare lo stress accumulato o semplicemente per regalarsi un momento di pura magia.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex items-center gap-4 text-sm tracking-wider uppercase text-primary mt-8 border-t border-primary/10 pt-8">
                <span>Durata: 75 minuti</span>
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span>Corpo e Mente</span>
              </div>
            </Reveal>
          </div>

          <div className="w-full lg:w-1/2">
            <Reveal direction="left">
              <div className="aspect-[4/3] w-full max-w-lg mx-auto relative group">
                <img 
                  src="/lava-stones.png" 
                  alt="Pietre laviche e oli essenziali" 
                  className="w-full h-full object-cover shadow-xl rounded-3xl"
                />
                {/* Frame accent */}
                <div className="absolute -inset-4 border border-primary/20 rounded-3xl -z-10 transform translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}