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
      lakeAlt: "Lago di Garda al mattino, riva di ghiaia e montagne sulla sponda bresciana",
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
        "Dove|A domicilio a Gargnano, Toscolano Maderno, Gardone Riviera, Salò e San Felice del Benaco, oppure in studio a Maderno",
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
      p1b: "Gargnano, Toscolano Maderno, Gardone Riviera, Salò e San Felice del Benaco",
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
      placeArea: "Gargnano, Toscolano Maderno, Gardone Riviera, Salò e San Felice del Benaco",
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
        "Oggi offro massaggi a domicilio da Gargnano a San Felice del Benaco, oppure in uno studio a Maderno. Per maggiori informazioni su luogo e orari, scrivimi pure: ti spiego io cosa conviene in base a te.",
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
        "Puoi ricevermi a domicilio da Gargnano a San Felice del Benaco, oppure venire in studio a Maderno. Zona, indirizzo e orario li concordiamo in chat. Per maggiori informazioni, scrivimi un messaggio.",
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
      whatLabel: "Cos'è",
      whoLabel: "Per chi è adatto",
      placeLabel: "Durata e luogo",
      expectLabel: "Cosa aspettarsi",
      cautionLabel: "Quando non è consigliato",
      faqLabel: "Domande frequenti",
      bookMessage: "Ciao Melania, vorrei prenotare: {title}.",
      items: {
        sarvanga: {
          title: "Sarvanga Abhyanga a Maderno",
          subtitle: "Massaggio ayurvedico total body",
          short:
            "Sarvanga Abhyanga a Maderno: massaggio ayurvedico dalla testa ai piedi, 60 minuti, con oli caldi. A domicilio o in studio. Prezzo su richiesta.",
          description:
            "Sarvanga Abhyanga a Maderno è un massaggio ayurvedico completo, dalla testa ai piedi, con oli caldi. Dura 60 minuti, a domicilio o in studio.",
          forWhom:
            "Se cerchi un total body caldo, o un primo approccio all’ayurveda senza fretta.",
          how: "60 minuti a domicilio o in studio a Maderno, su appuntamento. Ti spiego i passaggi e adatto la pressione a te. Prezzo su richiesta.",
          benefits: [
            "Dalla testa ai piedi, con oli caldi.",
            "Ritmo spiegato e pressione concordata insieme.",
            "60 minuti a domicilio o in studio a Maderno.",
          ],
          what:
            "Sarvanga Abhyanga a Maderno è il massaggio ayurvedico total body di Melania. Il nome dice già il perimetro: sarva è «tutto», anga è «corpo», abhyanga è il massaggio con olio. Si lavora dalla testa ai piedi, con oli caldi e un ritmo lento, non con una scaletta uguale per ogni persona.\n\nNon è una consulenza ayurvedica e non è una visita. È un massaggio di benessere: Ascolto come stai quel giorno e adatto pressione e ritmo. All’inizio spiega i passaggi, così sai cosa arriva dopo. Se una zona non ti va, si lascia stare.",
          who:
            "È adatto se cerchi un lavoro avvolgente su tutto il corpo, a domicilio o in studio a Maderno, e hai un’ora. Va bene anche se non hai mai ricevuto un massaggio ayurvedico: non serve conoscere i termini, basta dire come ti senti e quanta pressione ti sta bene.\n\nSe preferisci un tempo più corto, il decontratturante dura 45 minuti. Se cerchi il percorso più lungo, con pietre, quello firma dura 75. Se non sai da dove partire, scrivi: ti propongo uno o due percorsi adatti al tempo che hai.",
          place:
            "La sessione dura 60 minuti e si fa solo su appuntamento. Puoi riceverla a domicilio da Gargnano a San Felice del Benaco, oppure in studio a Maderno. L’indirizzo dello studio non è pubblicato: zona, indirizzo e orario si concordano quando scrivi. Il prezzo del Sarvanga Abhyanga a Maderno resta su richiesta. Un messaggio su WhatsApp o email basta per il listino, senza impegno.",
          expect:
            "Si parte da poche domande: come stai, se è la prima volta, se c’è una parte del corpo che quel giorno vuoi evitare. Poi il massaggio copre il corpo, dalla testa ai piedi, con oli caldi e un ritmo che si regola su di te. Non c’è un protocollo fisso da «finire»: la pressione si può alleggerire in qualsiasi momento.\n\nAlla fine hai avuto un’ora di massaggio di benessere. Non esci con una diagnosi, un esercizio da fare o un giudizio sul tuo stato di salute.",
          caution:
            "Il Sarvanga Abhyanga a Maderno non sostituisce una visita medica, la fisioterapia o una diagnosi. Se hai una patologia, un intervento recente o un dubbio, parlane prima con il medico. Se qualcosa non è chiaro, dimmelo: in dubbio ti dico se è meglio rimandare.\n\nNon pubblico qui un elenco di casi specifici per questo massaggio, perché non è stato confermato voce per voce. Se hai una condizione particolare, chiedi al medico e poi scrivi.",
          faqs: [
            {
              q: "Quanto dura il Sarvanga Abhyanga a Maderno, e quanto costa?",
              a: "Dura 60 minuti. Il prezzo è su richiesta: scrivi su WhatsApp o email e ricevi il listino, senza impegno.",
            },
            {
              q: "Si fa a domicilio o in studio?",
              a: "Tutti e due, a Maderno. A domicilio da Gargnano a San Felice del Benaco. L’indirizzo dello studio si concorda in chat e non è pubblicato sul sito.",
            },
            {
              q: "È una visita ayurvedica?",
              a: "No. È un massaggio di benessere con oli caldi, dalla testa ai piedi. Non sostituisce il medico: se hai una patologia o un intervento recente, chiedi prima a lui.",
            },
          ],
        },
        relaxing: {
          title: "Massaggio rilassante a Maderno",
          subtitle: "Movimenti lenti e avvolgenti",
          short:
            "Massaggio rilassante a Maderno: 60 minuti di manualità lente, a domicilio o in studio. Prezzo su richiesta.",
          description:
            "Massaggio rilassante a Maderno: manualità lente sulla muscolatura, per un’ora, dopo un periodo intenso. A domicilio o in studio.",
          forWhom: "Se arrivi da giornate piene e cerchi un’ora lenta, senza un lavoro profondo.",
          how: "60 minuti a domicilio o in studio a Maderno, su appuntamento. La pressione si concorda insieme. Prezzo su richiesta.",
          benefits: [
            "Manualità lente, senza un protocollo fisso.",
            "Pressione concordata all’inizio della sessione.",
            "60 minuti a domicilio o in studio a Maderno.",
          ],
          what:
            "Il massaggio rilassante a Maderno è un’ora di manualità lente sulla muscolatura. Il ritmo resta avvolgente: non è il percorso con le pressioni più profonde (quello è il decontratturante, 45 minuti) e non usa le pietre laviche, salvo che tu chieda un altro trattamento.\n\nLavoro da sola, su appuntamento, e non parto da un copione fisso. Ascolto come stai quel giorno e regolo pressione e ritmo. È un massaggio di benessere, pensato per chi vuole mettere giù la giornata, non per «sistemare» un problema.",
          who:
            "È adatto se arrivi carico, se hai avuto un periodo intenso, o se vuoi un primo massaggio dolce a Maderno. All’inizio ti viene spiegato cosa succede e insieme si decide la pressione.\n\nSe senti di volere un lavoro più mirato su collo o schiena, dillo: il decontratturante è il percorso da 45 minuti con pressioni più presenti. Se cerchi calore delle pietre, il firma dura 75 minuti. Puoi anche scrivere prima e farti proporre uno o due percorsi.",
          place:
            "Dura 60 minuti, solo su appuntamento. Il massaggio rilassante a Maderno si fa a domicilio da Gargnano a San Felice del Benaco, oppure in studio a Maderno. L’indirizzo non è sul sito: si concorda in chat, insieme all’orario. Il prezzo è su richiesta. WhatsApp o email bastano per ricevere il listino, senza impegno.",
          expect:
            "Si inizia parlando un momento: come è andata la giornata, se c’è una zona che preferisci non toccare, se vuoi un tocco leggero. Poi le mani lavorano lente sulla muscolatura. Non c’è una sequenza da superare e non ti viene chiesto di «resistere».\n\nSe a metà vuoi meno pressione, lo dici e si cambia. Alla fine dell’ora il massaggio si chiude. Non è una seduta in cui si valuta il tuo sonno, la tua postura o la tua salute.",
          caution:
            "Il massaggio rilassante a Maderno non sostituisce sonno, una visita medica o la fisioterapia. Non promette un effetto sul riposo: è un’ora lenta di benessere. Se hai una patologia, un intervento recente o un dubbio, parlane prima con il medico.\n\nSe non sei sicuro che sia il momento, scrivimi. In dubbio ti dico se è meglio rimandare. Un elenco di controindicazioni specifiche per questo massaggio non è pubblicato, perché non è stato confermato punto per punto.",
          faqs: [
            {
              q: "Quanto dura il massaggio rilassante a Maderno?",
              a: "60 minuti, su appuntamento. Il prezzo è su richiesta: ti mando il listino su WhatsApp o email.",
            },
            {
              q: "È il massaggio con le pietre?",
              a: "No. Il rilassante è manualità lenta, senza pietre. Le pietre laviche e gli oli essenziali sono un altro percorso, da 75 minuti.",
            },
            {
              q: "Va bene se non ho mai fatto un massaggio?",
              a: "Sì. All’inizio ti spiego i passaggi e regoliamo la pressione insieme. Se hai una patologia o un intervento recente, chiedi prima al medico.",
            },
          ],
        },
        deep: {
          title: "Massaggio decontratturante a Maderno",
          subtitle: "Lavoro mirato e pressione più presente",
          short:
            "Massaggio decontratturante a Maderno: 45 minuti, pressione più presente su zone tese da scrivania o sport. A domicilio o in studio. Prezzo su richiesta.",
          description:
            "Massaggio decontratturante a Maderno: 45 minuti con pressione più presente sulle zone che senti tese, da scrivania, sport o sforzo ripetuto.",
          forWhom:
            "Se senti schiena o collo tesi, o arrivi da tante ore seduta o da un allenamento.",
          how: "45 minuti a domicilio o in studio a Maderno, su appuntamento. La pressione si concorda e si può alleggerire. Prezzo su richiesta.",
          benefits: [
            "45 minuti, più corti degli altri percorsi.",
            "Pressione più presente, sempre concordata.",
            "A domicilio o in studio a Maderno.",
          ],
          what:
            "Il massaggio decontratturante a Maderno è il percorso più corto: 45 minuti. La pressione è più presente rispetto al rilassante e il lavoro si concentra sulle zone che quel giorno senti tese, spesso schiena, collo o punti legati a scrivania, sport o uno sforzo che si ripete.\n\nNon è fisioterapia e non «sistema» una contrattura. Adatto il tocco a come stai: se è troppo, lo alleggerisco. Non parte da un protocollo fisso e non fa una diagnosi su cosa ti tiene teso.",
          who:
            "È adatto se vuoi un tempo mirato, non un’ora intera lenta, e se ti sta bene una pressione più presente. Va detto all’inizio quanto ti va di sentire il lavoro: non è una prova di resistenza.\n\nSe preferisci un tocco avvolgente su tutto il corpo, il rilassante o il Sarvanga Abhyanga durano 60 minuti. Se cerchi calore, le pietre laviche durano 75. Se hai un dolore che ti preoccupa, questo massaggio non è il posto in cui capirlo: ne parli col medico.",
          place:
            "Dura 45 minuti, solo su appuntamento. Il massaggio decontratturante a Maderno si fa a domicilio da Gargnano a San Felice del Benaco oppure in studio a Maderno. Indirizzo e orario si concordano in chat. Il prezzo è su richiesta: scrivi su WhatsApp o email per il listino, senza impegno.",
          expect:
            "Prima di iniziare dici dove senti la tensione e che pressione ti è familiare. Il lavoro resta su quelle zone, con un tocco più presente del rilassante, ma puoi chiedere di fermarti o di alleggerire in qualsiasi momento.\n\nNon ti viene spiegata una causa e non esci con un programma di esercizi. Sono quarantacinque minuti di massaggio di benessere, su appuntamento, con me, da sola.",
          caution:
            "Il massaggio decontratturante a Maderno non sostituisce fisioterapia, una visita o una diagnosi, anche se la pressione è più presente. Se hai una patologia, un intervento recente, un dolore che non conosci o un dubbio, parlane prima con il medico.\n\nSe durante la sessione una zona non va toccata, dillo subito. In dubbio ti dico se è meglio rimandare. Non elenco qui controindicazioni specifiche: non sono state confermate una per una.",
          faqs: [
            {
              q: "Perché il decontratturante a Maderno dura 45 minuti e non 60?",
              a: "È il percorso più corto dei cinque: 45 minuti, con un lavoro più mirato. Gli altri durano 60, le pietre laviche 75. Il prezzo è su richiesta.",
            },
            {
              q: "Fa male?",
              a: "La pressione è più presente del rilassante, ma si concorda all’inizio e si può alleggerire. Non è una prova da sopportare.",
            },
            {
              q: "Sostituisce la fisioterapia?",
              a: "No. È un massaggio di benessere. Se hai una patologia, un intervento recente o un dolore che ti preoccupa, chiedi prima al medico.",
            },
          ],
        },
        detox: {
          title: "Massaggio detox a Maderno",
          subtitle: "Ritmico e profondo, non linfatico classico",
          short:
            "Massaggio detox a Maderno: 60 minuti, ritmico e profondo. Non è un drenaggio linfatico classico. A domicilio o in studio. Prezzo su richiesta.",
          description:
            "Massaggio detox a Maderno: un’ora di lavoro ritmico e profondo, per una sensazione di leggerezza. Non è un drenaggio linfatico classico e non è un trattamento medico.",
          forWhom: "Se cerchi un’ora ritmica e una sensazione di leggerezza, senza un drenaggio linfatico.",
          how: "60 minuti a domicilio o in studio a Maderno, su appuntamento. Non sostituisce un trattamento linfatico medico. Prezzo su richiesta.",
          benefits: [
            "Lavoro ritmico e profondo, non linfatico classico.",
            "Non sostituisce un trattamento medico.",
            "60 minuti a domicilio o in studio a Maderno.",
          ],
          what:
            "Il massaggio detox a Maderno dura 60 minuti. È un lavoro ritmico e profondo. Non è un drenaggio linfatico classico e non sostituisce un trattamento linfatico medico.\n\nL’intenzione è accompagnare una sensazione di leggerezza, non «pulire» il corpo. Adatto ritmo e pressione a come stai quel giorno. Se ti aspettavi un linfodrenaggio, questo non è il percorso giusto: dillo prima di prenotare.",
          who:
            "È adatto se cerchi un’ora con un ritmo più mosso del rilassante, a domicilio o in studio a Maderno, e ti sta bene un lavoro profondo. Non è adatto se ti serve un trattamento linfatico indicato da un medico: quello non lo faccio.\n\nSe vuoi solo lentezza, scegli il rilassante. Se vuoi le pietre, il firma dura 75 minuti. Se non sei sicuro, scrivi due righe su come ti senti e ti dico se ha senso oppure no.",
          place:
            "Dura 60 minuti, solo su appuntamento. Il massaggio detox a Maderno si fa a domicilio da Gargnano a San Felice del Benaco oppure in studio a Maderno. L’indirizzo dello studio si concorda in chat. Il prezzo è su richiesta: WhatsApp o email, e ricevi il listino senza impegno.",
          expect:
            "All’inizio chiarisco che non è un drenaggio linfatico. Poi ti chiedo come stai e che pressione ti va. Il massaggio ha un ritmo regolare e una profondità maggiore del rilassante; se diventa troppo, si rallenta.\n\nNon misuro nulla, non ti dico se «sei carico» e non ti assegno un risultato. È un’ora di massaggio di benessere. Alla fine, se vuoi, puoi scrivere per un altro percorso, ma non c’è un pacchetto obbligatorio.",
          caution:
            "Il massaggio detox a Maderno non è una terapia, non è un linfodrenaggio e non sostituisce il medico o la fisioterapia. Se hai una patologia, un intervento recente o un dubbio, parlane prima con il medico. Se cerchi un trattamento linfatico, chiedilo a chi è formato per quello.\n\nIn dubbio, scrivimi: ti dico se è meglio rimandare. Non pubblico un elenco di controindicazioni specifiche oltre a questo, perché non è stato confermato.",
          faqs: [
            {
              q: "Il massaggio detox a Maderno è un drenaggio linfatico?",
              a: "No. È un massaggio ritmico e profondo di 60 minuti. Non è un drenaggio linfatico classico e non sostituisce un trattamento linfatico medico.",
            },
            {
              q: "Quanto costa?",
              a: "Il prezzo è su richiesta, come per gli altri percorsi. Scrivi su WhatsApp o email e ti mando il listino, senza impegno.",
            },
            {
              q: "Dove si fa?",
              a: "A domicilio da Gargnano a San Felice del Benaco, oppure in studio a Maderno, su appuntamento. L’indirizzo si concorda in chat.",
            },
          ],
        },
        stones: {
          title: "Pietre laviche e oli essenziali a Maderno",
          subtitle: "Trattamento firma · 75 minuti",
          short:
            "Pietre laviche e oli essenziali a Maderno: 75 minuti con pietre di basalto e oli essenziali, a domicilio o in studio. Prezzo su richiesta.",
          description:
            "Pietre laviche e oli essenziali a Maderno: pietre di basalto riscaldate e oli essenziali, per 75 minuti. Il ritmo si adatta a come stai quel giorno.",
          forWhom:
            "Se cerchi il percorso più lungo, con calore delle pietre, oppure un’ora e un quarto dopo un periodo intenso.",
          how: "75 minuti a domicilio o in studio a Maderno, su appuntamento. Spesso scelto anche dopo altri massaggi. Prezzo su richiesta.",
          benefits: [
            "Pietre di basalto riscaldate e oli essenziali.",
            "75 minuti, il percorso più lungo.",
            "A domicilio o in studio a Maderno, su appuntamento.",
          ],
          what:
            "Pietre laviche e oli essenziali a Maderno è il percorso firma di Melania Massaggi, ed è il più richiesto. Dura 75 minuti. Pietre di basalto vengono riscaldate e appoggiate nei punti su cui lavoriamo: cedono calore piano. Le mani, intanto, proseguono con oli essenziali e un ritmo lento.\n\nNon è un protocollo uguale per tutti. Ascolto come stai quel giorno e adatto pressione e ritmo. Molte persone lo prenotano da solo. Altre lo scelgono dopo un rilassante, un Sarvanga Abhyanga o un altro dei cinque percorsi.",
          who:
            "È per chi vuole un tempo lungo, caldo e sensoriale, a domicilio o in studio a Maderno. Va bene anche al primo massaggio: all’inizio vengono spiegati i passaggi e insieme si decide la pressione.\n\nSe cerchi solo un’ora lenta, senza pietre, c’è il rilassante. Se vuoi un lavoro più corto e più presente, il decontratturante dura 45 minuti. Se non sai se le pietre fanno per te, scrivi come ti senti: ti propongo uno o due percorsi adatti al tempo che hai.",
          place:
            "La sessione dura 75 minuti e si fa solo su appuntamento. Pietre laviche e oli essenziali a Maderno si ricevono a domicilio da Gargnano a San Felice del Benaco, oppure in studio a Maderno. L’indirizzo dello studio non è pubblicato: zona, indirizzo e orario si concordano quando scrivi. Il prezzo resta su richiesta. Un messaggio su WhatsApp o email basta per il listino, senza impegno.",
          expect:
            "Si parte da un breve scambio: come stai, se preferisci un tocco più leggero o più presente, se c’è una zona da lasciare stare. Poi il lavoro è lento. Le pietre di basalto portano calore, le mani lavorano con gli oli essenziali. Non c’è un copione da superare: se un passaggio non ti va, lo dici e si cambia.\n\nAlla fine hai avuto settantacinque minuti di massaggio di benessere. Non è una visita, non è una prova del calore e non ti viene chiesto un risultato.",
          caution:
            "Pietre laviche e oli essenziali a Maderno è un massaggio di benessere. Non sostituisce una visita medica, la fisioterapia o una diagnosi. Se hai una patologia, un intervento recente o un dubbio, parlane prima con il medico. Se il calore o un olio non ti va, dillo prima di iniziare o durante: si cambia.\n\nIn dubbio ti dico se è meglio rimandare. Non pubblico un elenco di controindicazioni specifiche per le pietre, perché non è stato confermato caso per caso: se hai una condizione particolare, chiedi al medico e poi scrivi.",
          faqs: [
            {
              q: "Quanto dura pietre laviche e oli essenziali a Maderno?",
              a: "75 minuti, su appuntamento. È il percorso più lungo. Il prezzo è su richiesta: scrivi e ti mando il listino.",
            },
            {
              q: "Che pietre sono, e dove si fa?",
              a: "Pietre di basalto, riscaldate, insieme a oli essenziali. A domicilio da Gargnano a San Felice del Benaco, oppure in studio a Maderno. L’indirizzo si concorda in chat.",
            },
            {
              q: "Le pietre sostituiscono una terapia?",
              a: "No. È un massaggio di benessere. Se hai una patologia o un intervento recente, chiedi prima al medico. Se hai un dubbio sul calore, scrivilo prima di prenotare.",
            },
          ],
        },
      },
    },
    blogPost: {
      metaTitle: "Massaggio a domicilio sul lago di Garda: da Salò a Gargnano | Melania Massaggi",
      metaDescription:
        "Massaggio a domicilio sul lago di Garda, entro circa mezz’ora da Toscolano Maderno: Gargnano, Gardone Riviera, Salò e San Felice del Benaco.",
      eyebrow: "Sul lago di Garda",
      question: "In quali paesi del lago di Garda si può prenotare un massaggio a domicilio?",
      h1: "Massaggio a domicilio sul lago di Garda: da Salò a Gargnano",
      answer:
        "Sì. Vengo a domicilio, su appuntamento, nei paesi entro circa mezz’ora d’auto da Toscolano Maderno: Gargnano, Toscolano Maderno, Gardone Riviera, Salò e San Felice del Benaco. Puoi prenotare gli stessi cinque massaggi dello studio. Il prezzo è su richiesta: te lo scrivo io, senza impegno. Se abiti appena fuori da questi comuni, scrivimi lo stesso e ti dico se quel giorno riesco a passare.",
      sections: [
        {
          h2: "Dove arrivo, da Toscolano Maderno",
          body: "Il punto di partenza sono io, a Toscolano Maderno, sulla sponda bresciana del lago di Garda. Da lì mi sposto se il viaggio sta circa nei venti minuti, mezz’ora al massimo. È il raggio che uso per gli appuntamenti a casa, non una promessa al minuto: la Gardesana d’estate cambia, e preferisco dirti di no piuttosto che arrivare di corsa.\n\nIn elenco, da nord a sud: Gargnano, Toscolano Maderno, Gardone Riviera, Salò e San Felice del Benaco.\n\nLimone sul Garda, Manerba del Garda, Moniga, Padenghe e Desenzano del Garda non sono in elenco. Il tempo dipende dal civico e dal traffico: se abiti in uno di questi, chiedimelo in chat prima di organizzare la seduta.\n\nL’indirizzo di casa tua resta in chat. Non lo metto sul sito. Se preferisci lo studio, è a Maderno: anche quell’indirizzo si dice nel messaggio, non in pagina.",
        },
        {
          h2: "Come prenotare il massaggio a casa tua",
          body: "Il passaggio è corto. Mi scrivi su WhatsApp oppure a moreni.melania66@gmail.com. Mi dici due o tre giorni possibili, se vuoi casa tua o lo studio, e il paese. Ti rispondo io con gli orari liberi e il listino aggiornato. Non c’è un modulo da compilare.\n\nRicevo solo su appuntamento e lavoro da sola. All’inizio della seduta ti chiedo come stai quel giorno, se una zona è da evitare e che pressione ti è gradita. Poi la regoliamo insieme, anche a metà percorso.\n\nNon è una visita medica e non sostituisce la fisioterapia. Se hai una patologia, un intervento recente o un dubbio che riguarda la tua salute, parlane prima con il medico. Non pubblico un elenco di controindicazioni. Se la tua situazione non è un semplice massaggio di benessere, parlane con il medico prima di prenotare.\n\nA casa porto io il necessario per il trattamento. Cosa ti chiedo di preparare, dallo spazio per stendersi agli animali in casa, te lo scrivo quando confermiamo l’orario. Ogni appartamento è diverso, quindi te lo dico sul tuo.",
        },
        {
          h2: "Quale dei cinque massaggi prenotare",
          body: "A domicilio ci sono gli stessi cinque percorsi dello studio a Maderno. Le durate sono quelle della scheda, il prezzo è su richiesta per tutti.\n\nPietre laviche e oli essenziali, 75 minuti. Pietre di basalto e oli, ritmo lento. È il percorso che propongo più spesso. Quali oli uso in quel periodo, e come muovo le pietre, te lo dico prima di iniziare: non fisso qui un protocollo che poi non è quello della seduta. Se cerchi il nome di un olio preciso, chiedimelo in chat.\n\nSarvanga Abhyanga, 60 minuti. Massaggio con olio su tutto il corpo, gesti continui, di impostazione ayurvedica. È un’ora di contatto lento.\n\nMassaggio rilassante, 60 minuti. Pressione media, se vuoi staccare senza un lavoro puntuale sulle zone più tese.\n\nMassaggio decontratturante, 45 minuti. Più mirato su schiena, spalle o gambe, sempre come massaggio di benessere. Non toglie un problema e non cura un dolore: si lavora sulla sensazione di tensione di quel giorno, e ci si ferma se una zona non va toccata.\n\nMassaggio detox, 60 minuti. Ritmico, più profondo. Non è un linfodrenaggio classico e non è un trattamento linfatico medico.\n\nSe non sai quale scegliere, scrivimi due righe su come ti senti. Ti indico un percorso, senza impegno. Le schede complete sono le pagine di ogni trattamento: da lì leggi cosa aspettarti e quando non è il caso.",
        },
        {
          h2: "Studio a Maderno oppure a casa tua",
          body: "Casa tua e studio a Maderno sono lo stesso lavoro, in due luoghi. Cambiano il viaggio e la stanza, non il massaggio. In studio valgono le stesse durate e lo stesso prezzo su richiesta.\n\nLa pagina del massaggio a domicilio a Maderno spiega come prenotare e ripete le zone. Questa nota è per chi cerca Salò, Gardone Riviera o Gargnano e vuole sapere se il paese è servito, prima di scrivere.",
        },
      ],
      treatmentsTitle: "Le schede dei trattamenti",
      treatmentsIntro: "Ogni percorso ha la sua pagina, con durata, luogo e cosa aspettarti. Il prezzo, anche lì, è su richiesta.",
      homeVisitLabel: "Massaggio a domicilio a Maderno",
      faqTitle: "Domande frequenti",
      faqs: [
        {
          q: "Vieni a Salò e a Gardone Riviera?",
          a: "Sì. Salò e Gardone Riviera sono in elenco, insieme a Gargnano, Toscolano Maderno e San Felice del Benaco.",
        },
        {
          q: "Lo spostamento ha un prezzo a parte?",
          a: "Il totale te lo scrivo in chat, trattamento e viaggio. Sul sito non pubblico una cifra fissa.",
        },
        {
          q: "Va bene se non ho mai fatto massaggi?",
          a: "Sì. Spiego il percorso all’inizio e regoliamo la pressione. Se vuoi la scelta più morbida, partiamo dal massaggio rilassante.",
        },
        {
          q: "È una terapia?",
          a: "No. Sono massaggi di benessere. Per patologie o interventi recenti, parla prima con il medico.",
        },
      ],
    },
    homeVisit: {
      metaTitle: "Massaggio a domicilio a Maderno | Melania Massaggi",
      metaDescription:
        "Su appuntamento: massaggio a domicilio Maderno, a casa tua. Pietre laviche, Sarvanga, rilassante, decontratturante e detox. Prezzo su richiesta, in chat.",
      eyebrow: "A domicilio",
      h1: "Massaggi a domicilio a Maderno",
      lead: "Vengo a casa tua su appuntamento. Il prezzo resta su richiesta: te lo mando io, senza impegno.",
      howTitle: "Come funziona il servizio a domicilio",
      howBody:
        "Mi scrivi su WhatsApp o email e mi dici i giorni possibili e se preferisci che venga a casa tua. Luogo e orario li concordiamo in chat: l’indirizzo non è pubblicato sul sito.\n\nRicevo solo su appuntamento. Lavoro da sola e adatto pressione e ritmo a come stai quel giorno. Non è una visita medica né una fisioterapia.",
      treatmentsTitle: "Trattamenti disponibili",
      treatmentsIntro:
        "A domicilio puoi prenotare gli stessi cinque percorsi dello studio. Il prezzo è su richiesta per tutti.",
      areasTitle: "Zone servite",
      areasIntro:
        "Entro circa mezz’ora d’auto da Toscolano Maderno, sulla sponda bresciana del lago di Garda.",
      townHint: "Scegli il paese. Il messaggio su WhatsApp lo nomina.",
      waTown: "Ciao Melania, vorrei un massaggio a domicilio a {town}.",
      areasArticle: "Perché questi paesi, e non altri",
      bookTitle: "Come prenotare",
      bookBody:
        "Il modo più rapido è WhatsApp. Puoi anche scrivere a moreni.melania66@gmail.com. Ti rispondo io con listino e disponibilità.",
      footerLink: "Massaggio a domicilio",
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
          a: "A domicilio a Gargnano, Toscolano Maderno, Gardone Riviera, Salò e San Felice del Benaco, oppure in studio a Maderno. Per indirizzo, orari e disponibilità scrivimi un messaggio.",
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
      lakeAlt: "Lake Garda in the morning, pebble shore and mountains on the Brescia side",
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
        "Where|Home visits in Gargnano, Toscolano Maderno, Gardone Riviera, Salò and San Felice del Benaco, or studio in Maderno",
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
      p1b: "Gargnano, Toscolano Maderno, Gardone Riviera, Salò and San Felice del Benaco",
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
      placeArea: "Gargnano, Toscolano Maderno, Gardone Riviera, Salò and San Felice del Benaco",
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
        "Today I offer home visits from Gargnano to San Felice del Benaco, or sessions in a studio in Maderno. For more on place and times, just message me: I’ll help you choose what fits.",
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
        "Home visits from Gargnano to San Felice del Benaco, or in studio in Maderno. We agree place, address and time in chat. For more information, send me a message.",
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
      whatLabel: "What it is",
      whoLabel: "Who it suits",
      placeLabel: "Duration and place",
      expectLabel: "What to expect",
      cautionLabel: "When it is not a good idea",
      faqLabel: "Questions about this treatment",
      bookMessage: "Hello Melania, I would like to book: {title}.",
      items: {
        sarvanga: {
          title: "Sarvanga Abhyanga in Maderno",
          subtitle: "Ayurvedic full-body massage",
          short:
            "Sarvanga Abhyanga in Maderno: Ayurvedic massage from head to toe, 60 minutes, with warm oils. At home or in studio. Price on request.",
          description:
            "Sarvanga Abhyanga in Maderno is a full Ayurvedic massage, head to toe, with warm oils. It lasts 60 minutes, at home or in studio.",
          forWhom: "If you want a warm full-body session, or a first step into Ayurveda without a rush.",
          how: "60 minutes at home or in studio in Maderno, by appointment. I explain the steps and we set the pressure together. Price on request.",
          benefits: [
            "Head to toe, with warm oils.",
            "Steps explained, pressure agreed together.",
            "60 minutes at home or in studio in Maderno.",
          ],
          what:
            "Sarvanga Abhyanga in Maderno is my Ayurvedic full-body massage. The name already says the scope: sarva means “all”, anga means “body”, abhyanga is massage with oil. I work from head to toe with warm oils and a slow rhythm, not with the same script for every person.\n\nIt is not an Ayurvedic consultation and it is not a medical visit. It is a wellness massage: I listen to how you feel that day and adapt pressure and pace. At the start I explain the steps, so you know what comes next. If an area should be left alone, we leave it.",
          who:
            "It suits you if you want enveloping work on the whole body, at home or in studio in Maderno, and you have an hour. It is fine if you have never had an Ayurvedic massage: you do not need the terms, just say how you feel and how much pressure is right.\n\nIf you prefer a shorter time, deep tissue is 45 minutes. If you want the longest path, with stones, the signature treatment is 75. If you are unsure where to start, write to me and I will suggest one or two options for the time you have.",
          place:
            "The session lasts 60 minutes and is by appointment only. You can have Sarvanga Abhyanga in Maderno at home from Gargnano to San Felice del Benaco, or in the studio in Maderno. The studio address is not published: area, address and time are agreed when you write. The price stays on request. A WhatsApp or email is enough for the list, with no obligation.",
          expect:
            "We start with a few questions: how you feel, whether it is your first time, whether there is a part of the body to avoid that day. Then the massage covers the body, head to toe, with warm oils and a pace set to you. There is no fixed protocol to “finish”: pressure can be lightened at any moment.\n\nAt the end you have had an hour of wellness massage. You do not leave with a diagnosis, exercises, or a judgement on your health.",
          caution:
            "Sarvanga Abhyanga in Maderno does not replace a doctor, physiotherapy or a diagnosis. If you have a condition, recent surgery or a doubt, speak to your doctor first. If something is unclear, tell me: if I am unsure, I will say it is better to postpone.\n\nI do not publish a list of specific cases for this massage. If you have a particular condition, ask your doctor and then write to me.",
          faqs: [
            {
              q: "How long is Sarvanga Abhyanga in Maderno, and what does it cost?",
              a: "60 minutes. The price is on request: write on WhatsApp or email and I send the list, with no obligation.",
            },
            {
              q: "Is it at home or in the studio?",
              a: "Both, in Maderno. Home visits run from Gargnano to San Felice del Benaco. The studio address is agreed in chat and is not published on the site.",
            },
            {
              q: "Is it an Ayurvedic medical visit?",
              a: "No. It is a wellness massage with warm oils, head to toe. It does not replace your doctor: if you have a condition or recent surgery, ask them first.",
            },
          ],
        },
        relaxing: {
          title: "Relaxing massage in Maderno",
          subtitle: "Slow, enveloping strokes",
          short:
            "Relaxing massage in Maderno: 60 minutes of slow hands, at home or in studio. Price on request.",
          description:
            "Relaxing massage in Maderno: slow work on the muscles, for an hour, after a full period. At home or in studio.",
          forWhom: "If you arrive from full days and want a slow hour, without deeper pressure.",
          how: "60 minutes at home or in studio in Maderno, by appointment. Pressure is agreed together. Price on request.",
          benefits: [
            "Slow hands, without a fixed script.",
            "Pressure agreed at the start.",
            "60 minutes at home or in studio in Maderno.",
          ],
          what:
            "The relaxing massage in Maderno is an hour of slow work on the muscles. The pace stays enveloping: it is not the path with deeper pressure (that is deep tissue, 45 minutes) and it does not use hot stones, unless you book that other treatment.\n\nI work alone, by appointment, and I do not start from a fixed script. I listen to how you feel that day and adjust pressure and pace. It is a wellness massage for putting the day down, not for “fixing” a problem.",
          who:
            "It suits you if you arrive loaded, after an intense stretch, or if you want a first, gentle massage in Maderno. At the start I explain what happens and we decide the pressure together.\n\nIf you want more focused work on neck or back, say so: deep tissue is the 45-minute path with a more present pressure. If you want the warmth of stones, the signature treatment is 75 minutes. You can also write first and I will suggest one or two paths.",
          place:
            "It lasts 60 minutes, by appointment only. The relaxing massage in Maderno is at home from Gargnano to San Felice del Benaco, or in the studio in Maderno. The address is not on the site: we agree it in chat, with the time. The price is on request. WhatsApp or email is enough for the list, with no obligation.",
          expect:
            "We begin by talking for a moment: how the day went, whether there is an area you would rather I leave, whether you want a light touch. Then the hands work slowly on the muscles. There is no sequence to get through, and you are not asked to endure anything.\n\nIf halfway you want less pressure, say so and I change it. At the end of the hour the massage closes. It is not a session that assesses your sleep, your posture or your health.",
          caution:
            "The relaxing massage in Maderno does not replace sleep, a doctor or physiotherapy. It does not promise an effect on rest: it is a slow hour of wellness. If you have a condition, recent surgery or a doubt, speak to your doctor first.\n\nIf you are not sure it is the right moment, write to me. If I am unsure, I will say it is better to postpone.",
          faqs: [
            {
              q: "How long is the relaxing massage in Maderno?",
              a: "60 minutes, by appointment. The price is on request: I send the list on WhatsApp or email.",
            },
            {
              q: "Is this the massage with stones?",
              a: "No. The relaxing massage is slow hands, without stones. Hot stones and essential oils are another path, 75 minutes.",
            },
            {
              q: "Is it all right if I have never had a massage?",
              a: "Yes. At the start I explain the steps and we set the pressure together. If you have a condition or recent surgery, ask your doctor first.",
            },
          ],
        },
        deep: {
          title: "Deep tissue massage in Maderno",
          subtitle: "Focused work, more present pressure",
          short:
            "Deep tissue massage in Maderno: 45 minutes, more present pressure on areas that feel tight from a desk or sport. At home or in studio. Price on request.",
          description:
            "Deep tissue massage in Maderno: 45 minutes with more present pressure on areas that feel tight, from a desk, sport or repeated effort.",
          forWhom: "If your back or neck feels tight, or you come from long hours sitting or from training.",
          how: "45 minutes at home or in studio in Maderno, by appointment. Pressure is agreed and can be lightened. Price on request.",
          benefits: [
            "45 minutes, shorter than the other paths.",
            "More present pressure, always agreed.",
            "At home or in studio in Maderno.",
          ],
          what:
            "Deep tissue massage in Maderno is the shortest path: 45 minutes. The pressure is more present than in the relaxing massage, and the work stays on the areas that feel tight that day, often back, neck, or spots linked to a desk, sport or repeated effort.\n\nIt is not physiotherapy and it does not “fix” a knot. I adapt the touch to how you feel: if it is too much, I lighten it. I do not start from a fixed protocol and I do not diagnose why you feel tight.",
          who:
            "It suits you if you want a focused time, not a full slow hour, and a more present pressure is all right for you. Say at the start how much you want to feel the work: it is not a test of endurance.\n\nIf you prefer an enveloping touch on the whole body, the relaxing massage or Sarvanga Abhyanga last 60 minutes. If you want warmth, hot stones last 75. If a pain worries you, this massage is not where to understand it: talk to your doctor.",
          place:
            "It lasts 45 minutes, by appointment only. Deep tissue massage in Maderno is at home from Gargnano to San Felice del Benaco or in the studio in Maderno. Address and time are agreed in chat. The price is on request: write on WhatsApp or email for the list, with no obligation.",
          expect:
            "Before we start you say where you feel the tension and what pressure you are used to. The work stays on those areas, with a touch more present than the relaxing massage, but you can ask me to stop or lighten at any moment.\n\nI do not explain a cause and you do not leave with an exercise plan. It is forty-five minutes of wellness massage, by appointment, with me alone.",
          caution:
            "Deep tissue massage in Maderno does not replace physiotherapy, a visit or a diagnosis, even though the pressure is more present. If you have a condition, recent surgery, a pain you do not know, or a doubt, speak to your doctor first.\n\nIf an area should not be touched during the session, say so at once. If I am unsure, I will say it is better to postpone.",
          faqs: [
            {
              q: "Why is deep tissue in Maderno 45 minutes and not 60?",
              a: "It is the shortest of the five paths: 45 minutes, with more focused work. The others last 60, hot stones 75. The price is on request.",
            },
            {
              q: "Does it hurt?",
              a: "The pressure is more present than the relaxing massage, but it is agreed at the start and can be lightened. It is not something to endure.",
            },
            {
              q: "Does it replace physiotherapy?",
              a: "No. It is a wellness massage. If you have a condition, recent surgery or a pain that worries you, ask your doctor first.",
            },
          ],
        },
        detox: {
          title: "Detox massage in Maderno",
          subtitle: "Rhythmic and deep, not classic lymphatic",
          short:
            "Detox massage in Maderno: 60 minutes, rhythmic and deep. Not classic lymphatic drainage. At home or in studio. Price on request.",
          description:
            "Detox massage in Maderno: an hour of rhythmic, deep work, for a feeling of lightness. It is not classic lymphatic drainage and it is not a medical treatment.",
          forWhom: "If you want a rhythmic hour and a feeling of lightness, without lymphatic drainage.",
          how: "60 minutes at home or in studio in Maderno, by appointment. It does not replace a medical lymphatic treatment. Price on request.",
          benefits: [
            "Rhythmic, deep work, not classic lymphatic drainage.",
            "It does not replace a medical treatment.",
            "60 minutes at home or in studio in Maderno.",
          ],
          what:
            "The detox massage in Maderno lasts 60 minutes. It is rhythmic, deep work. It is not classic lymphatic drainage and it does not replace a medical lymphatic treatment.\n\nThe aim is a feeling of lightness, not to “clean” the body. I adapt rhythm and pressure to how you feel that day. If you were expecting lymphatic drainage, this is not the right path: say so before you book.",
          who:
            "It suits you if you want an hour with a livelier rhythm than the relaxing massage, at home or in studio in Maderno, and deeper work is all right for you. It is not the path if you need a lymphatic treatment prescribed by a doctor: I do not offer that.\n\nIf you only want slowness, choose the relaxing massage. If you want stones, the signature treatment is 75 minutes. If you are unsure, write two lines about how you feel and I will say whether it makes sense.",
          place:
            "It lasts 60 minutes, by appointment only. The detox massage in Maderno is at home from Gargnano to San Felice del Benaco or in the studio in Maderno. The studio address is agreed in chat. The price is on request: WhatsApp or email, and you receive the list with no obligation.",
          expect:
            "At the start I make clear that this is not lymphatic drainage. Then I ask how you feel and what pressure you want. The massage has a steady rhythm and more depth than the relaxing massage; if it becomes too much, we slow down.\n\nI do not measure anything, I do not tell you that you are “loaded”, and I do not assign a result. It is an hour of wellness massage. Afterwards you can write for another path, but there is no package you must take.",
          caution:
            "The detox massage in Maderno is not a therapy, not lymphatic drainage, and it does not replace a doctor or physiotherapy. If you have a condition, recent surgery or a doubt, speak to your doctor first. If you are looking for a lymphatic treatment, ask someone trained for that.\n\nIf I am unsure, I will tell you it is better to postpone. Write to me before you book if you have a particular condition.",
          faqs: [
            {
              q: "Is the detox massage in Maderno lymphatic drainage?",
              a: "No. It is a rhythmic, deep massage of 60 minutes. It is not classic lymphatic drainage and it does not replace a medical lymphatic treatment.",
            },
            {
              q: "How much does it cost?",
              a: "The price is on request, as with the other paths. Write on WhatsApp or email and I send the list, with no obligation.",
            },
            {
              q: "Where does it take place?",
              a: "At home from Gargnano to San Felice del Benaco, or in the studio in Maderno, by appointment. The address is agreed in chat.",
            },
          ],
        },
        stones: {
          title: "Hot stones and essential oils in Maderno",
          subtitle: "Signature treatment · 75 minutes",
          short:
            "Hot stones and essential oils in Maderno: 75 minutes with basalt stones and essential oils, at home or in studio. Price on request.",
          description:
            "Hot stones and essential oils in Maderno: warmed basalt stones and essential oils, for 75 minutes. The pace follows how you feel that day.",
          forWhom:
            "If you want the longest path, with the warmth of stones, or an hour and a quarter after an intense period.",
          how: "75 minutes at home or in studio in Maderno, by appointment. Often chosen after other massages too. Price on request.",
          benefits: [
            "Warmed basalt stones and essential oils.",
            "75 minutes, the longest path.",
            "At home or in studio in Maderno, by appointment.",
          ],
          what:
            "Hot stones and essential oils in Maderno is the signature path at Melania Massaggi, and the one most often requested. It lasts 75 minutes. Basalt stones are warmed and placed on the points we are working: they give off heat slowly. Meanwhile the hands continue with essential oils and a slow rhythm.\n\nIt is not the same protocol for everyone. I listen to how you feel that day and adapt pressure and pace. Many people book it on its own. Others choose it after a relaxing massage, Sarvanga Abhyanga or another of the five paths.",
          who:
            "It is for anyone who wants a long, warm, sensory time, at home or in studio in Maderno. It is fine for a first massage too: at the start I explain the steps and we decide the pressure together.\n\nIf you only want a slow hour, without stones, there is the relaxing massage. If you want shorter, more present work, deep tissue is 45 minutes. If you are not sure the stones are for you, write how you feel: I will suggest one or two paths for the time you have.",
          place:
            "The session lasts 75 minutes and is by appointment only. Hot stones and essential oils in Maderno are at home from Gargnano to San Felice del Benaco, or in the studio in Maderno. The studio address is not published: area, address and time are agreed when you write. The price stays on request. A WhatsApp or email is enough for the list, with no obligation.",
          expect:
            "We start with a short exchange: how you feel, whether you prefer a lighter or more present touch, whether an area should be left alone. Then the work is slow. The basalt stones bring warmth, the hands work with essential oils. There is no script to get through: if a passage is not for you, you say so and I change it.\n\nAt the end you have had seventy-five minutes of wellness massage. It is not a visit, not a test of the heat, and you are not asked for a result.",
          caution:
            "Hot stones and essential oils in Maderno is a wellness massage. It does not replace a doctor, physiotherapy or a diagnosis. If you have a condition, recent surgery or a doubt, speak to your doctor first. If the heat or an oil is not for you, say so before we start or during: I change it.\n\nIf I am unsure, I will say it is better to postpone. I do not publish a specific list of cases for the stones: if you have a particular condition, ask your doctor and then write to me.",
          faqs: [
            {
              q: "How long are hot stones and essential oils in Maderno?",
              a: "75 minutes, by appointment. It is the longest path. The price is on request: write and I send the list.",
            },
            {
              q: "Which stones, and where does it take place?",
              a: "Basalt stones, warmed, together with essential oils. At home from Gargnano to San Felice del Benaco or in the studio in Maderno. The address is agreed in chat.",
            },
            {
              q: "Do the stones replace a therapy?",
              a: "No. It is a wellness massage. If you have a condition or recent surgery, ask your doctor first. If you have a doubt about the heat, write it before you book.",
            },
          ],
        },
      },
    },
    blogPost: {
      metaTitle: "Home massage on Lake Garda: from Salò to Gargnano | Melania Massaggi",
      metaDescription:
        "Home massage on Lake Garda, within about half an hour of Toscolano Maderno: Gargnano, Gardone Riviera, Salò and San Felice del Benaco.",
      eyebrow: "On Lake Garda",
      question: "In which Lake Garda towns can I book a home massage?",
      h1: "Home massage on Lake Garda: from Salò to Gargnano",
      answer:
        "Yes. I come to your home, by appointment, in the towns within about half an hour by car from Toscolano Maderno: Gargnano, Toscolano Maderno, Gardone Riviera, Salò and San Felice del Benaco. You can book the same five massages as in the studio. The price is on request: I write it to you, with no obligation. If you live just outside these towns, message me anyway and I’ll say whether I can come that day.",
      sections: [
        {
          h2: "Where I travel, from Toscolano Maderno",
          body: "I start from Toscolano Maderno, on the Brescia shore of Lake Garda. I travel if the drive is about twenty minutes, half an hour at most. That is the range I use for home appointments, not a promise to the minute: the lakeside road changes in summer, and I would rather say no than arrive in a rush.\n\nInside this round, from north to south, are Gargnano, Toscolano Maderno, Gardone Riviera, Salò and San Felice del Benaco. Gardone Riviera sits between Maderno and Salò. Gargnano is the first town to the north, along the lake. San Felice del Benaco closes the list south of Salò.\n\nLimone sul Garda, Manerba del Garda, Moniga, Padenghe and Desenzano del Garda are not on the list. The time depends on the address and the traffic: if you live in one of these, ask me in chat before we plan the session.\n\nYour home address stays in chat. It is not on the site. If you prefer the studio, it is in Maderno: that address is also said in the message, not on the page.",
        },
        {
          h2: "How to book the massage at home",
          body: "The step is short. Write to me on WhatsApp or at moreni.melania66@gmail.com. Tell me two or three possible days, whether you want your home or the studio, and the town. I reply myself with free times and the current price list. There is no form to fill in.\n\nI only work by appointment. I work alone: there is no second therapist to pass you to, and no reception. At the start of the session I ask how you feel that day, whether a spot should be avoided, and what pressure you like. Then we adjust it together, even halfway through.\n\nThis is not a medical visit and it does not replace physiotherapy. If you have a condition, recent surgery, or a doubt about your health, talk to your doctor first. I don’t publish a list of contraindications. If your situation is more than a simple wellness massage, talk to your doctor before you book.\n\nAt home I bring what the treatment needs. What I ask you to prepare, from space to lie down to pets in the house, I write when we confirm the time. Each home is different, so I say it for yours.",
        },
        {
          h2: "Which of the five massages to book",
          body: "At home you get the same five paths as in the studio in Maderno. The durations are the ones on each page, and the price is on request for all of them.\n\nHot stones and essential oils, 75 minutes. Basalt stones and oils, a slow pace. It is the path I offer most often. Which oils I use in that period, and how I move the stones, I tell you before we start: I don’t fix a protocol here that then isn’t the one of the session. If you want the name of a specific oil, ask me in chat.\n\nSarvanga Abhyanga, 60 minutes. An oil massage over the whole body, continuous strokes, with an ayurvedic setting. It is an hour of slow contact. I don’t promise effects on sleep or on tensions I can’t describe with you, that day, in concrete terms.\n\nRelaxing massage, 60 minutes. Medium pressure, if you want to switch off without focused work on the tighter areas.\n\nDeep tissue massage, 45 minutes. More focused on back, shoulders or legs, still as a wellness massage. It does not remove a problem and it does not treat pain: we work on the feeling of tension that day, and we stop if an area should not be touched.\n\nDetox massage, 60 minutes. Rhythmic, a little deeper. It is not classic lymphatic drainage and it is not a medical lymphatic treatment.\n\nIf you don’t know which to choose, write me two lines about how you feel. I’ll point to one path, with no obligation. The full pages are the treatment pages: there you can read what to expect, and when it is not the right choice.",
        },
        {
          h2: "Studio in Maderno or your home",
          body: "Your home and the studio in Maderno are the same work, in two places. The journey and the room change, not the massage. In the studio the same durations apply, and the same price on request.\n\nThe Maderno home-massage page explains how to book and repeats the areas. This note is for anyone searching Salò, Gardone Riviera or Gargnano who wants to know whether the town is served, before writing.",
        },
      ],
      treatmentsTitle: "The treatment pages",
      treatmentsIntro: "Each path has its own page, with duration, place and what to expect. The price, there too, is on request.",
      homeVisitLabel: "Home massage in Maderno",
      faqTitle: "Questions",
      faqs: [
        {
          q: "Do you come to Salò and Gardone Riviera?",
          a: "Yes. Salò and Gardone Riviera are on the list, together with Gargnano, Toscolano Maderno and San Felice del Benaco.",
        },
        {
          q: "Is the trip a separate price?",
          a: "I write the total in chat, treatment and travel. I don’t publish a fixed fee on the site.",
        },
        {
          q: "Is it all right if I’ve never had a massage?",
          a: "Yes. I explain the path at the start and we adjust the pressure. If you want the softer choice, we start with the relaxing massage.",
        },
        {
          q: "Is it a therapy?",
          a: "No. These are wellness massages. For a condition or recent surgery, talk to your doctor first.",
        },
      ],
    },
    homeVisit: {
      metaTitle: "Home massage in Maderno | Melania Massaggi",
      metaDescription:
        "Home massage in Maderno by appointment. Hot stones, Sarvanga, relaxing, deep tissue and detox. Price on request.",
      eyebrow: "At home",
      h1: "Home massage in Maderno",
      lead: "I come to your home by appointment. The price stays on request: I send it myself, with no obligation.",
      howTitle: "How the home visit works",
      howBody:
        "Write to me on WhatsApp or email with possible days and say if you want me to come to your home. We agree place and time in chat: the address is not published on the site.\n\nI only work by appointment. I work alone and adapt pressure and pace to how you feel that day. This is not a medical visit or physiotherapy.",
      treatmentsTitle: "Treatments available",
      treatmentsIntro:
        "At home you can book the same five paths as in the studio. The price is on request for all of them.",
      areasTitle: "Areas served",
      areasIntro:
        "Within about half an hour by car from Toscolano Maderno, on the Brescia shore of Lake Garda.",
      townHint: "Choose the town. The WhatsApp message names it.",
      waTown: "Hello Melania, I would like a home massage in {town}.",
      areasArticle: "Why these towns, and not others",
      bookTitle: "How to book",
      bookBody:
        "WhatsApp is the fastest way. You can also email moreni.melania66@gmail.com. I reply myself with the price list and availability.",
      footerLink: "Home massage",
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
          a: "Home visits in Gargnano, Toscolano Maderno, Gardone Riviera, Salò and San Felice del Benaco, or in the studio in Maderno. For the address, times and availability, send me a message.",
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
      lakeAlt: "Gardasee am Morgen, Kiesufer und Berge am Brescianer Ufer",
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
        "Wo|Hausbesuch in Gargnano, Toscolano Maderno, Gardone Riviera, Salò und San Felice del Benaco, oder Studio in Maderno",
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
      p1b: "Gargnano, Toscolano Maderno, Gardone Riviera, Salò und San Felice del Benaco",
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
      placeArea: "Gargnano, Toscolano Maderno, Gardone Riviera, Salò und San Felice del Benaco",
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
        "Heute biete ich Hausbesuche von Gargnano bis San Felice del Benaco oder Termine im Studio in Maderno an. Für mehr Infos zu Ort und Zeiten schreib mir einfach: ich helfe dir zu wählen.",
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
        "Hausbesuche von Gargnano bis San Felice del Benaco oder im Studio in Maderno. Ort, Adresse und Uhrzeit klären wir per Chat. Für mehr Infos schreib mir eine Nachricht.",
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
      whatLabel: "Was es ist",
      whoLabel: "Für wen es passt",
      placeLabel: "Dauer und Ort",
      expectLabel: "Was dich erwartet",
      cautionLabel: "Wann es nicht passt",
      faqLabel: "Fragen zu dieser Behandlung",
      bookMessage: "Hallo Melania, ich möchte buchen: {title}.",
      items: {
        sarvanga: {
          title: "Sarvanga Abhyanga in Maderno",
          subtitle: "Ayurvedische Ganzkörpermassage",
          short:
            "Sarvanga Abhyanga in Maderno: ayurvedische Massage von Kopf bis Fuß, 60 Minuten, mit warmen Ölen. Hausbesuch oder Studio. Preis auf Anfrage.",
          description:
            "Sarvanga Abhyanga in Maderno ist eine ayurvedische Ganzkörpermassage von Kopf bis Fuß, mit warmen Ölen. 60 Minuten, zu Hause oder im Studio.",
          forWhom: "Wenn du einen warmen Ganzkörper suchst oder einen ersten Schritt ins Ayurveda ohne Eile.",
          how: "60 Minuten zu Hause oder im Studio in Maderno, nach Termin. Ich erkläre die Schritte und wir stimmen den Druck ab. Preis auf Anfrage.",
          benefits: [
            "Von Kopf bis Fuß, mit warmen Ölen.",
            "Schritte erklärt, Druck gemeinsam abgestimmt.",
            "60 Minuten zu Hause oder im Studio in Maderno.",
          ],
          what:
            "Sarvanga Abhyanga in Maderno ist meine ayurvedische Ganzkörpermassage. Der Name sagt den Rahmen: sarva heißt „alles“, anga „Körper“, abhyanga ist die Massage mit Öl. Ich arbeite von Kopf bis Fuß mit warmen Ölen und einem langsamen Rhythmus, nicht mit demselben Ablauf für jeden Menschen.\n\nEs ist keine ayurvedische Beratung und kein Arztbesuch. Es ist eine Wellness-Massage: ich höre, wie du dich an dem Tag fühlst, und passe Druck und Tempo an. Am Anfang erkläre ich die Schritte. Wenn eine Zone ausbleiben soll, lassen wir sie aus.",
          who:
            "Es passt, wenn du eine einhüllende Arbeit am ganzen Körper willst, zu Hause oder im Studio in Maderno, und eine Stunde Zeit hast. Auch ohne Ayurveda-Erfahrung: die Begriffe brauchst du nicht, sag einfach, wie du dich fühlst und welcher Druck stimmt.\n\nWenn du kürzer willst: Tiefengewebe dauert 45 Minuten. Der längste Weg, mit Steinen, dauert 75. Wenn du unsicher bist, schreib mir: ich schlage ein oder zwei Wege für deine Zeit vor.",
          place:
            "Die Sitzung dauert 60 Minuten und nur nach Termin. Sarvanga Abhyanga in Maderno gibt es als Hausbesuch von Gargnano bis San Felice del Benaco oder im Studio in Maderno. Die Studioadresse steht nicht auf der Seite: Gegend, Adresse und Uhrzeit klären wir, wenn du schreibst. Der Preis bleibt auf Anfrage. WhatsApp oder E-Mail genügt für die Liste, unverbindlich.",
          expect:
            "Wir beginnen mit wenigen Fragen: wie du dich fühlst, ob es das erste Mal ist, ob eine Körperstelle an dem Tag ausbleiben soll. Dann geht die Massage über den Körper, von Kopf bis Fuß, mit warmen Ölen und einem Tempo, das zu dir passt. Es gibt kein festes Protokoll, das „fertig“ werden muss: den Druck kann ich jederzeit leichter machen.\n\nAm Ende hattest du eine Stunde Wellness-Massage. Du gehst ohne Diagnose, ohne Übungsplan und ohne Urteil über deine Gesundheit.",
          caution:
            "Sarvanga Abhyanga in Maderno ersetzt keinen Arztbesuch, keine Physiotherapie und keine Diagnose. Bei einer Erkrankung, einer frischen Operation oder einem Zweifel sprich zuerst mit Ärztin oder Arzt. Wenn etwas unklar ist, sag es mir: im Zweifel sage ich, dass wir verschieben.\n\nEine Liste einzelner Fälle für diese Massage veröffentliche ich nicht. Wenn du eine besondere Situation hast, frag die Ärztin oder den Arzt und schreib mir danach.",
          faqs: [
            {
              q: "Wie lange dauert Sarvanga Abhyanga in Maderno, und was kostet es?",
              a: "60 Minuten. Der Preis ist auf Anfrage: schreib per WhatsApp oder E-Mail, ich sende die Liste unverbindlich.",
            },
            {
              q: "Zu Hause oder im Studio?",
              a: "Beides, in Maderno. Hausbesuche von Gargnano bis San Felice del Benaco. Die Studioadresse klären wir im Chat, sie steht nicht auf der Website.",
            },
            {
              q: "Ist das ein ayurvedischer Arztbesuch?",
              a: "Nein. Es ist eine Wellness-Massage mit warmen Ölen, von Kopf bis Fuß. Sie ersetzt den Arzt nicht: bei Erkrankung oder frischer Operation frag zuerst dort nach.",
            },
          ],
        },
        relaxing: {
          title: "Entspannungsmassage in Maderno",
          subtitle: "Langsame, einhüllende Striche",
          short:
            "Entspannungsmassage in Maderno: 60 Minuten langsame Griffe, zu Hause oder im Studio. Preis auf Anfrage.",
          description:
            "Entspannungsmassage in Maderno: eine Stunde langsame Arbeit an der Muskulatur, nach einer vollen Zeit. Zu Hause oder im Studio.",
          forWhom: "Wenn du aus vollen Tagen kommst und eine langsame Stunde willst, ohne tieferen Druck.",
          how: "60 Minuten zu Hause oder im Studio in Maderno, nach Termin. Den Druck stimmen wir ab. Preis auf Anfrage.",
          benefits: [
            "Langsame Griffe, ohne festes Skript.",
            "Druck zu Beginn abgestimmt.",
            "60 Minuten zu Hause oder im Studio in Maderno.",
          ],
          what:
            "Die Entspannungsmassage in Maderno ist eine Stunde langsame Arbeit an der Muskulatur. Das Tempo bleibt einhüllend: es ist nicht der Weg mit präsenterem Druck (das ist Tiefengewebe, 45 Minuten) und ohne Hot Stones, außer du buchst diesen anderen Weg.\n\nIch arbeite allein, nach Termin, und starte nicht von einem festen Ablauf. Ich höre, wie du dich an dem Tag fühlst, und passe Druck und Tempo an. Es ist eine Wellness-Massage, um den Tag abzulegen, nicht um ein Problem zu „richten“.",
          who:
            "Sie passt, wenn du beladen ankommst, nach einer intensiven Phase, oder eine erste, sanfte Massage in Maderno willst. Am Anfang erkläre ich, was passiert, und wir entscheiden den Druck gemeinsam.\n\nWenn du gezieltere Arbeit an Nacken oder Rücken willst, sag es: Tiefengewebe ist der 45-Minuten-Weg mit präsenterem Druck. Wenn du die Wärme der Steine willst, dauert die Signature 75 Minuten. Du kannst auch vorher schreiben, dann schlage ich ein oder zwei Wege vor.",
          place:
            "Sie dauert 60 Minuten, nur nach Termin. Die Entspannungsmassage in Maderno ist zu Hause von Gargnano bis San Felice del Benaco oder im Studio in Maderno. Die Adresse steht nicht auf der Seite: wir klären sie im Chat, zusammen mit der Uhrzeit. Der Preis ist auf Anfrage. WhatsApp oder E-Mail genügt für die Liste, unverbindlich.",
          expect:
            "Wir beginnen mit einem kurzen Gespräch: wie der Tag war, ob eine Zone lieber ausbleiben soll, ob du einen leichten Griff willst. Dann arbeiten die Hände langsam an der Muskulatur. Es gibt keine Abfolge, die du durchhalten musst.\n\nWenn du auf halbem Weg weniger Druck willst, sag es, und ich ändere ihn. Nach der Stunde ist die Massage zu Ende. Es ist keine Sitzung, die Schlaf, Haltung oder Gesundheit bewertet.",
          caution:
            "Die Entspannungsmassage in Maderno ersetzt keinen Schlaf, keinen Arzt und keine Physiotherapie. Sie verspricht keine Wirkung auf die Ruhe: es ist eine langsame Stunde Wellness. Bei Erkrankung, frischer Operation oder Zweifel sprich zuerst mit Ärztin oder Arzt.\n\nWenn du unsicher bist, ob es der richtige Moment ist, schreib mir. Im Zweifel sage ich, dass wir verschieben.",
          faqs: [
            {
              q: "Wie lange dauert die Entspannungsmassage in Maderno?",
              a: "60 Minuten, nach Termin. Der Preis ist auf Anfrage: ich sende die Liste per WhatsApp oder E-Mail.",
            },
            {
              q: "Ist das die Massage mit Steinen?",
              a: "Nein. Die Entspannungsmassage ist langsame Handarbeit, ohne Steine. Hot Stones und ätherische Öle sind ein anderer Weg, 75 Minuten.",
            },
            {
              q: "Geht das auch ohne Massage-Erfahrung?",
              a: "Ja. Am Anfang erkläre ich die Schritte und wir stimmen den Druck ab. Bei Erkrankung oder frischer Operation frag zuerst Ärztin oder Arzt.",
            },
          ],
        },
        deep: {
          title: "Tiefengewebsmassage in Maderno",
          subtitle: "Gezielte Arbeit, präsenterer Druck",
          short:
            "Tiefengewebsmassage in Maderno: 45 Minuten, präsenterer Druck an Stellen, die sich vom Schreibtisch oder vom Sport angespannt anfühlen. Zu Hause oder im Studio. Preis auf Anfrage.",
          description:
            "Tiefengewebsmassage in Maderno: 45 Minuten mit präsenterem Druck an Stellen, die sich angespannt anfühlen, vom Schreibtisch, Sport oder wiederholter Belastung.",
          forWhom: "Wenn sich Rücken oder Nacken angespannt anfühlen oder du von langem Sitzen oder vom Training kommst.",
          how: "45 Minuten zu Hause oder im Studio in Maderno, nach Termin. Der Druck wird abgestimmt und kann leichter werden. Preis auf Anfrage.",
          benefits: [
            "45 Minuten, kürzer als die anderen Wege.",
            "Präsenterer Druck, immer abgestimmt.",
            "Zu Hause oder im Studio in Maderno.",
          ],
          what:
            "Die Tiefengewebsmassage in Maderno ist der kürzeste Weg: 45 Minuten. Der Druck ist präsenter als bei der Entspannungsmassage, und die Arbeit bleibt an den Stellen, die sich an dem Tag angespannt anfühlen, oft Rücken, Nacken oder Punkte nach Schreibtisch, Sport oder wiederholter Belastung.\n\nEs ist keine Physiotherapie und sie „löst“ keine Verspannung als Behandlung. Ich passe den Griff an, wie du dich fühlst: wenn es zu viel ist, mache ich ihn leichter. Ich starte nicht von einem festen Protokoll und ich stelle keine Diagnose.",
          who:
            "Sie passt, wenn du eine gezielte Zeit willst, nicht eine ganze langsame Stunde, und ein präsenterer Druck für dich in Ordnung ist. Sag am Anfang, wie viel du spüren möchtest: es ist keine Ausdauerprobe.\n\nWenn du einen einhüllenden Griff am ganzen Körper willst, dauern Entspannung oder Sarvanga Abhyanga 60 Minuten. Wenn du Wärme willst, dauern die Steine 75. Wenn ein Schmerz dich beunruhigt, ist diese Massage nicht der Ort, ihn zu verstehen: sprich mit der Ärztin oder dem Arzt.",
          place:
            "Sie dauert 45 Minuten, nur nach Termin. Die Tiefengewebsmassage in Maderno ist zu Hause von Gargnano bis San Felice del Benaco oder im Studio in Maderno. Adresse und Uhrzeit klären wir im Chat. Der Preis ist auf Anfrage: schreib per WhatsApp oder E-Mail für die Liste, unverbindlich.",
          expect:
            "Vor dem Start sagst du, wo du die Spannung spürst und welchen Druck du kennst. Die Arbeit bleibt an diesen Stellen, mit einem präsenteren Griff als bei der Entspannung, aber du kannst jederzeit bitten, dass ich aufhöre oder leichter werde.\n\nIch erkläre keine Ursache und du gehst nicht mit einem Übungsplan. Es sind fünfundvierzig Minuten Wellness-Massage, nach Termin, mit mir allein.",
          caution:
            "Die Tiefengewebsmassage in Maderno ersetzt keine Physiotherapie, keinen Besuch und keine Diagnose, auch wenn der Druck präsenter ist. Bei Erkrankung, frischer Operation, einem Schmerz, den du nicht kennst, oder einem Zweifel sprich zuerst mit Ärztin oder Arzt.\n\nWenn eine Zone während der Sitzung nicht berührt werden soll, sag es sofort. Im Zweifel sage ich, dass wir verschieben.",
          faqs: [
            {
              q: "Warum dauert Tiefengewebe in Maderno 45 Minuten und nicht 60?",
              a: "Es ist der kürzeste der fünf Wege: 45 Minuten, mit gezielterer Arbeit. Die anderen dauern 60, Hot Stones 75. Der Preis ist auf Anfrage.",
            },
            {
              q: "Tut es weh?",
              a: "Der Druck ist präsenter als bei der Entspannungsmassage, wird aber am Anfang abgestimmt und kann leichter werden. Es ist nichts, das du aushalten musst.",
            },
            {
              q: "Ersetzt sie die Physiotherapie?",
              a: "Nein. Es ist eine Wellness-Massage. Bei Erkrankung, frischer Operation oder einem Schmerz, der dich beunruhigt, frag zuerst Ärztin oder Arzt.",
            },
          ],
        },
        detox: {
          title: "Detox-Massage in Maderno",
          subtitle: "Rhythmisch und tief, keine klassische Lymphdrainage",
          short:
            "Detox-Massage in Maderno: 60 Minuten, rhythmisch und tief. Keine klassische Lymphdrainage. Zu Hause oder im Studio. Preis auf Anfrage.",
          description:
            "Detox-Massage in Maderno: eine Stunde rhythmische, tiefe Arbeit, für ein Gefühl von Leichtigkeit. Keine klassische Lymphdrainage und keine medizinische Behandlung.",
          forWhom: "Wenn du eine rhythmische Stunde und ein Gefühl von Leichtigkeit willst, ohne Lymphdrainage.",
          how: "60 Minuten zu Hause oder im Studio in Maderno, nach Termin. Ersetzt keine medizinische Lymphbehandlung. Preis auf Anfrage.",
          benefits: [
            "Rhythmische, tiefe Arbeit, keine klassische Lymphdrainage.",
            "Ersetzt keine medizinische Behandlung.",
            "60 Minuten zu Hause oder im Studio in Maderno.",
          ],
          what:
            "Die Detox-Massage in Maderno dauert 60 Minuten. Sie ist rhythmisch und tief. Sie ist keine klassische Lymphdrainage und ersetzt keine medizinische Lymphbehandlung.\n\nEs geht um ein Gefühl von Leichtigkeit, nicht darum, den Körper zu „reinigen“. Ich passe Rhythmus und Druck an, wie du dich an dem Tag fühlst. Wenn du eine Lymphdrainage erwartet hast, ist das nicht der richtige Weg: sag es vor der Buchung.",
          who:
            "Sie passt, wenn du eine Stunde mit lebendigerem Rhythmus als die Entspannung willst, zu Hause oder im Studio in Maderno, und tiefere Arbeit für dich stimmt. Sie passt nicht, wenn du eine vom Arzt verordnete Lymphbehandlung brauchst: die biete ich nicht an.\n\nWenn du nur Langsamkeit willst, nimm die Entspannung. Wenn du Steine willst, dauert die Signature 75 Minuten. Wenn du unsicher bist, schreib zwei Zeilen, wie du dich fühlst, und ich sage, ob es Sinn hat.",
          place:
            "Sie dauert 60 Minuten, nur nach Termin. Die Detox-Massage in Maderno ist zu Hause von Gargnano bis San Felice del Benaco oder im Studio in Maderno. Die Studioadresse klären wir im Chat. Der Preis ist auf Anfrage: WhatsApp oder E-Mail, und du bekommst die Liste unverbindlich.",
          expect:
            "Am Anfang sage ich klar, dass das keine Lymphdrainage ist. Dann frage ich, wie du dich fühlst und welchen Druck du willst. Die Massage hat einen gleichmäßigen Rhythmus und mehr Tiefe als die Entspannung; wenn es zu viel wird, werden wir langsamer.\n\nIch messe nichts, ich sage dir nicht, dass du „beladen“ bist, und ich vergebe kein Ergebnis. Es ist eine Stunde Wellness-Massage. Danach kannst du für einen anderen Weg schreiben, ein Paket ist nicht nötig.",
          caution:
            "Die Detox-Massage in Maderno ist keine Therapie, keine Lymphdrainage und ersetzt weder Arzt noch Physiotherapie. Bei Erkrankung, frischer Operation oder Zweifel sprich zuerst mit Ärztin oder Arzt. Wenn du eine Lymphbehandlung suchst, frag jemanden, der dafür ausgebildet ist.\n\nIm Zweifel sage ich, dass wir verschieben. Schreib mir vor der Buchung, wenn du eine besondere Situation hast.",
          faqs: [
            {
              q: "Ist die Detox-Massage in Maderno eine Lymphdrainage?",
              a: "Nein. Es ist eine rhythmische, tiefe Massage von 60 Minuten. Keine klassische Lymphdrainage und kein Ersatz für eine medizinische Lymphbehandlung.",
            },
            {
              q: "Was kostet sie?",
              a: "Der Preis ist auf Anfrage, wie bei den anderen Wegen. Schreib per WhatsApp oder E-Mail, ich sende die Liste unverbindlich.",
            },
            {
              q: "Wo findet sie statt?",
              a: "Zu Hause von Gargnano bis San Felice del Benaco oder im Studio in Maderno, nach Termin. Die Adresse klären wir im Chat.",
            },
          ],
        },
        stones: {
          title: "Hot Stones und ätherische Öle in Maderno",
          subtitle: "Signature · 75 Minuten",
          short:
            "Hot Stones und ätherische Öle in Maderno: 75 Minuten mit Basaltsteinen und ätherischen Ölen, zu Hause oder im Studio. Preis auf Anfrage.",
          description:
            "Hot Stones und ätherische Öle in Maderno: erwärmte Basaltsteine und ätherische Öle, 75 Minuten. Das Tempo folgt dem, wie du dich an dem Tag fühlst.",
          forWhom:
            "Wenn du den längsten Weg willst, mit der Wärme der Steine, oder eine Stunde und eine Viertelstunde nach einer intensiven Phase.",
          how: "75 Minuten zu Hause oder im Studio in Maderno, nach Termin. Oft auch nach anderen Massagen gewählt. Preis auf Anfrage.",
          benefits: [
            "Erwärmte Basaltsteine und ätherische Öle.",
            "75 Minuten, der längste Weg.",
            "Zu Hause oder im Studio in Maderno, nach Termin.",
          ],
          what:
            "Hot Stones und ätherische Öle in Maderno ist der Signature-Weg von Melania Massaggi und der am häufigsten gebuchte. Er dauert 75 Minuten. Basaltsteine werden erwärmt und auf die Stellen gelegt, an denen wir arbeiten: sie geben die Wärme langsam ab. Die Hände arbeiten dabei mit ätherischen Ölen und einem langsamen Rhythmus weiter.\n\nEs ist nicht dasselbe Protokoll für alle. Ich höre, wie du dich an dem Tag fühlst, und passe Druck und Tempo an. Viele buchen ihn allein. Andere wählen ihn nach Entspannung, Sarvanga Abhyanga oder einem der anderen fünf Wege.",
          who:
            "Er ist für alle, die eine lange, warme, sinnliche Zeit wollen, zu Hause oder im Studio in Maderno. Auch als erste Massage: am Anfang erkläre ich die Schritte und wir entscheiden den Druck gemeinsam.\n\nWenn du nur eine langsame Stunde ohne Steine willst, gibt es die Entspannung. Wenn du kürzer und präsenter willst, dauert Tiefengewebe 45 Minuten. Wenn du unsicher bist, schreib, wie du dich fühlst: ich schlage ein oder zwei Wege für deine Zeit vor.",
          place:
            "Die Sitzung dauert 75 Minuten und nur nach Termin. Hot Stones und ätherische Öle in Maderno gibt es zu Hause von Gargnano bis San Felice del Benaco oder im Studio in Maderno. Die Studioadresse ist nicht veröffentlicht: Gegend, Adresse und Uhrzeit klären wir, wenn du schreibst. Der Preis bleibt auf Anfrage. WhatsApp oder E-Mail genügt für die Liste, unverbindlich.",
          expect:
            "Wir starten mit einem kurzen Austausch: wie du dich fühlst, ob du einen leichteren oder präsenteren Griff willst, ob eine Zone ausbleiben soll. Dann ist die Arbeit langsam. Die Basaltsteine bringen Wärme, die Hände arbeiten mit ätherischen Ölen. Es gibt kein Skript, das durchgehalten werden muss: wenn ein Abschnitt nicht passt, sagst du es und ich ändere ihn.\n\nAm Ende hattest du fünfundsiebzig Minuten Wellness-Massage. Es ist kein Besuch, keine Prüfung der Wärme, und es wird kein Ergebnis von dir verlangt.",
          caution:
            "Hot Stones und ätherische Öle in Maderno ist eine Wellness-Massage. Sie ersetzt keinen Arzt, keine Physiotherapie und keine Diagnose. Bei Erkrankung, frischer Operation oder Zweifel sprich zuerst mit Ärztin oder Arzt. Wenn Wärme oder ein Öl nicht passt, sag es vor dem Start oder währenddessen: ich ändere es.\n\nIm Zweifel sage ich, dass wir verschieben. Eine eigene Liste von Fällen für die Steine veröffentliche ich nicht: bei einer besonderen Situation frag Ärztin oder Arzt und schreib mir danach.",
          faqs: [
            {
              q: "Wie lange dauern Hot Stones und ätherische Öle in Maderno?",
              a: "75 Minuten, nach Termin. Es ist der längste Weg. Der Preis ist auf Anfrage: schreib, und ich sende die Liste.",
            },
            {
              q: "Welche Steine, und wo findet es statt?",
              a: "Basaltsteine, erwärmt, zusammen mit ätherischen Ölen. Zu Hause von Gargnano bis San Felice del Benaco oder im Studio in Maderno. Die Adresse klären wir im Chat.",
            },
            {
              q: "Ersetzen die Steine eine Therapie?",
              a: "Nein. Es ist eine Wellness-Massage. Bei Erkrankung oder frischer Operation frag zuerst Ärztin oder Arzt. Wenn du einen Zweifel zur Wärme hast, schreib ihn vor der Buchung.",
            },
          ],
        },
      },
    },
    blogPost: {
      metaTitle: "Massage zu Hause am Gardasee: von Salò bis Gargnano | Melania Massaggi",
      metaDescription:
        "Massage zu Hause am Gardasee, etwa eine halbe Stunde von Toscolano Maderno: Gargnano, Gardone Riviera, Salò und San Felice del Benaco.",
      eyebrow: "Am Gardasee",
      question: "In welchen Orten am Gardasee kann ich eine Massage zu Hause buchen?",
      h1: "Massage zu Hause am Gardasee: von Salò bis Gargnano",
      answer:
        "Ja. Ich komme nach Termin zu dir nach Hause, in den Orten etwa eine halbe Stunde mit dem Auto von Toscolano Maderno: Gargnano, Toscolano Maderno, Gardone Riviera, Salò und San Felice del Benaco. Du kannst dieselben fünf Massagen buchen wie im Studio. Der Preis ist auf Anfrage: ich schreibe ihn dir, unverbindlich. Wenn du knapp außerhalb dieser Gemeinden wohnst, schreib trotzdem: ich sage dir, ob ich an dem Tag kommen kann.",
      sections: [
        {
          h2: "Wohin ich fahre, von Toscolano Maderno",
          body: "Ich starte in Toscolano Maderno, am Brescianer Ufer des Gardasees. Ich fahre, wenn der Weg etwa zwanzig Minuten dauert, höchstens eine halbe Stunde. Das ist der Radius für Hausbesuche, kein Versprechen auf die Minute: die Uferstraße ändert sich im Sommer, und ich sage lieber nein, als gehetzt anzukommen.\n\nIn dieser Runde liegen, von Nord nach Süd, Gargnano, Toscolano Maderno, Gardone Riviera, Salò und San Felice del Benaco. Gardone Riviera liegt zwischen Maderno und Salò. Gargnano ist der erste Ort im Norden, am See. San Felice del Benaco schließt die Liste südlich von Salò.\n\nLimone sul Garda, Manerba del Garda, Moniga, Padenghe und Desenzano del Garda stehen nicht auf der Liste. Die Zeit hängt von der Adresse und vom Verkehr ab: wenn du in einem dieser Orte wohnst, frag mich im Chat, bevor wir die Sitzung planen.\n\nDeine Adresse bleibt im Chat. Sie steht nicht auf der Seite. Wenn du das Studio vorziehst, ist es in Maderno: auch diese Adresse sage ich in der Nachricht, nicht auf der Seite.",
        },
        {
          h2: "So buchst du die Massage zu Hause",
          body: "Der Schritt ist kurz. Schreib mir per WhatsApp oder an moreni.melania66@gmail.com. Nenn mir zwei oder drei mögliche Tage, ob du zu Hause oder im Studio möchtest, und den Ort. Ich antworte selbst mit freien Zeiten und der aktuellen Liste. Es gibt kein Formular.\n\nIch arbeite nur nach Termin und allein: es gibt keine zweite Masseurin und keine Rezeption. Zu Beginn frage ich, wie du dich an dem Tag fühlst, ob eine Stelle ausgespart werden soll und welcher Druck dir guttut. Dann regeln wir das zusammen, auch mitten in der Sitzung.\n\nDas ist kein Arztbesuch und ersetzt keine Physiotherapie. Bei Erkrankung, frischer Operation oder einem Zweifel zu deiner Gesundheit sprich zuerst mit Ärztin oder Arzt. Ich veröffentliche keine Liste von Gegenanzeigen. Wenn es mehr ist als eine einfache Wellness-Massage, sprich vor der Buchung mit Ärztin oder Arzt.\n\nZu Hause bringe ich mit, was die Behandlung braucht. Was ich von dir vorbereitet haben möchte, vom Platz zum Liegen bis zu Tieren in der Wohnung, schreibe ich, wenn wir die Uhrzeit bestätigen. Jede Wohnung ist anders, deshalb sage ich es für deine.",
        },
        {
          h2: "Welche der fünf Massagen du buchen kannst",
          body: "Zu Hause gibt es dieselben fünf Wege wie im Studio in Maderno. Die Dauern stehen auf der jeweiligen Seite, der Preis ist bei allen auf Anfrage.\n\nHot Stones und ätherische Öle, 75 Minuten. Basaltsteine und Öle, langsames Tempo. Das ist der Weg, den ich am häufigsten anbiete. Welche Öle ich in der Zeit verwende und wie ich die Steine bewege, sage ich vor dem Start: ich lege hier kein Protokoll fest, das dann nicht das der Sitzung ist. Wenn du den Namen eines bestimmten Öls suchst, frag mich im Chat.\n\nSarvanga Abhyanga, 60 Minuten. Ölmassage am ganzen Körper, fortlaufende Griffe, ayurvedisch angelegt. Es ist eine Stunde langsamer Kontakt. Ich verspreche keine Wirkung auf den Schlaf oder auf Spannungen, die ich an dem Tag nicht konkret mit dir beschreiben kann.\n\nEntspannungsmassage, 60 Minuten. Mittlerer Druck, wenn du abschalten willst ohne gezielte Arbeit an den strafferen Stellen.\n\nTiefengewebsmassage, 45 Minuten. Gezielter an Rücken, Schultern oder Beinen, immer als Wellness-Massage. Sie nimmt kein Problem weg und behandelt keinen Schmerz: wir arbeiten an dem Spannungsgefühl dieses Tages und hören auf, wenn eine Stelle nicht berührt werden soll.\n\nDetox-Massage, 60 Minuten. Rhythmisch, etwas tiefer. Sie ist keine klassische Lymphdrainage und keine medizinische Lymphbehandlung.\n\nWenn du nicht weißt, welche du wählen sollst, schreib mir zwei Zeilen, wie du dich fühlst. Ich nenne dir einen Weg, unverbindlich. Die vollständigen Seiten sind die Behandlungsseiten: dort liest du, was dich erwartet und wann es nicht passt.",
        },
        {
          h2: "Studio in Maderno oder bei dir zu Hause",
          body: "Dein Zuhause und das Studio in Maderno sind dieselbe Arbeit an zwei Orten. Weg und Raum ändern sich, nicht die Massage. Im Studio gelten dieselben Dauern und derselbe Preis auf Anfrage.\n\nDie Seite zur Massage zu Hause in Maderno erklärt die Buchung und wiederholt die Gebiete. Diese Notiz ist für alle, die Salò, Gardone Riviera oder Gargnano suchen und wissen wollen, ob der Ort bedient wird, bevor sie schreiben.",
        },
      ],
      treatmentsTitle: "Die Behandlungsseiten",
      treatmentsIntro: "Jeder Weg hat eine eigene Seite, mit Dauer, Ort und dem, was dich erwartet. Der Preis ist auch dort auf Anfrage.",
      homeVisitLabel: "Massage zu Hause in Maderno",
      faqTitle: "Fragen",
      faqs: [
        {
          q: "Kommst du nach Salò und nach Gardone Riviera?",
          a: "Ja. Salò und Gardone Riviera stehen auf der Liste, zusammen mit Gargnano, Toscolano Maderno und San Felice del Benaco.",
        },
        {
          q: "Kostet die Anfahrt extra?",
          a: "Den Gesamtbetrag schreibe ich im Chat, Behandlung und Fahrt. Einen Festpreis veröffentliche ich auf der Seite nicht.",
        },
        {
          q: "Geht das, wenn ich noch nie eine Massage hatte?",
          a: "Ja. Ich erkläre den Weg am Anfang und wir regeln den Druck. Wenn du die weichere Wahl willst, starten wir mit der Entspannungsmassage.",
        },
        {
          q: "Ist das eine Therapie?",
          a: "Nein. Es sind Wellness-Massagen. Bei Erkrankung oder frischer Operation sprich zuerst mit Ärztin oder Arzt.",
        },
      ],
    },
    homeVisit: {
      metaTitle: "Massage zu Hause in Maderno | Melania Massaggi",
      metaDescription:
        "Massage zu Hause in Maderno, nach Termin. Hot Stones, Sarvanga, Entspannung, Tiefengewebe und Detox. Preis auf Anfrage.",
      eyebrow: "Zu Hause",
      h1: "Massage zu Hause in Maderno",
      lead: "Ich komme nach Termin zu dir nach Hause. Der Preis bleibt auf Anfrage: ich schicke ihn selbst, unverbindlich.",
      howTitle: "So funktioniert der Hausbesuch",
      howBody:
        "Schreib mir per WhatsApp oder E-Mail die möglichen Tage und ob ich zu dir nach Hause kommen soll. Ort und Uhrzeit klären wir im Chat: die Adresse steht nicht auf der Website.\n\nIch arbeite nur nach Termin, allein, und passe Druck und Tempo an, wie du dich an dem Tag fühlst. Das ist kein Arztbesuch und keine Physiotherapie.",
      treatmentsTitle: "Verfügbare Behandlungen",
      treatmentsIntro:
        "Zu Hause kannst du dieselben fünf Wege buchen wie im Studio. Der Preis ist bei allen auf Anfrage.",
      areasTitle: "Gebiete",
      areasIntro:
        "Etwa eine halbe Stunde mit dem Auto von Toscolano Maderno, am Brescianer Ufer des Gardasees.",
      townHint: "Wähle den Ort. Die WhatsApp-Nachricht nennt ihn.",
      waTown: "Hallo Melania, ich hätte gern eine Massage zu Hause in {town}.",
      areasArticle: "Warum diese Orte, und nicht andere",
      bookTitle: "So buchst du",
      bookBody:
        "WhatsApp ist am schnellsten. Du kannst auch an moreni.melania66@gmail.com schreiben. Ich antworte selbst mit Liste und Terminen.",
      footerLink: "Massage zu Hause",
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
          a: "Hausbesuche in Gargnano, Toscolano Maderno, Gardone Riviera, Salò und San Felice del Benaco, oder im Studio in Maderno. Für Adresse, Zeiten und Termine schreib mir eine Nachricht.",
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
