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
        "Sono Melania: massaggi a domicilio o in studio a Maderno. Sarvanga Abhyanga, rilassante, decontratturante, detox e pietre laviche. Scrivimi per tariffe, luogo e disponibilità.",
    },
    nav: {
      about: "Chi sono",
      treatments: "Trattamenti",
      questions: "Domande",
      studio: "Dove",
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
      tagline: "Melania · domicilio o studio · Maderno",
      title1: "Massaggi professionali",
      title2: "a domicilio o in studio, a Maderno.",
      subtitle:
        "Sono Melania: lavoro da sola, su appuntamento. Manualità, oli essenziali e, quando serve, pietre laviche calde.",
      lead:
        "Tariffe e disponibilità le mando io su WhatsApp o email. Nessun portale, nessun call center: rispondi a una persona.",
      facts: [
        "Domicilio o studio · Maderno",
        "5 percorsi · 45 a 75 min",
        "Prezzi su richiesta",
      ],
      cta: "Scrivimi su WhatsApp",
      secondaryCta: "Vedi i trattamenti",
      ctaAria: "Contattami su WhatsApp",
      heroImgAlt: "Melania, massaggiatrice Healing Touch",
    },
    homeMethod: {
      kicker: "Il metodo",
      title: "Come lavoro",
      subtitle: "Ascolto prima, mani dopo",
      p1: "Parto da come stai oggi: stress, tensioni, voglia di leggerezza o un lavoro più mirato. Insieme scegliamo trattamento, pressione e durata.",
      p2: "Per ogni sessione preparo oli e, se serve, pietre laviche. Niente protocollo fisso: il ritmo lo regoliamo sul tuo corpo.",
      details: [
        "Dove|A domicilio o in studio a Maderno (dettagli in chat)",
        "Cosa uso|Oli essenziali; pietre laviche nei percorsi che le prevedono",
        "Durata|Da 45 a 75 minuti, a seconda del trattamento",
        "Prenotazione|Solo su appuntamento, via WhatsApp o email",
      ],
      imgAlt: "Pietre laviche e oli per il massaggio",
      imgCaption: "Calore e oli: strumenti del rituale.",
      link: "Di più su di me e sui limiti del mio lavoro",
    },
    homeJourney: {
      kicker: "Prenotazione",
      title: "Come si prenota",
      intro: "Tre passaggi chiari. Niente moduli: solo messaggi.",
      cta: "Inizia su WhatsApp",
      s1Title: "Mi scrivi",
      s1Body:
        "Dimmi se preferisci domicilio o studio, i giorni possibili e cosa ti serve. Ti mando listino e disponibilità.",
      s2Title: "Scegliamo il percorso",
      s2Body:
        "Ti propongo uno o due trattamenti adatti al tempo che hai. Se hai dubbi medici, te lo dico onestamente.",
      s3Title: "Ci vediamo",
      s3Body:
        "Confermiamo luogo e orario, a domicilio o in studio. Se ti servono dettagli prima, scrivimi pure.",
    },
    homeFlagship: {
      eyebrow: "Il più richiesto",
      title: "Pietre laviche e oli essenziali",
      body: "Settantacinque minuti di calore lento e manualità ritmica. Molti lo scelgono da solo o dopo aver provato altri massaggi.",
      imgAlt: "Pietre laviche per il massaggio",
      imgCaption: "75 minuti · pietre calde e oli essenziali.",
      link: "Dettagli del trattamento",
      allLink: "Vedi tutti i trattamenti",
    },
    homeBooking: {
      title: "Pronto a regalarti un’ora di quiete?",
      body: "Un messaggio basta per fissare data e trattamento. Rispondo personalmente, senza impegno.",
      cta: "Scrivimi ora",
      note: "WhatsApp · risposta tra un trattamento e l’altro",
    },
    location: {
      eyebrow: "Maderno",
      title: "A domicilio o in studio",
      tagline: "Scegliamo insieme dove fare la sessione: a casa tua o in studio a Maderno.",
      p1a: "Offro massaggi a domicilio a",
      p1b: "Maderno e dintorni",
      p1c: ", oppure in uno studio a Maderno.",
      p2: "Per maggiori informazioni su indirizzo, orari e disponibilità, scrivimi un messaggio: ti rispondo personalmente.",
      chip: "Domicilio o studio · WhatsApp",
      imgAlt: "Atmosfera calma per un massaggio a Maderno",
      imgCaption: "A casa tua o in studio, lo decidiamo in chat.",
    },
    contact: {
      kicker: "Contatti",
      title: "Prenota il tuo momento",
      intro: "Ricevo su appuntamento. Per listino, disponibilità o per scegliere il trattamento, scrivimi: rispondo personalmente, senza impegno.",
      phoneLabel: "Telefono / WhatsApp",
      emailLabel: "Email",
      placeLabel: "Dove",
      placeBodyBefore: "A domicilio a",
      placeArea: "Maderno e dintorni",
      placeBodyAfter: ", oppure in studio a Maderno. Scrivimi per dettagli.",
      waBody: "Il modo più rapido per tariffe, disponibilità e domande.",
      waButton: "Scrivimi su WhatsApp",
      waNote: "Di solito rispondo tra un appuntamento e l’altro.",
    },
    about: {
      metaTitle: "Chi sono | Melania Massaggi a Maderno",
      metaDescription:
        "Sono Melania: massaggi a domicilio o in studio a Maderno. La mia storia, come lavoro e come prenotare.",
      eyebrow: "Healing Touch",
      title: "Chi sono",
      name: "Melania",
      role: "Massaggiatrice · Maderno",
      lead:
        "Lavoro da sola, su appuntamento. Massaggi a domicilio o in studio a Maderno: ascolto, mani presenti, tempi umani.",
      facts: [
        "Domicilio o studio",
        "Su appuntamento",
        "WhatsApp o email",
      ],
      photoAlt: "Melania, massaggiatrice Healing Touch a Maderno",
      photoCaption: "Melania · Healing Touch",
      bioTitle: "La mia storia, in breve",
      bioP1:
        "Mi chiamo Melania. Ho scelto il massaggio perché mi interessa stare vicino alle persone nel momento in cui il corpo chiede riposo, scioltezza o semplicemente di essere ascoltato: senza fretta e senza rumore di sala d’attesa.",
      bioP2:
        "Lavoro in proprio: non faccio parte di una catena né di un centro. Questo mi permette di adattare ogni sessione a come stai davvero quel giorno, di rispondere io ai messaggi e di costruire un rapporto diretto, anche se ci vediamo solo qualche volta l’anno.",
      bioP3:
        "Oggi offro massaggi a domicilio a Maderno e dintorni, oppure in uno studio a Maderno. Per maggiori informazioni su luogo e orari, scrivimi pure: ti spiego io cosa conviene in base a te.",
      methodTitle: "Come ti accompagno",
      methodP1:
        "Non parto da un protocollo fisso. Ti ascolto, capisco cosa ti serve in quel momento e adatto pressione, ritmo e focus: rilassamento, decontrattura, detox o un percorso ayurvedico.",
      methodP2:
        "Quando ha senso, integro oli essenziali e pietre laviche. L’obiettivo è che tu esca più leggera o più sciolta, non “trattata” in serie.",
      offerTitle: "Cosa offro",
      offerBody:
        "Cinque percorsi principali: Sarvanga Abhyanga, massaggio rilassante, decontratturante, detox e il rituale con pietre laviche. I prezzi li condivido su richiesta, così posso anche proporti durata o combinazione più adatta.",
      offerNote: "Durate da 45 a 75 minuti · listino su richiesta",
      limitsTitle: "Fino a dove arrivo",
      limitsBody:
        "Offro massaggi di benessere e supporto al relax muscolare. Non sostituisco visite mediche, fisioterapia o diagnosi. Se hai patologie, interventi recenti o dubbi, confrontati prima con il tuo medico: in dubbio ti dirò se è meglio rimandare.",
      credentialsTitle: "Formazione",
      credentialsBody:
        "Le credenziali e i corsi aggiornati li condivido volentieri in chat o di persona: preferisco dirti cose verificabili piuttosto che elencare titoli incompleti sul sito.",
      studioTitle: "Dove lavoro oggi",
      studioBody:
        "Puoi ricevermi a domicilio a Maderno e dintorni, oppure venire in studio a Maderno. Zona, indirizzo e orario li concordiamo in chat. Per maggiori informazioni, scrivimi un messaggio.",
      studioChip: "Domicilio o studio · Maderno",
      ctaTitle: "Vuoi fissare un appuntamento?",
      ctaBody: "Un messaggio basta. Rispondo personalmente, senza impegno.",
      cta: "Scrivimi su WhatsApp",
      treatmentsCta: "Guarda i trattamenti",
    },
    treatmentsPage: {
      metaTitle: "Trattamenti | Melania Massaggi Maderno",
      metaDescription:
        "Sarvanga Abhyanga, rilassante, decontratturante, detox e pietre laviche. Durate chiare, prezzi su richiesta. A domicilio o in studio a Maderno.",
      title: "I trattamenti",
      intro:
        "Scegli per obiettivo o durata. I prezzi sono su richiesta: ti rispondo con il listino e, se serve, ti aiuto a capire da dove partire.",
      flagshipBadge: "Il più richiesto",
      eyebrow: "Percorsi su misura",
      forWhomLabel: "Per te se",
      howLabel: "Come funziona",
      benefitsPreview: "In sintesi",
      helpTitle: "Non sai da dove partire?",
      helpBody:
        "Scrivimi come ti senti (schiena tesa, stress, voglia di un total body…). Ti propongo uno o due percorsi adatti al tempo che hai.",
      helpCta: "Chiedimi consiglio",
      cardCta: "Scopri di più",
      otherTitle: "Altri percorsi",
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
          how: "A domicilio o in studio a Maderno, su appuntamento. Ti spiego i passaggi e adatto la pressione a te.",
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
          how: "Sessione di 60 minuti, a domicilio o in studio.",
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
          how: "45 minuti intensi, a domicilio o in studio su appuntamento.",
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
          how: "60 minuti, a domicilio o in studio.",
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
            "Se vuoi il rituale più completo, o un regalo a te stessa dopo un periodo intenso.",
          how: "75 minuti a domicilio o in studio su appuntamento. Spesso scelto anche dopo altri massaggi.",
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
        "Prezzi, domicilio o studio, come prenotare, cosa aspettarti. Risposte dirette da Melania a Maderno.",
      eyebrow: "Prima di prenotare",
      title: "Domande",
      intro: "Risposte corte e chiare su prezzi, luogo, durata e cosa aspettarti. Se non trovi la tua, scrivimi pure.",
      stillTitle: "Hai ancora un dubbio?",
      stillBody: "Scrivimi su WhatsApp: rispondo io, senza moduli né attese.",
      stillCta: "Scrivimi su WhatsApp",
      items: [
        {
          q: "Quanto costano i massaggi?",
          a: "I prezzi sono su richiesta. Scrivimi su WhatsApp o email e ti mando il listino aggiornato, senza impegno.",
        },
        {
          q: "Dove si svolge il trattamento?",
          a: "A domicilio a Maderno e dintorni, oppure in studio a Maderno. Per maggiori informazioni (indirizzo, orari, disponibilità) scrivimi un messaggio.",
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
          a: "Il sito è in italiano, inglese e tedesco. Durante il trattamento ci adattiamo: scrivimi nella lingua con cui ti trovi meglio.",
        },
      ],
    },
  },
  en: {
    meta: {
      title: "Melania Massaggi | Professional massage in Maderno",
      description:
        "I’m Melania: massage at home or in studio in Maderno. Sarvanga Abhyanga, relaxing, deep tissue, detox and hot stones. Message me for rates, place and availability.",
    },
    nav: {
      about: "About me",
      treatments: "Treatments",
      questions: "Questions",
      studio: "Where",
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
      tagline: "Melania · home or studio · Maderno",
      title1: "Professional massage",
      title2: "at home or in studio, in Maderno.",
      subtitle:
        "I’m Melania: I work alone, by appointment. Skilled hands, essential oils and, when it helps, warm hot stones.",
      lead:
        "I send rates and availability myself on WhatsApp or email. No portal, no call centre: you talk to one person.",
      facts: [
        "Home or studio · Maderno",
        "5 paths · 45 to 75 min",
        "Prices on request",
      ],
      cta: "Message me on WhatsApp",
      secondaryCta: "See treatments",
      ctaAria: "Contact me on WhatsApp",
      heroImgAlt: "Melania, Healing Touch massage therapist",
    },
    homeMethod: {
      kicker: "The method",
      title: "How I work",
      subtitle: "Listen first, hands second",
      p1: "I start from how you feel today, stress, tightness, lightness or a more focused need. Together we choose treatment, pressure and length.",
      p2: "For each session I prepare oils and, when needed, hot stones. No fixed script: the pace follows your body.",
      details: [
        "Where|Home visits or studio in Maderno (details in chat)",
        "What I use|Essential oils; hot stones when the path includes them",
        "Length|45 to 75 minutes, depending on the treatment",
        "Booking|By appointment only, WhatsApp or email",
      ],
      imgAlt: "Hot stones and oils for massage",
      imgCaption: "Heat and oils are tools of the ritual.",
      link: "More about me and where my work stops",
    },
    homeJourney: {
      kicker: "Booking",
      title: "How to book",
      intro: "Three clear steps. No forms: just messages.",
      cta: "Start on WhatsApp",
      s1Title: "You write",
      s1Body:
        "Tell me if you prefer home or studio, possible days and what you need. I’ll send the price list and availability.",
      s2Title: "We pick a path",
      s2Body:
        "I’ll suggest one or two treatments for the time you have. If medical caution applies, I’ll say so plainly.",
      s3Title: "We meet",
      s3Body:
        "We confirm place and time, at your home or in studio. Message me if you need details first.",
    },
    homeFlagship: {
      eyebrow: "Most requested",
      title: "Hot stones & essential oils",
      body: "Seventy-five minutes of slow heat and rhythmic hands. Many book it alone or after trying other massages.",
      imgAlt: "Hot stones for massage",
      imgCaption: "75 minutes · warm stones and essential oils.",
      link: "Treatment details",
      allLink: "See all treatments",
    },
    homeBooking: {
      title: "Ready for an hour of quiet?",
      body: "One message is enough to set a date and treatment. I reply personally, with no obligation.",
      cta: "Message me now",
      note: "WhatsApp · I reply between sessions",
    },
    location: {
      eyebrow: "Maderno",
      title: "Home visits or in studio",
      tagline: "We choose together: at your home or in a studio in Maderno.",
      p1a: "I offer home visits in",
      p1b: "Maderno and nearby",
      p1c: ", or sessions in a studio in Maderno.",
      p2: "For more information on address, times and availability, just message me. I reply personally.",
      chip: "Home or studio · WhatsApp",
      imgAlt: "Calm atmosphere for a massage in Maderno",
      imgCaption: "At your home or in studio, we decide in chat.",
    },
    contact: {
      kicker: "Contact",
      title: "Book your session",
      intro: "I work by appointment. For rates, availability or choosing a treatment, message me. I reply personally, no obligation.",
      phoneLabel: "Phone / WhatsApp",
      emailLabel: "Email",
      placeLabel: "Where",
      placeBodyBefore: "Home visits in",
      placeArea: "Maderno and nearby",
      placeBodyAfter: ", or in studio in Maderno. Message me for details.",
      waBody: "The fastest way for rates, availability and questions.",
      waButton: "Message me on WhatsApp",
      waNote: "I usually reply between appointments.",
    },
    about: {
      metaTitle: "About me | Melania Massaggi in Maderno",
      metaDescription:
        "I’m Melania: massage at home or in studio in Maderno. My story, how I work, and how to book.",
      eyebrow: "Healing Touch",
      title: "About me",
      name: "Melania",
      role: "Massage therapist · Maderno",
      lead:
        "I work alone, by appointment. Massage at home or in studio in Maderno: listening, present hands, a human pace.",
      facts: [
        "Home or studio",
        "By appointment",
        "WhatsApp or email",
      ],
      photoAlt: "Melania, Healing Touch massage therapist in Maderno",
      photoCaption: "Melania · Healing Touch",
      bioTitle: "My story, briefly",
      bioP1:
        "My name is Melania. I chose massage because I want to be close to people when the body asks for rest, ease, or simply to be listened to: without rush and without waiting room noise.",
      bioP2:
        "I work independently: I’m not part of a chain or a centre. That lets me adapt each session to how you really feel that day, answer messages myself, and build a direct relationship even if we only meet a few times a year.",
      bioP3:
        "Today I offer home visits around Maderno, or sessions in a studio in Maderno. For more on place and times, just message me: I’ll help you choose what fits.",
      methodTitle: "How I support you",
      methodP1:
        "I don’t start from a fixed script. I listen, understand what you need that day, and adapt pressure, rhythm and focus: relaxation, deep tissue, detox or an Ayurvedic path.",
      methodP2:
        "When it makes sense I add essential oils and hot stones. The goal is that you leave lighter or freer, not processed like a checklist.",
      offerTitle: "What I offer",
      offerBody:
        "Five main paths: Sarvanga Abhyanga, relaxing, deep tissue, detox and the hot-stone ritual. Prices on request so I can also suggest duration or combinations that fit you.",
      offerNote: "45 to 75 minutes · rates on request",
      limitsTitle: "Where my work stops",
      limitsBody:
        "I offer wellness massage and muscular ease. I don’t replace medical visits, physiotherapy or diagnosis. If you have conditions, recent surgery or doubts, check with your doctor first: I’ll tell you honestly if we should wait.",
      credentialsTitle: "Training",
      credentialsBody:
        "I’m happy to share credentials and courses in chat or in person: I’d rather give you verifiable details than list incomplete titles here.",
      studioTitle: "Where I work today",
      studioBody:
        "Home visits around Maderno, or in studio in Maderno. We agree place, address and time in chat. For more information, send me a message.",
      studioChip: "Home or studio · Maderno",
      ctaTitle: "Want to book a session?",
      ctaBody: "One message is enough. I reply personally, with no obligation.",
      cta: "Message me on WhatsApp",
      treatmentsCta: "Browse treatments",
    },
    treatmentsPage: {
      metaTitle: "Treatments | Melania Massaggi Maderno",
      metaDescription:
        "Sarvanga Abhyanga, relaxing, deep tissue, detox and hot stones. Clear durations, prices on request. Home or in studio in Maderno.",
      title: "Treatments",
      intro:
        "Choose by goal or duration. Prices on request: I’ll send the list and help you decide where to start if you need.",
      flagshipBadge: "Most requested",
      eyebrow: "Tailored paths",
      forWhomLabel: "For you if",
      howLabel: "How it works",
      benefitsPreview: "In short",
      helpTitle: "Not sure where to start?",
      helpBody:
        "Tell me how you feel (tight back, stress, full-body reset…). I’ll suggest one or two options for the time you have.",
      helpCta: "Ask me",
      cardCta: "Learn more",
      otherTitle: "Other paths",
      items: {
        sarvanga: {
          title: "Sarvanga Abhyanga",
          subtitle: "Ayurvedic full-body massage",
          short: "Head to toe with warm oils and traditional technique.",
          description:
            "A complete Ayurvedic massage: sarva (all), anga (body), abhyanga (oil massage). Warm medicated oils and a rhythm that nourishes skin and nervous system.",
          forWhom: "If you want a warm full-body session or a gentle first step into Ayurveda.",
          how: "Home visit or in studio in Maderno, by appointment. I explain each step and adapt pressure to you.",
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
          how: "60 minutes, home or in studio.",
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
          how: "45 focused minutes, home or in studio by appointment.",
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
          how: "60 minutes, home or in studio.",
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
          forWhom: "If you want the fullest ritual, or a gift to yourself after a heavy stretch.",
          how: "75 minutes home or in studio by appointment. Often booked after other massages too.",
          benefits: [
            "Eases tightness with gentle deep heat.",
            "Calms the nervous system with slow rhythm and scent.",
            "Offers a full body and mind experience.",
          ],
        },
      },
    },
    faq: {
      metaTitle: "Questions | Melania Massaggi",
      metaDescription:
        "Prices, home or studio, how to book, what to expect. Direct answers from Melania in Maderno.",
      eyebrow: "Before you book",
      title: "Questions",
      intro: "Short, clear answers on prices, place, duration and what to expect. If yours isn’t here, just message me.",
      stillTitle: "Still unsure?",
      stillBody: "Message me on WhatsApp: I reply myself, no forms, no waiting around.",
      stillCta: "Message me on WhatsApp",
      items: [
        {
          q: "How much do massages cost?",
          a: "Prices are on request. Message me on WhatsApp or email and I’ll send the current list, with no obligation.",
        },
        {
          q: "Where does the session take place?",
          a: "Home visits around Maderno, or in studio in Maderno. For more information (address, times, availability), send me a message.",
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
          a: "The site is in Italian, English and German. During the session we adapt: write in the language you prefer.",
        },
      ],
    },
  },
  de: {
    meta: {
      title: "Melania Massaggi | Professionelle Massage in Maderno",
      description:
        "Ich bin Melania: Massage zu Hause oder im Studio in Maderno. Sarvanga Abhyanga, Entspannung, Tiefengewebe, Detox und Hot Stones. Schreib mir für Preise, Ort und Termine.",
    },
    nav: {
      about: "Über mich",
      treatments: "Behandlungen",
      questions: "Fragen",
      studio: "Ort",
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
      tagline: "Melania · Hausbesuch oder Studio · Maderno",
      title1: "Professionelle Massage",
      title2: "zu Hause oder im Studio, in Maderno.",
      subtitle:
        "Ich bin Melania: ich arbeite allein, nach Termin. Geübte Hände, ätherische Öle und, wenn es hilft, warme Hot Stones.",
      lead:
        "Preise und Termine schicke ich selbst per WhatsApp oder E-Mail. Kein Portal, kein Callcenter: du schreibst einer Person.",
      facts: [
        "Hausbesuch oder Studio · Maderno",
        "5 Wege · 45 bis 75 Min.",
        "Preise auf Anfrage",
      ],
      cta: "Per WhatsApp schreiben",
      secondaryCta: "Behandlungen ansehen",
      ctaAria: "Kontakt über WhatsApp",
      heroImgAlt: "Melania, Masseurin Healing Touch",
    },
    homeMethod: {
      kicker: "Die Methode",
      title: "So arbeite ich",
      subtitle: "Zuerst zuhören, dann die Hände",
      p1: "Ich starte damit, wie du dich heute fühlst. Gemeinsam wählen wir Behandlung, Druck und Dauer.",
      p2: "Für jede Sitzung bereite ich Öle und, wenn nötig, Hot Stones vor. Kein festes Protokoll: das Tempo folgt deinem Körper.",
      details: [
        "Wo|Hausbesuch oder Studio in Maderno (Details per Chat)",
        "Was ich nutze|Ätherische Öle; Hot Stones, wenn der Weg sie vorsieht",
        "Dauer|45 bis 75 Minuten, je nach Behandlung",
        "Buchung|Nur nach Termin, WhatsApp oder E-Mail",
      ],
      imgAlt: "Hot Stones und Öle für die Massage",
      imgCaption: "Wärme und Öle sind Werkzeuge des Rituals.",
      link: "Mehr über mich und die Grenzen meiner Arbeit",
    },
    homeJourney: {
      kicker: "Buchung",
      title: "So buchst du",
      intro: "Drei klare Schritte. Keine Formulare: nur Nachrichten.",
      cta: "Mit WhatsApp starten",
      s1Title: "Du schreibst",
      s1Body:
        "Ob Hausbesuch oder Studio, mögliche Tage und Bedarf. Ich sende Preisliste und Termine.",
      s2Title: "Wir wählen den Weg",
      s2Body:
        "Ich schlage eine oder zwei Behandlungen vor. Bei medizinischen Zweifeln sage ich es ehrlich.",
      s3Title: "Wir treffen uns",
      s3Body:
        "Wir bestätigen Ort und Uhrzeit, bei dir oder im Studio. Schreib mir, wenn du vorher Details brauchst.",
    },
    homeFlagship: {
      eyebrow: "Am häufigsten gebucht",
      title: "Hot Stones & ätherische Öle",
      body: "Fünfundsiebzig Minuten langsame Wärme und rhythmisches Arbeiten. Viele buchen es allein oder nach anderen Massagen.",
      imgAlt: "Hot Stones für die Massage",
      imgCaption: "75 Minuten · warme Steine und ätherische Öle.",
      link: "Details zur Behandlung",
      allLink: "Alle Behandlungen",
    },
    homeBooking: {
      title: "Bereit für eine Stunde Ruhe?",
      body: "Eine Nachricht genügt für Termin und Behandlung. Ich antworte persönlich und unverbindlich.",
      cta: "Jetzt schreiben",
      note: "WhatsApp · Antwort zwischen den Behandlungen",
    },
    location: {
      eyebrow: "Maderno",
      title: "Hausbesuch oder Studio",
      tagline: "Wir wählen gemeinsam: bei dir zu Hause oder im Studio in Maderno.",
      p1a: "Ich biete Hausbesuche in",
      p1b: "Maderno und Umgebung",
      p1c: ", oder Termine im Studio in Maderno.",
      p2: "Für mehr Infos zu Adresse, Zeiten und Verfügbarkeit schreib mir einfach eine Nachricht. Ich antworte persönlich.",
      chip: "Hausbesuch oder Studio · WhatsApp",
      imgAlt: "Ruhige Atmosphäre für eine Massage in Maderno",
      imgCaption: "Zu Hause oder im Studio, klären wir per Chat.",
    },
    contact: {
      kicker: "Kontakt",
      title: "Termin vereinbaren",
      intro: "Nur nach Termin. Für Preise, Verfügbarkeit oder die passende Behandlung, schreib mir. Ich antworte persönlich und unverbindlich.",
      phoneLabel: "Telefon / WhatsApp",
      emailLabel: "E-Mail",
      placeLabel: "Ort",
      placeBodyBefore: "Hausbesuche in",
      placeArea: "Maderno und Umgebung",
      placeBodyAfter: ", oder im Studio in Maderno. Schreib mir für Details.",
      waBody: "Der schnellste Weg für Preise, Termine und Fragen.",
      waButton: "Per WhatsApp schreiben",
      waNote: "Ich antworte meist zwischen den Terminen.",
    },
    about: {
      metaTitle: "Über mich | Melania Massaggi in Maderno",
      metaDescription:
        "Ich bin Melania: Massage zu Hause oder im Studio in Maderno. Meine Geschichte, wie ich arbeite und wie du buchst.",
      eyebrow: "Healing Touch",
      title: "Über mich",
      name: "Melania",
      role: "Masseurin · Maderno",
      lead:
        "Ich arbeite allein, nach Termin. Massage zu Hause oder im Studio in Maderno: Zuhören, präsente Hände, menschliches Tempo.",
      facts: [
        "Hausbesuch oder Studio",
        "Nach Termin",
        "WhatsApp oder E-Mail",
      ],
      photoAlt: "Melania, Masseurin Healing Touch in Maderno",
      photoCaption: "Melania · Healing Touch",
      bioTitle: "Meine Geschichte, kurz",
      bioP1:
        "Ich heiße Melania. Ich habe die Massage gewählt, weil ich Menschen nahe sein will, wenn der Körper Ruhe, Leichtigkeit oder einfach Gehörtwerden braucht: ohne Hetze und ohne Wartesaal.",
      bioP2:
        "Ich arbeite selbstständig: Ich gehöre zu keiner Kette und keinem Center. So kann ich jede Sitzung dem anpassen, wie du dich wirklich fühlst, Nachrichten selbst beantworten und eine direkte Beziehung aufbauen, auch wenn wir uns nur wenige Male im Jahr sehen.",
      bioP3:
        "Heute biete ich Hausbesuche in Maderno und Umgebung oder Termine im Studio in Maderno an. Für mehr Infos zu Ort und Zeiten schreib mir einfach: ich helfe dir zu wählen.",
      methodTitle: "Wie ich dich begleite",
      methodP1:
        "Ich starte nicht mit einem festen Protokoll. Ich höre zu, verstehe den Bedarf und passe Druck, Rhythmus und Fokus an: Entspannung, Tiefengewebe, Detox oder Ayurveda.",
      methodP2:
        "Wenn es passt, ergänze ich ätherische Öle und Hot Stones. Ziel ist, dass du leichter oder freier gehst, nicht „abgefertigt“.",
      offerTitle: "Was ich anbiete",
      offerBody:
        "Fünf Wege: Sarvanga Abhyanga, Entspannung, Tiefengewebe, Detox und das Hot-Stone-Ritual. Preise auf Anfrage, damit ich Dauer oder Kombination vorschlagen kann.",
      offerNote: "45 bis 75 Minuten · Preise auf Anfrage",
      limitsTitle: "Wo meine Arbeit endet",
      limitsBody:
        "Ich biete Wellness-Massage und muskuläre Entlastung. Ich ersetze keine Arztbesuche, Physiotherapie oder Diagnosen. Bei Erkrankungen oder frischen Eingriffen bitte zuerst Ärztin/Arzt fragen: ich sage ehrlich, ob wir warten sollten.",
      credentialsTitle: "Ausbildung",
      credentialsBody:
        "Credentials und Kurse teile ich gern im Chat oder vor Ort: lieber überprüfbar als unvollständige Titel hier.",
      studioTitle: "Wo ich heute arbeite",
      studioBody:
        "Hausbesuche in Maderno und Umgebung oder im Studio in Maderno. Ort, Adresse und Uhrzeit klären wir per Chat. Für mehr Infos schreib mir eine Nachricht.",
      studioChip: "Hausbesuch oder Studio · Maderno",
      ctaTitle: "Termin vereinbaren?",
      ctaBody: "Eine Nachricht genügt. Ich antworte persönlich und unverbindlich.",
      cta: "Per WhatsApp schreiben",
      treatmentsCta: "Behandlungen ansehen",
    },
    treatmentsPage: {
      metaTitle: "Behandlungen | Melania Massaggi Maderno",
      metaDescription:
        "Sarvanga Abhyanga, Entspannung, Tiefengewebe, Detox und Hot Stones. Klare Dauer, Preise auf Anfrage. Hausbesuch oder Studio in Maderno.",
      title: "Behandlungen",
      intro:
        "Wähle nach Ziel oder Dauer. Preise auf Anfrage: ich sende die Liste und helfe dir beim Einstieg.",
      flagshipBadge: "Am häufigsten gebucht",
      eyebrow: "Wege nach Maß",
      forWhomLabel: "Für dich, wenn",
      howLabel: "So läuft es",
      benefitsPreview: "Kurz gesagt",
      helpTitle: "Unsicher, wo du starten sollst?",
      helpBody:
        "Schreib mir, wie du dich fühlst. Ich schlage ein oder zwei passende Wege für deine Zeit vor.",
      helpCta: "Frag mich",
      cardCta: "Mehr erfahren",
      otherTitle: "Weitere Wege",
      items: {
        sarvanga: {
          title: "Sarvanga Abhyanga",
          subtitle: "Ayurvedische Ganzkörpermassage",
          short: "Von Kopf bis Fuß mit warmen Ölen.",
          description:
            "Vollständige ayurvedische Massage: sarva (alles), anga (Körper), abhyanga (Ölmassage). Warme Öle und ein Rhythmus für Haut und Nervensystem.",
          forWhom: "Wenn du einen warmen Total Body oder einen sanften Einstieg ins Ayurveda suchst.",
          how: "Hausbesuch oder Studio in Maderno, nach Termin.",
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
          how: "60 Minuten, zu Hause oder im Studio.",
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
          how: "45 Minuten zu Hause oder im Studio, nach Termin.",
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
          how: "60 Minuten, zu Hause oder im Studio.",
          benefits: [
            "Regt Durchblutung an.",
            "Unterstützt Ausscheidung, ruhig und klar.",
            "Hinterlässt Vitalität.",
          ],
        },
        stones: {
          title: "Hot Stones & ätherische Öle",
          subtitle: "Signature · 75 Minuten",
          short: "Wärme der Steine und Duft der Öle.",
          description:
            "Erwärmte Basaltsteine und Arbeit mit ätherischen Ölen, sinnlich für Muskeln und Geist.",
          forWhom: "Wenn du das vollste Ritual willst.",
          how: "75 Minuten Hausbesuch oder Studio nach Termin.",
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
        "Preise, Hausbesuch oder Studio, Buchung, was dich erwartet. Direkte Antworten von Melania in Maderno.",
      eyebrow: "Vor der Buchung",
      title: "Fragen",
      intro: "Kurze, klare Antworten zu Preisen, Ort, Dauer und Ablauf. Wenn deine fehlt, schreib mir einfach.",
      stillTitle: "Noch unsicher?",
      stillBody: "Schreib mir per WhatsApp: ich antworte persönlich, ohne Formulare.",
      stillCta: "Per WhatsApp schreiben",
      items: [
        {
          q: "Was kosten die Massagen?",
          a: "Preise auf Anfrage. Schreib mir per WhatsApp oder E-Mail: ich sende die aktuelle Liste unverbindlich.",
        },
        {
          q: "Wo findet die Behandlung statt?",
          a: "Hausbesuche in Maderno und Umgebung oder im Studio in Maderno. Für mehr Infos (Adresse, Zeiten, Termine) schreib mir eine Nachricht.",
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
          a: "Die Website ist auf Italienisch, Englisch und Deutsch. Während der Behandlung passen wir uns an: schreib in deiner Sprache.",
        },
      ],
    },
  },
};
