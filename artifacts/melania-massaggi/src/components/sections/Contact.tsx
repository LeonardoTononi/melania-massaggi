import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { MessageCircle, Phone, MapPin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 md:py-32 bg-card relative" id="contatti">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Prenota il tuo Momento</h2>
            <p className="text-lg text-foreground/70 font-light">
              Ricevo su appuntamento. Per{" "}
              <span className="text-foreground/85 font-normal">listino, tariffe</span> e qualsiasi
              informazione — anche se non hai ancora deciso quale trattamento fare — scrivimi: ti
              rispondo personalmente, senza impegno.
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
                    <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-1">Studio</h4>
                    <p className="text-lg font-light text-foreground/90 leading-relaxed">
                      I trattamenti si svolgono nel mio studio a{" "}
                      <span className="font-serif text-primary">Maderno</span>. Indirizzo e
                      indicazioni stradali ti saranno inviati dopo la prenotazione.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.25} direction="up">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/5 p-3 rounded-full text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-1">Email</h4>
                    <a
                      href="mailto:moreni.melania66@gmail.com"
                      className="text-xl font-serif text-primary hover:text-primary/70 transition-colors break-all"
                    >
                      moreni.melania66@gmail.com
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
                  WhatsApp o email: è il modo più rapido per tariffe, disponibilità e domande.
                  Risponderò appena libera dai trattamenti.
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