import React from "react";
import { Reveal } from "@/components/ui/reveal";

type Treatment = {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  benefits: [string, string, string];
};

const treatments: Treatment[] = [
  {
    title: "Sarvanga Abhyanga",
    subtitle: "Ayurvedic full-body massage",
    description:
      "Massaggio ayurvedico total body, dalla testa ai piedi, con oli medicati caldi e tecniche tradizionali. Il nome unisce sarva (tutto), anga (corpo) e abhyanga (massaggio con olio).",
    duration: "60 min",
    benefits: [
      "Sostiene detox e difese immunitarie, favorendo l'eliminazione delle tossine (Ama).",
      "Calma stress e tensioni, con un effetto profondo sul sistema nervoso.",
      "Nutre la pelle in profondità e migliora circolazione e tono dei tessuti.",
    ],
  },
  {
    title: "Massaggio rilassante",
    subtitle: "Relaxing massage",
    description:
      "Manualità lente e avvolgenti sulla muscolatura, per sciogliere le tensioni e accompagnare corpo e mente in uno stato di quiete. Ideale dopo periodi di carico o quando serve un reset dolce.",
    duration: "60 min",
    benefits: [
      "Favorisce un rilassamento profondo e un sonno più sereno.",
      "Allenta rigidità e contratture leggere su schiena, collo e arti.",
      "Ripristina sensazione di leggerezza, armonia e benessere generale.",
    ],
  },
  {
    title: "Massaggio decontratturante",
    subtitle: "Deep tissue massage",
    description:
      "Pressioni profonde e lavoro mirato su fasce e punti critici, per sciogliere aderenze e contratture accumulate. Pensato per chi sente rigidità, dolore da sforzo o posture prolungate.",
    duration: "45 min",
    benefits: [
      "Scioglie nodi muscolari e migliora la mobilità articolare.",
      "Allevia tensioni da scrivania, sport o sforzo ripetuto.",
      "Ripristina una sensazione di corpo più libero e sciolto.",
    ],
  },
  {
    title: "Massaggio detox",
    subtitle: "Detox & circulation massage",
    description:
      "Percorso ritmico e profondo (non drenaggio linfatico classico), pensato per riattivare la circolazione e accompagnare il corpo verso una sensazione di pura leggerezza e rigenerazione.",
    duration: "60 min",
    benefits: [
      "Stimola la circolazione e il metabolismo dei tessuti in modo profondo.",
      "Sostiene l'eliminazione delle tossine con un effetto energizzante ma calmo.",
      "Regala una sensazione di leggerezza e vitalità a tutto il corpo.",
    ],
  },
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
              Ogni percorso è unico e può essere adattato alle tue necessità. Oltre alle manualità
              classiche, in studio utilizzo spesso{" "}
              <span className="text-foreground/85">oli essenziali</span> e, quando il trattamento lo
              richiede, anche il <span className="text-foreground/85">calore delle pietre laviche</span>{" "}
              per sciogliere tensioni in profondità.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {treatments.map((treatment, index) => (
            <Reveal key={treatment.title} delay={index * 0.1} direction="up">
              <div className="group bg-card/60 border border-primary/10 rounded-3xl p-8 hover:bg-card transition-colors duration-500 h-full flex flex-col">
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
                <p className="text-foreground/80 font-light leading-relaxed flex-1">
                  {treatment.description}
                </p>
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <p className="text-sm font-semibold tracking-wide text-primary/90 uppercase mb-3">
                    Principali benefici
                  </p>
                  <ul className="list-disc pl-5 space-y-2.5 text-foreground/80 font-light leading-relaxed text-[0.95rem]">
                    {treatment.benefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 max-w-2xl mx-auto text-center rounded-2xl border border-primary/15 bg-card/40 px-6 py-10">
            <p className="text-foreground/85 font-light leading-relaxed mb-2">
              Vuoi sapere <span className="font-normal text-foreground">quanto costa</span> un
              trattamento, combinare più servizi o ricevere un consiglio veloce?
            </p>
            <p className="text-sm text-foreground/70 font-light mb-6">
              Scrivimi: ti mando le informazioni e, se serve, ti propongo la soluzione più adatta al
              tuo budget e al tempo che hai a disposizione.
            </p>
            <a
              href="#contatti"
              className="inline-block text-sm uppercase tracking-widest font-semibold text-primary border-b border-primary/40 hover:border-primary pb-0.5 transition-colors"
            >
              Vai ai contatti
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
