import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { MessageCircle, Phone, MapPin, Globe } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 md:py-32 bg-card relative" id="contatti">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Prenota il tuo Momento</h2>
            <p className="text-lg text-foreground/70 font-light">
              Ricevo esclusivamente su appuntamento. Contattami per prenotare o per ricevere un consiglio sul trattamento più adatto a te.
            </p>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto bg-background shadow-sm border border-primary/5 p-8 md:p-16 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="space-y-10">
              <Reveal delay={0.1} direction="up">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/5 p-3 rounded-full text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-1">Telefono / WhatsApp</h4>
                    <a href="https://wa.me/393273390521" target="_blank" rel="noopener noreferrer" className="text-xl font-serif text-primary hover:text-primary/70 transition-colors">
                      +39 327 339 05 21
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2} direction="up">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/5 p-3 rounded-full text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-1">Indirizzo</h4>
                    <p className="text-xl font-serif text-foreground/90">
                      Via Gerardo 14<br />
                      25084 Bogliacco, Gargnano (BS)
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3} direction="up">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/5 p-3 rounded-full text-primary">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-1">Sito Web</h4>
                    <a href="https://melaniamassaggi.it" className="text-lg text-foreground/90 hover:text-primary transition-colors">
                      melaniamassaggi.it
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col justify-center items-center text-center space-y-6 bg-primary/5 p-8 border border-primary/10 rounded-2xl">
              <Reveal delay={0.4} direction="left">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-primary mb-2">Scrivimi su WhatsApp</h3>
                <p className="text-foreground/70 font-light mb-8">
                  È il modo più rapido per comunicare. Risponderò appena libera da trattamenti.
                </p>
                <a 
                  href="https://wa.me/393273390521" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 w-full rounded-full hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm font-medium text-center"
                >
                  Invia Messaggio
                </a>
              </Reveal>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}