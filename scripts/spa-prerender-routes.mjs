/**
 * After Vite build, copy index.html into each SPA route folder so Vercel
 * can serve a document at that path (JS then hydrates the client router).
 * Also injects a noscript Italian summary for non-JS crawlers on those shells.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(__dirname, "../dist");
const indexPath = path.join(dist, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("spa-prerender-routes: dist/index.html missing");
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexPath, "utf8");

const routes = [
  {
    route: "/",
    title: "Melania Massaggi | Massaggi professionali a Maderno",
    canonical: "https://www.melaniamassaggi.it/",
    noscript: `<h1>Melania Massaggi — massaggi a Maderno</h1><p>Massaggi su appuntamento: Sarvanga Abhyanga, rilassante, decontratturante, detox, pietre laviche. WhatsApp +39 327 339 0521 · moreni.melania66@gmail.com</p>`,
  },
  {
    route: "/chi-sono",
    title: "Chi sono | Melania Massaggi a Maderno",
    canonical: "https://www.melaniamassaggi.it/chi-sono",
    noscript: `<h1>Chi sono — Melania</h1><p>Massaggiatrice a Maderno. Studio su appuntamento. Contatti: WhatsApp e email.</p>`,
  },
  {
    route: "/trattamenti",
    title: "Trattamenti | Melania Massaggi Maderno",
    canonical: "https://www.melaniamassaggi.it/trattamenti",
    noscript: `<h1>Trattamenti</h1><ul><li>Pietre laviche 75 min</li><li>Sarvanga Abhyanga 60 min</li><li>Rilassante 60 min</li><li>Decontratturante 45 min</li><li>Detox 60 min</li></ul><p>Prezzi su richiesta.</p>`,
  },
  {
    route: "/trattamenti/pietre-laviche",
    title: "Pietre laviche | Melania Massaggi Maderno",
    canonical: "https://www.melaniamassaggi.it/trattamenti/pietre-laviche",
    noscript: `<h1>Pietre laviche e oli essenziali</h1><p>75 minuti. Prezzo su richiesta. Studio a Maderno.</p>`,
  },
  {
    route: "/trattamenti/sarvanga-abhyanga",
    title: "Sarvanga Abhyanga | Melania Massaggi Maderno",
    canonical: "https://www.melaniamassaggi.it/trattamenti/sarvanga-abhyanga",
    noscript: `<h1>Sarvanga Abhyanga</h1><p>60 minuti. Prezzo su richiesta. Studio a Maderno.</p>`,
  },
  {
    route: "/trattamenti/rilassante",
    title: "Massaggio rilassante | Melania Massaggi Maderno",
    canonical: "https://www.melaniamassaggi.it/trattamenti/rilassante",
    noscript: `<h1>Massaggio rilassante</h1><p>60 minuti. Prezzo su richiesta.</p>`,
  },
  {
    route: "/trattamenti/decontratturante",
    title: "Massaggio decontratturante | Melania Massaggi Maderno",
    canonical: "https://www.melaniamassaggi.it/trattamenti/decontratturante",
    noscript: `<h1>Massaggio decontratturante</h1><p>45 minuti. Prezzo su richiesta.</p>`,
  },
  {
    route: "/trattamenti/detox",
    title: "Massaggio detox | Melania Massaggi Maderno",
    canonical: "https://www.melaniamassaggi.it/trattamenti/detox",
    noscript: `<h1>Massaggio detox</h1><p>60 minuti, ritmico e profondo (non linfatico classico). Prezzo su richiesta.</p>`,
  },
  {
    route: "/massaggio-a-domicilio-maderno",
    title: "Massaggio a domicilio a Maderno | Melania Massaggi",
    canonical: "https://www.melaniamassaggi.it/massaggio-a-domicilio-maderno",
    noscript: `<h1>Massaggi a domicilio a Maderno</h1><p>Su appuntamento, a casa tua. Zone servite, entro circa mezz’ora da Toscolano Maderno: Gargnano, Toscolano Maderno, Gardone Riviera, Salò, San Felice del Benaco. Prezzo su richiesta. WhatsApp +39 327 339 0521.</p>`,
  },
  {
    route: "/blog/massaggio-a-domicilio-lago-di-garda",
    title: "Massaggio a domicilio sul lago di Garda: da Salò a Gargnano | Melania Massaggi",
    canonical: "https://www.melaniamassaggi.it/blog/massaggio-a-domicilio-lago-di-garda",
    noscript: `<h1>Massaggio a domicilio sul lago di Garda: da Salò a Gargnano</h1><p>In quali paesi del lago di Garda si può prenotare un massaggio a domicilio? Sì, su appuntamento, entro circa mezz’ora d’auto da Toscolano Maderno: Gargnano, Toscolano Maderno, Gardone Riviera, Salò e San Felice del Benaco. Prezzo su richiesta.</p><h2>Domande frequenti</h2><p>Vieni a Salò e a Gardone Riviera? Sì, sono in elenco.</p><p>Lo spostamento ha un prezzo a parte? Il totale si scrive in chat. Sul sito non c’è una cifra fissa.</p><p>È una terapia? No. Massaggi di benessere.</p>`,
  },
  {
    route: "/domande",
    title: "Domande frequenti | Melania Massaggi",
    canonical: "https://www.melaniamassaggi.it/domande",
    noscript: `<h1>Domande</h1><p>Risposte corte e chiare su prezzi, luogo, durata e cosa aspettarti.</p><h2>01. Quanto costano i massaggi?</h2><p>I prezzi sono su richiesta. Scrivimi su WhatsApp o email e ti mando il listino aggiornato, senza impegno.</p><h2>02. Dove si svolge il trattamento?</h2><p>A domicilio a Gargnano, Toscolano Maderno, Gardone Riviera, Salò e San Felice del Benaco, oppure in studio a Maderno. Per indirizzo, orari e disponibilità scrivimi un messaggio.</p><h2>03. Come prenoto?</h2><p>Il modo più veloce è WhatsApp. Puoi anche scrivere a moreni.melania66@gmail.com. Ricevo solo su appuntamento.</p><h2>04. Quanto durano i trattamenti?</h2><p>Rilassante, Sarvanga Abhyanga e detox: 60 minuti. Decontratturante: 45. Pietre laviche: 75.</p><h2>05. È adatto se non ho mai fatto massaggi?</h2><p>Sì. Ti spiego tutto all’inizio e regoliamo pressione e ritmo insieme. Se hai dubbi su quale scegliere, chiedimi pure.</p><h2>06. Sostituisci fisioterapia o visite mediche?</h2><p>No. Offro massaggi di benessere. Se hai patologie o interventi recenti, parla prima con il tuo medico.</p><h2>07. Parli inglese o tedesco?</h2><p>Il sito è in italiano, inglese e tedesco. Durante il trattamento ci adattiamo: scrivimi nella lingua con cui ti trovi meglio.</p>`,
  },
];

function applyMeta(html, { title, canonical, noscript }) {
  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  if (out.includes('rel="canonical"')) {
    out = out.replace(
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonical}" />`,
    );
  } else {
    out = out.replace("</head>", `  <link rel="canonical" href="${canonical}" />\n  </head>`);
  }
  const noscriptBlock = `<noscript><main style="max-width:40rem;margin:2rem auto;padding:1rem;font-family:system-ui,sans-serif">${noscript}<p><a href="${canonical}">Versione interattiva</a></p></main></noscript>`;
  if (out.includes("</body>")) {
    out = out.replace("</body>", `${noscriptBlock}\n</body>`);
  }
  return out;
}

for (const r of routes) {
  const html = applyMeta(indexHtml, r);
  if (r.route === "/") {
    fs.writeFileSync(indexPath, html);
    continue;
  }
  const dir = path.join(dist, r.route.replace(/^\//, ""));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
  console.log("prerendered", r.route);
}

console.log("spa-prerender-routes: done");
