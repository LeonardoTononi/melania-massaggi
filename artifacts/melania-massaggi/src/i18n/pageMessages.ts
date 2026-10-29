import type { Locale } from "./types";

/**
 * Page-level copy (home SEO, about, treatments detail, FAQ).
 * Merged on top of locale JSON in I18nContext.
 */
export const pageMessages: Record<Locale, Record<string, unknown>> = {
  it: {
    meta: {
      title: "Melania Massaggi | Massaggi professionali a Maderno",
      description:
        "Sono Melania: massaggi su appuntamento nel mio studio a Maderno. Sarvanga Abhyanga, rilassante, decontratturante, detox e pietre laviche. Scrivimi per tariffe e disponibilità.",
    },
    nav: {
      about: "Chi sono",
      treatments: "Trattamenti",
      questions: "Domande",
      studio: "Lo Studio",
      book: "Prenota",
    },
    common: {
      onRequest: "Su richiesta",
      duration: "Durata",
      price: "Prezzo",
      where: "Dove",
      bookWhatsApp: "Scrivimi su WhatsApp",
      backTreatments: "Tutti i trattamenti",
      home: "Home",
      maderno: "Maderno",
      afterBooking: "dopo la prenotazione",
    },
    hero: {
      tagline: "Melania Massaggi · Healing Touch",
      title1: "Massaggi professionali",
      title2: "nel mio studio a Maderno.",
      subtitle:
        "Lavoro su appuntamento con manualità, oli essenziali e, in diversi percorsi, il calore delle pietre laviche.",
      lead:
        "Per tariffe, disponibilità e per scegliere insieme il trattamento giusto, scrivimi su WhatsApp o via email. Rispondo personalmente.",
      cta: "Contattami ora",
      ctaAria: "Contattami su WhatsApp",
      heroImgAlt: "Pietre laviche, oli essenziali e candela",
    },
    homeMethod: {
      title: "Come lavoro",
      subtitle: "Ascolto, presenza, ritmo adatto a te",
      p1: "Parto da come stai oggi: stress, tensioni, voglia di leggerezza o bisogno di un lavoro più mirato. Insieme scegliamo il trattamento e il ritmo giusti.",
      p2: "In studio uso spesso oli essenziali e, quando serve, le pietre laviche per sciogliere i muscoli in profondità — senza forzare e senza fretta.",
      link: "Scopri di più su di me",
    },
    homeFlagship: {
      eyebrow: "Il più richiesto",
      title: "Pietre laviche e oli essenziali",
      body: "Settantacinque minuti di calore lento e manualità ritmica. Molti lo scelgono da solo o dopo aver provato altri massaggi.",
      link: "Dettagli del trattamento",
      allLink: "Vedi tutti i trattamenti",
    },
    about: {
      metaTitle: "Chi sono | Melania Massaggi a Maderno",
      metaDescription:
        "Lavoro come massaggiatrice nel mio studio a Maderno. Ti racconto come accolgo, cosa offro e come prenotare.",
      title: "Chi sono",
      lead:
        "Mi chiamo Melania. Nel mio studio a Maderno accolgo persone che cercano un massaggio su misura: ascolto, mani presenti, ambiente quieto.",
      methodTitle: "Come ti accompagno",
      methodP1:
        "Non parto da un protocollo fisso. Ti ascolto, capisco cosa ti serve in quel momento e adatto pressione, ritmo e focus — rilassamento, decontrattura, detox o un percorso ayurvedico.",
      methodP2:
        "Quando ha senso, integro oli essenziali e pietre laviche. L’obiettivo è che tu esca più leggera o più sciolta, non “trattata” in serie.",
      offerTitle: "Cosa offro",
      offerBody:
        "Cinque percorsi principali: Sarvanga Abhyanga, massaggio rilassante, decontratturante, detox e il rituale con pietre laviche. I prezzi li condivido su richiesta, così posso anche proporti la durata o la combinazione più adatta.",
      limitsTitle: "Fino a dove arrivo",
      limitsBody:
        "Offro massaggi di benessere e supporto al relax muscolare. Non sostituisco visite mediche, fisioterapia o diagnosi. Se hai patologie, interventi recenti o dubbi, confrontati prima con il tuo medico: in dubbio ti dirò se è meglio rimandare o scegliere un’altra via.",
      credentialsTitle: "Formazione",
      credentialsBody:
        "Le credenziali e i corsi aggiornati li condivido volentieri in chat o in studio — preferisco dirti cose verificabili piuttosto che elencare titoli incompleti sul sito. Scrivimi se vuoi dettagli.",
      studioTitle: "Dove ti ricevo",
      studioBody:
        "Studio a Maderno. L’indirizzo preciso e le indicazioni le mando dopo la prenotazione, per tenere lo spazio riservato e tranquillo.",
      photoAlt: "Melania, massaggiatrice Healing Touch a Maderno",
      cta: "Scrivimi per un appuntamento",
      treatmentsCta: "Guarda i trattamenti",
    },
    treatmentsPage: {
      metaTitle: "Trattamenti | Melania Massaggi Maderno",
      metaDescription:
        "Sarvanga Abhyanga, rilassante, decontratturante, detox e pietre laviche. Durate chiare, prezzi su richiesta. Studio a Maderno.",
      title: "I trattamenti",
      intro:
        "Scegli per obiettivo o durata. I prezzi sono su richiesta: ti rispondo con il listino e, se serve, ti aiuto a capire da dove partire.",
      flagshipBadge: "Il più richiesto",
      helpTitle: "Non sai da dove partire?",
      helpBody:
        "Scrivimi come ti senti (schiena tesa, stress, voglia di un total body…). Ti propongo uno o due percorsi adatti al tempo che hai.",
      helpCta: "Chiedimi consiglio",
      cardCta: "Scopri di più",
      items: {
        sarvanga: {
          title: "Sarvanga Abhyanga",
          subtitle: "Massaggio ayurvedico total body",
          short:
            "Dalla testa ai piedi, con oli caldi e tecniche tradizionali.",
          description:
            "È un massaggio ayurvedico completo: sarva (tutto), anga (corpo), abhyanga (massaggio con olio). Lavoro con oli medicati caldi e un ritmo che nutre pelle e sistema nervoso.",
          forWhom:
            "Se cerchi un total body caldo e avvolgente, o un primo approccio all’ayurveda senza fretta.",
          how: "In studio a Maderno, su appuntamento. Ti spiego i passaggi e adatto la pressione a te.",
          benefits: [
            "Sostiene detox e difese, favorendo l’eliminazione delle tossine (Ama).",
            "Calma stress e tensioni sul sistema nervoso.",
            "Nutre la pelle e migliora circolazione e tono.",
          ],
        },
        relaxing: {
          title: "Massaggio rilassante",
          subtitle: "Movimenti lenti e avvolgenti",
          short: "Per scaricare la giornata e ritrovare quiete.",
          description:
            "Manualità lente sulla muscolatura per allentare tensioni e accompagnarti in uno stato di quiete. Ideale dopo periodi intensi.",
          forWhom: "Se arrivi carica di stress o hai bisogno di un reset dolce.",
          how: "Sessione di 60 minuti nel mio studio a Maderno.",
          benefits: [
            "Favorisce rilassamento e un sonno più sereno.",
            "Allenta rigidità leggere su schiena, collo e arti.",
            "Restituisce leggerezza e benessere generale.",
          ],
        },
        deep: {
          title: "Massaggio decontratturante",
          subtitle: "Lavoro mirato e pressioni profonde",
          short: "Per nodi, posture e tensioni accumulate.",
          description:
            "Pressioni più profonde e focus su fasce e punti critici, per sciogliere aderenze e contratture da sforzo o scrivania.",
          forWhom:
            "Se senti schiena o collo bloccati, o arrivi da sport / tante ore seduta.",
          how: "45 minuti intensi, sempre su appuntamento a Maderno.",
          benefits: [
            "Scioglie nodi e migliora la mobilità.",
            "Allevia tensioni da scrivania, sport o sforzo ripetuto.",
            "Lascia il corpo più libero e sciolto.",
          ],
        },
        detox: {
          title: "Massaggio detox",
          subtitle: "Ritmico e profondo per la circolazione",
          short: "Non è un drenaggio linfatico classico.",
          description:
            "Lavoro ritmico e profondo per stimolare la circolazione e accompagnare una sensazione di leggerezza. Non sostituisce un trattamento linfatico medico.",
          forWhom: "Se cerchi stimolo circolatorio e una sensazione di “scarico”.",
          how: "60 minuti in studio a Maderno.",
          benefits: [
            "Stimola circolazione e metabolismo dei tessuti.",
            "Sostiene l’eliminazione delle tossine con un effetto energizzante ma calmo.",
            "Regala leggerezza e vitalità.",
          ],
        },
        stones: {
          title: "Pietre laviche e oli essenziali",
          subtitle: "Trattamento firma · 75 minuti",
          short: "Calore delle pietre e aroma degli oli, insieme.",
          description:
            "Le pietre di basalto riscaldate cedono calore nei punti chiave mentre le mani lavorano con oli essenziali. Un percorso sensoriale per rilassare muscoli e mente.",
          forWhom:
            "Se vuoi il rituale più completo dello studio, o un regalo a te stessa dopo un periodo intenso.",
          how: "75 minuti su appuntamento a Maderno. Spesso scelto anche dopo altri massaggi.",
          benefits: [
            "Scioglie contratture con calore dolce e profondo.",
            "Calma il sistema nervoso con ritmo lento e aromi.",
            "Offre un’esperienza completa corpo-mente.",
          ],
        },
      },
    },
    faq: {
      metaTitle: "Domande frequenti | Melania Massaggi",
      metaDescription:
        "Prezzi, dove si svolge il massaggio, come prenotare, cosa aspettarti. Risposte dirette da Melania, studio a Maderno.",
      title: "Domande",
      intro: "Risposte corte e chiare. Se non trovi la tua, scrivimi pure.",
      items: [
        {
          q: "Quanto costano i massaggi?",
          a: "I prezzi sono su richiesta. Scrivimi su WhatsApp o email e ti mando il listino aggiornato, senza impegno.",
        },
        {
          q: "Dove si svolge il trattamento?",
          a: "Nel mio studio a Maderno. L’indirizzo e le indicazioni te li mando dopo che abbiamo fissato l’appuntamento.",
        },
        {
          q: "Come prenoto?",
          a: "Il modo più veloce è WhatsApp. Puoi anche scrivere a moreni.melania66@gmail.com. Ricevo solo su appuntamento.",
        },
        {
          q: "Quanto durano i trattamenti?",
          a: "Rilassante, Sarvanga Abhyanga e detox: 60 minuti. Decontratturante: 45. Pietre laviche: 75.",
        },
        {
          q: "È adatto se non ho mai fatto massaggi?",
          a: "Sì. Ti spiego tutto all’inizio e regoliamo pressione e ritmo insieme. Se hai dubbi su quale scegliere, chiedimi pure.",
        },
        {
          q: "Sostituisci fisioterapia o visite mediche?",
          a: "No. Offro massaggi di benessere. Se hai patologie o interventi recenti, parla prima con il tuo medico.",
        },
        {
          q: "Parli inglese o tedesco?",
          a: "Il sito è in italiano, inglese e tedesco. In studio ci adattiamo: scrivimi nella lingua con cui ti trovi meglio.",
        },
      ],
    },
  },
  en: {
    meta: {
      title: "Melania Massaggi | Professional massage in Maderno",
      description:
        "I’m Melania: massage by appointment in my Maderno studio. Sarvanga Abhyanga, relaxing, deep tissue, detox and hot stones. Message me for rates and availability.",
    },
    nav: {
      about: "About me",
      treatments: "Treatments",
      questions: "Questions",
      studio: "Studio",
      book: "Book",
    },
    common: {
      onRequest: "On request",
      duration: "Duration",
      price: "Price",
      where: "Where",
      bookWhatsApp: "Message me on WhatsApp",
      backTreatments: "All treatments",
      home: "Home",
      maderno: "Maderno",
      afterBooking: "after you book",
    },
    hero: {
      tagline: "Melania Massaggi · Healing Touch",
      title1: "Professional massage",
      title2: "in my Maderno studio.",
      subtitle:
        "I work by appointment with skilled hands, essential oils and, in several treatments, the warmth of hot stones.",
      lead:
        "For rates, availability and choosing the right treatment together, message me on WhatsApp or email. I reply personally.",
      cta: "Contact me now",
      ctaAria: "Contact me on WhatsApp",
      heroImgAlt: "Hot stones, essential oils and candle",
    },
    homeMethod: {
      title: "How I work",
      subtitle: "Listening, presence, a pace that fits you",
      p1: "I start from how you feel today — stress, tightness, lightness, or a more focused need. Together we pick the right treatment and pace.",
      p2: "In the studio I often use essential oils and, when it helps, hot stones to release muscles in depth — without rushing.",
      link: "More about me",
    },
    homeFlagship: {
      eyebrow: "Most requested",
      title: "Hot stones & essential oils",
      body: "Seventy-five minutes of slow heat and rhythmic hands. Many book it alone or after trying other massages.",
      link: "Treatment details",
      allLink: "See all treatments",
    },
    about: {
      metaTitle: "About me | Melania Massaggi in Maderno",
      metaDescription:
        "I work as a massage therapist in my Maderno studio. How I welcome you, what I offer, and how to book.",
      title: "About me",
      lead:
        "I’m Melania. In my Maderno studio I welcome people who want tailored massage: listening, present hands, a quiet room.",
      methodTitle: "How I support you",
      methodP1:
        "I don’t start from a fixed script. I listen, understand what you need that day, and adapt pressure, rhythm and focus — relaxation, deep tissue, detox or an Ayurvedic path.",
      methodP2:
        "When it makes sense I add essential oils and hot stones. The goal is that you leave lighter or freer — not processed on a conveyor belt.",
      offerTitle: "What I offer",
      offerBody:
        "Five main paths: Sarvanga Abhyanga, relaxing, deep tissue, detox and the hot-stone ritual. Prices on request so I can also suggest duration or combinations that fit you.",
      limitsTitle: "Where my work stops",
      limitsBody:
        "I offer wellness massage and muscular ease. I don’t replace medical visits, physiotherapy or diagnosis. If you have conditions, recent surgery or doubts, check with your doctor first — I’ll tell you honestly if we should wait or choose another path.",
      credentialsTitle: "Training",
      credentialsBody:
        "I’m happy to share credentials and courses in chat or in person — I’d rather give you verifiable details than list incomplete titles here. Ask if you want specifics.",
      studioTitle: "Where I see you",
      studioBody:
        "Studio in Maderno. Exact address and directions come after we book, so the space stays private and calm.",
      photoAlt: "Melania, Healing Touch massage therapist in Maderno",
      cta: "Message me to book",
      treatmentsCta: "Browse treatments",
    },
    treatmentsPage: {
      metaTitle: "Treatments | Melania Massaggi Maderno",
      metaDescription:
        "Sarvanga Abhyanga, relaxing, deep tissue, detox and hot stones. Clear durations, prices on request. Studio in Maderno.",
      title: "Treatments",
      intro:
        "Choose by goal or duration. Prices on request — I’ll send the list and help you decide where to start if you need.",
      flagshipBadge: "Most requested",
      helpTitle: "Not sure where to start?",
      helpBody:
        "Tell me how you feel (tight back, stress, full-body reset…). I’ll suggest one or two options for the time you have.",
      helpCta: "Ask me",
      cardCta: "Learn more",
      items: {
        sarvanga: {
          title: "Sarvanga Abhyanga",
          subtitle: "Ayurvedic full-body massage",
          short: "Head to toe with warm oils and traditional technique.",
          description:
            "A complete Ayurvedic massage: sarva (all), anga (body), abhyanga (oil massage). Warm medicated oils and a rhythm that nourishes skin and nervous system.",
          forWhom: "If you want a warm full-body session or a gentle first step into Ayurveda.",
          how: "In my Maderno studio, by appointment. I explain each step and adapt pressure to you.",
          benefits: [
            "Supports detox and immunity, helping release toxins (Ama).",
            "Calms stress on the nervous system.",
            "Nourishes skin and improves circulation and tone.",
          ],
        },
        relaxing: {
          title: "Relaxing massage",
          subtitle: "Slow, enveloping strokes",
          short: "To put the day down and find quiet.",
          description:
            "Slow work on the muscles to ease tension and guide you into calm. Ideal after intense periods.",
          forWhom: "If you arrive stressed or need a gentle reset.",
          how: "60 minutes in my Maderno studio.",
          benefits: [
            "Supports deep relaxation and better sleep.",
            "Eases light stiffness in back, neck and limbs.",
            "Restores lightness and overall wellbeing.",
          ],
        },
        deep: {
          title: "Deep tissue massage",
          subtitle: "Focused, deeper pressure",
          short: "For knots, posture and built-up tension.",
          description:
            "Deeper pressure on tight areas to release adhesions from effort or desk work.",
          forWhom: "If your back or neck feels stuck, or you sit / train a lot.",
          how: "45 focused minutes by appointment in Maderno.",
          benefits: [
            "Releases knots and improves mobility.",
            "Eases desk, sport or repetitive strain.",
            "Leaves the body freer and more open.",
          ],
        },
        detox: {
          title: "Detox massage",
          subtitle: "Rhythmic work for circulation",
          short: "Not classic lymphatic drainage.",
          description:
            "Rhythmic, deep work to stimulate circulation and a sense of lightness. Not a medical lymphatic treatment.",
          forWhom: "If you want circulatory stimulus and a “cleared” feeling.",
          how: "60 minutes in Maderno.",
          benefits: [
            "Stimulates circulation and tissue metabolism.",
            "Supports toxin release with calm energy.",
            "Leaves you lighter and more vital.",
          ],
        },
        stones: {
          title: "Hot stones & essential oils",
          subtitle: "Signature · 75 minutes",
          short: "Stone warmth and oil aroma together.",
          description:
            "Warmed basalt stones release heat on key points while hands work with essential oils. A sensory path for muscles and mind.",
          forWhom: "If you want the studio’s fullest ritual, or a gift to yourself after a heavy stretch.",
          how: "75 minutes by appointment in Maderno. Often booked after other massages too.",
          benefits: [
            "Eases tightness with gentle deep heat.",
            "Calms the nervous system with slow rhythm and scent.",
            "Offers a full body–mind experience.",
          ],
        },
      },
    },
    faq: {
      metaTitle: "Questions | Melania Massaggi",
      metaDescription:
        "Prices, where massage happens, how to book, what to expect. Direct answers from Melania, Maderno studio.",
      title: "Questions",
      intro: "Short, clear answers. If yours isn’t here, just message me.",
      items: [
        {
          q: "How much do massages cost?",
          a: "Prices are on request. Message me on WhatsApp or email and I’ll send the current list — no obligation.",
        },
        {
          q: "Where does the session take place?",
          a: "In my Maderno studio. I share the exact address and directions after we book.",
        },
        {
          q: "How do I book?",
          a: "WhatsApp is fastest. You can also email moreni.melania66@gmail.com. I only work by appointment.",
        },
        {
          q: "How long are the treatments?",
          a: "Relaxing, Sarvanga Abhyanga and detox: 60 minutes. Deep tissue: 45. Hot stones: 75.",
        },
        {
          q: "Is it ok if I’ve never had a massage?",
          a: "Yes. I explain everything at the start and we adjust pressure together. Ask if you’re unsure which to choose.",
        },
        {
          q: "Do you replace physio or medical care?",
          a: "No. I offer wellness massage. If you have conditions or recent surgery, check with your doctor first.",
        },
        {
          q: "Do you speak English or German?",
          a: "The site is in Italian, English and German. In the studio we adapt — write in the language you prefer.",
        },
      ],
    },
  },
  de: {
    meta: {
      title: "Melania Massaggi | Professionelle Massage in Maderno",
      description:
        "Ich bin Melania: Massage nach Termin in meinem Studio in Maderno. Sarvanga Abhyanga, Entspannung, Tiefengewebe, Detox und Hot Stones. Schreib mir für Preise und Termine.",
    },
    nav: {
      about: "Über mich",
      treatments: "Behandlungen",
      questions: "Fragen",
      studio: "Studio",
      book: "Buchen",
    },
    common: {
      onRequest: "Auf Anfrage",
      duration: "Dauer",
      price: "Preis",
      where: "Wo",
      bookWhatsApp: "Schreib mir auf WhatsApp",
      backTreatments: "Alle Behandlungen",
      home: "Start",
      maderno: "Maderno",
      afterBooking: "nach der Buchung",
    },
    hero: {
      tagline: "Melania Massaggi · Healing Touch",
      title1: "Professionelle Massage",
      title2: "in meinem Studio in Maderno.",
      subtitle:
        "Ich arbeite nach Termin mit geübten Händen, ätherischen Ölen und in mehreren Behandlungen mit der Wärme heißer Steine.",
      lead:
        "Für Preise, Termine und die passende Behandlung schreib mir per WhatsApp oder E-Mail. Ich antworte persönlich.",
      cta: "Jetzt kontaktieren",
      ctaAria: "Kontakt über WhatsApp",
      heroImgAlt: "Warme Steine, ätherische Öle und Kerze",
    },
    homeMethod: {
      title: "So arbeite ich",
      subtitle: "Zuhören, Präsenz, dein Tempo",
      p1: "Ich starte damit, wie du dich heute fühlst — Stress, Verspannung, Leichtigkeit oder gezielter Bedarf. Gemeinsam wählen wir Behandlung und Rhythmus.",
      p2: "Im Studio nutze ich oft ätherische Öle und bei Bedarf Hot Stones, um Muskeln tief zu lösen — ohne Hast.",
      link: "Mehr über mich",
    },
    homeFlagship: {
      eyebrow: "Am häufigsten gebucht",
      title: "Hot Stones & ätherische Öle",
      body: "Fünfundsiebzig Minuten langsame Wärme und rhythmisches Arbeiten. Viele buchen es allein oder nach anderen Massagen.",
      link: "Details zur Behandlung",
      allLink: "Alle Behandlungen",
    },
    about: {
      metaTitle: "Über mich | Melania Massaggi in Maderno",
      metaDescription:
        "Ich arbeite als Masseurin in meinem Studio in Maderno. Wie ich empfange, was ich anbiete und wie du buchst.",
      title: "Über mich",
      lead:
        "Ich heiße Melania. In meinem Studio in Maderno empfange ich Menschen, die eine Massage nach Maß suchen: Zuhören, präsente Hände, ruhiger Raum.",
      methodTitle: "Wie ich dich begleite",
      methodP1:
        "Ich starte nicht mit einem festen Protokoll. Ich höre zu, verstehe den Bedarf und passe Druck, Rhythmus und Fokus an — Entspannung, Tiefengewebe, Detox oder Ayurveda.",
      methodP2:
        "Wenn es passt, ergänze ich ätherische Öle und Hot Stones. Ziel ist, dass du leichter oder freier gehst — nicht „abgefertigt“.",
      offerTitle: "Was ich anbiete",
      offerBody:
        "Fünf Wege: Sarvanga Abhyanga, Entspannung, Tiefengewebe, Detox und das Hot-Stone-Ritual. Preise auf Anfrage, damit ich Dauer oder Kombination vorschlagen kann.",
      limitsTitle: "Wo meine Arbeit endet",
      limitsBody:
        "Ich biete Wellness-Massage und muskuläre Entlastung. Ich ersetze keine Arztbesuche, Physiotherapie oder Diagnosen. Bei Erkrankungen oder frischen Eingriffen bitte zuerst Ärztin/Arzt fragen — ich sage ehrlich, ob wir warten sollten.",
      credentialsTitle: "Ausbildung",
      credentialsBody:
        "Credentials und Kurse teile ich gern im Chat oder vor Ort — lieber überprüfbar als unvollständige Titel hier. Frag einfach nach.",
      studioTitle: "Wo ich dich empfange",
      studioBody:
        "Studio in Maderno. Genaue Adresse und Wegbeschreibung nach der Buchung, damit der Raum privat bleibt.",
      photoAlt: "Melania, Masseurin Healing Touch in Maderno",
      cta: "Schreib mir für einen Termin",
      treatmentsCta: "Behandlungen ansehen",
    },
    treatmentsPage: {
      metaTitle: "Behandlungen | Melania Massaggi Maderno",
      metaDescription:
        "Sarvanga Abhyanga, Entspannung, Tiefengewebe, Detox und Hot Stones. Klare Dauer, Preise auf Anfrage. Studio in Maderno.",
      title: "Behandlungen",
      intro:
        "Wähle nach Ziel oder Dauer. Preise auf Anfrage — ich sende die Liste und helfe dir beim Einstieg.",
      flagshipBadge: "Am häufigsten gebucht",
      helpTitle: "Unsicher, wo du starten sollst?",
      helpBody:
        "Schreib mir, wie du dich fühlst. Ich schlage ein oder zwei passende Wege für deine Zeit vor.",
      helpCta: "Frag mich",
      cardCta: "Mehr erfahren",
      items: {
        sarvanga: {
          title: "Sarvanga Abhyanga",
          subtitle: "Ayurvedische Ganzkörpermassage",
          short: "Von Kopf bis Fuß mit warmen Ölen.",
          description:
            "Vollständige ayurvedische Massage: sarva (alles), anga (Körper), abhyanga (Ölmassage). Warme Öle und ein Rhythmus für Haut und Nervensystem.",
          forWhom: "Wenn du einen warmen Total Body oder einen sanften Einstieg ins Ayurveda suchst.",
          how: "In meinem Studio in Maderno, nach Termin.",
          benefits: [
            "Unterstützt Entgiftung und Abwehr (Ama).",
            "Beruhigt Stress im Nervensystem.",
            "Pflegt die Haut und verbessert Durchblutung.",
          ],
        },
        relaxing: {
          title: "Entspannungsmassage",
          subtitle: "Langsame, einhüllende Striche",
          short: "Um den Tag abzulegen und zur Ruhe zu kommen.",
          description:
            "Langsame Arbeit an der Muskulatur für Ruhe. Ideal nach intensiven Phasen.",
          forWhom: "Wenn du gestresst ankommst oder einen sanften Reset brauchst.",
          how: "60 Minuten in Maderno.",
          benefits: [
            "Fördert Entspannung und Schlaf.",
            "Lockert leichte Verspannungen.",
            "Schenkt Leichtigkeit und Wohlbefinden.",
          ],
        },
        deep: {
          title: "Tiefengewebsmassage",
          subtitle: "Gezielter, tieferer Druck",
          short: "Für Knoten, Haltung und angestaute Spannung.",
          description:
            "Tieferer Druck auf verhärtete Zonen nach Belastung oder Schreibtisch.",
          forWhom: "Wenn Rücken oder Nacken blockiert wirken.",
          how: "45 Minuten nach Termin in Maderno.",
          benefits: [
            "Löst Knoten und verbessert Beweglichkeit.",
            "Lindert Schreibtisch- und Sportspannung.",
            "Macht den Körper freier.",
          ],
        },
        detox: {
          title: "Detox-Massage",
          subtitle: "Rhythmisch für den Kreislauf",
          short: "Keine klassische Lymphdrainage.",
          description:
            "Rhythmische, tiefe Arbeit für Kreislauf und Leichtigkeit. Kein medizinischer Lymphdienst.",
          forWhom: "Wenn du Kreislaufanregung und ein „leichtes“ Gefühl suchst.",
          how: "60 Minuten in Maderno.",
          benefits: [
            "Regt Durchblutung an.",
            "Unterstützt Ausscheidung — ruhig und klar.",
            "Hinterlässt Vitalität.",
          ],
        },
        stones: {
          title: "Hot Stones & ätherische Öle",
          subtitle: "Signature · 75 Minuten",
          short: "Wärme der Steine und Duft der Öle.",
          description:
            "Erwärmte Basaltsteine und Arbeit mit ätherischen Ölen — sinnlich für Muskeln und Geist.",
          forWhom: "Wenn du das vollste Ritual des Studios willst.",
          how: "75 Minuten nach Termin in Maderno.",
          benefits: [
            "Löst Verspannungen mit sanfter Wärme.",
            "Beruhigt das Nervensystem.",
            "Körper-Geist-Erlebnis.",
          ],
        },
      },
    },
    faq: {
      metaTitle: "Fragen | Melania Massaggi",
      metaDescription:
        "Preise, Ort, Buchung, was dich erwartet. Direkte Antworten von Melania, Studio Maderno.",
      title: "Fragen",
      intro: "Kurze, klare Antworten. Wenn deine fehlt, schreib mir einfach.",
      items: [
        {
          q: "Was kosten die Massagen?",
          a: "Preise auf Anfrage. Schreib mir per WhatsApp oder E-Mail — ich sende die aktuelle Liste unverbindlich.",
        },
        {
          q: "Wo findet die Behandlung statt?",
          a: "In meinem Studio in Maderno. Adresse und Wegbeschreibung nach der Buchung.",
        },
        {
          q: "Wie buche ich?",
          a: "WhatsApp ist am schnellsten. Oder E-Mail an moreni.melania66@gmail.com. Nur nach Termin.",
        },
        {
          q: "Wie lange dauern die Behandlungen?",
          a: "Entspannung, Sarvanga Abhyanga und Detox: 60 Min. Tiefengewebe: 45. Hot Stones: 75.",
        },
        {
          q: "Geht das auch ohne Massage-Erfahrung?",
          a: "Ja. Ich erkläre alles und wir passen den Druck an. Frag ruhig, welche Behandlung passt.",
        },
        {
          q: "Ersetzt du Physiotherapie oder Arztbesuche?",
          a: "Nein. Ich biete Wellness-Massage. Bei Erkrankungen bitte zuerst Ärztin/Arzt fragen.",
        },
        {
          q: "Sprichst du Englisch oder Deutsch?",
          a: "Die Website ist auf Italienisch, Englisch und Deutsch. Im Studio passen wir uns an — schreib in deiner Sprache.",
        },
      ],
    },
  },
};
