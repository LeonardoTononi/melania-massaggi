import React from "react";
import { Reveal } from "@/components/ui/reveal";

const treatments = [
  {
    title: "Massaggio Rilassante",
    subtitle: "Relaxing massage",
    description: "Movimenti lenti e avvolgenti per distendere la muscolatura, allentare le tensioni nervose e favorire un profondo stato di quiete. Ideale per ritrovare l'armonia dopo giornate intense.",
    duration: "60 min"
  },
  {
    title: "Massaggio Decontratturante",
    subtitle: "Deep tissue massage",
    description: "Tecniche mirate e pressioni profonde per sciogliere i blocchi muscolari, migliorare la mobilità e alleviare i fastidi legati a posture scorrette o affaticamento.",
    duration: "50 min / 80 min"
  },
  {
    title: "Aromaterapia e Benessere",
    subtitle: "Aromatherapy holistic massage",
    description: "Un viaggio olfattivo su misura. L'uso sapiente di sinergie di oli essenziali personalizzate amplifica i benefici del massaggio, riequilibrando il piano fisico ed emotivo.",
    duration: "60 min"
  },
  {
    title: "Massaggio Drenante",
    subtitle: "Lymphatic drainage massage",
    description: "Tocchi leggeri e ritmici studiati per stimolare la circolazione linfatica, ridurre il gonfiore e favorire l'eliminazione delle tossine, regalando un'immediata sensazione di leggerezza.",
    duration: "50 min"
  }
];

export function Treatments() {
  return (
    <section className="py-24 md:py-32 bg-background relative" id="trattamenti">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl mb-4">I Trattamenti</h2>
            <div className="w-12 h-[1px] bg-primary/40 mx-auto mb-6"></div>
            <p className="text-lg text-foreground/70 font-light">
              Ogni percorso è unico e può essere adattato alle tue necessità specifiche del momento.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {treatments.map((treatment, index) => (
            <Reveal key={index} delay={index * 0.1} direction="up">
              <div className="group">
                <div className="mb-3 flex justify-between items-baseline border-b border-primary/10 pb-3">
                  <h3 className="text-2xl font-serif text-primary group-hover:text-primary/80 transition-colors">
                    {treatment.title}
                  </h3>
                  <span className="text-sm tracking-wider text-muted-foreground font-medium uppercase whitespace-nowrap ml-4">
                    {treatment.duration}
                  </span>
                </div>
                <p className="text-primary/70 italic font-serif mb-3 text-lg">
                  {treatment.subtitle}
                </p>
                <p className="text-foreground/80 font-light leading-relaxed">
                  {treatment.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}