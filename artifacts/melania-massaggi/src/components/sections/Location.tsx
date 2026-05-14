import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { MapPin } from "lucide-react";

export function Location() {
  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-32 relative" id="luogo">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <Reveal>
              <div className="inline-flex items-center justify-center p-3 bg-primary-foreground/10 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-4xl md:text-5xl text-primary-foreground mb-4">Lo Studio</h2>
              <p className="text-primary-foreground/70 italic font-serif text-xl">
                Un ambiente riservato, pensato per il tuo benessere.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="space-y-6 text-primary-foreground/80 font-light text-lg leading-relaxed">
              <p>
                I massaggi si svolgono nel mio studio a{" "}
                <span className="text-primary-foreground font-normal">Maderno</span>. Per
                rispetto della privacy e della tranquillità di tutti, l&apos;indirizzo preciso e le
                indicazioni per arrivare ti verranno comunicati{" "}
                <span className="text-primary-foreground font-normal">dopo la prenotazione</span>.
              </p>
              <p>
                Ti accolgo in uno spazio caldo, silenzioso e curato in ogni dettaglio, dove aromi
                leggeri e luci soffuse ti invitano da subito a lasciare i pensieri fuori dalla
                porta.
              </p>
            </Reveal>
          </div>

          <div className="w-full lg:w-1/2">
            <Reveal direction="left">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-3xl">
                <img
                  src="/botanical.png"
                  alt="Atmosfera naturale dello studio"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
