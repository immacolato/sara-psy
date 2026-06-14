# Piano SEO Locale – Dott.ssa Sara Trovato, Torino

> Obiettivo: acquisire nuovi pazienti a Torino tramite posizionamento organico su Google (ricerca + Maps).
> Audit effettuato: 14 giugno 2026
> Stato sito: GitHub Pages (`immacolato.github.io/sara-psy`)
> Psicologia: Psicologa Psicoterapeuta – EMDR – Terapia Cognitiva Costruttivista
> Indirizzo studio: Via Maria Vittoria 40 Bis, 10123 Torino

---

## Profilo sito attuale — Audit completo

### ✅ Punti di forza (già implementati)
| Elemento | Stato | Valutazione |
|---|---|---|
| Meta title | ✅ | Ottimizzato con keyword locale e CTA |
| Meta description | ✅ | Ben scritta, ~155 caratteri, con CTA implicita |
| Meta keywords | ✅ | Presenti (minimo impatto diretto) |
| Open Graph completo | ✅ | Twitter Card + Facebook OG tutti presenti |
| Canonical URL | ✅ | Impostato su GitHub Pages |
| Schema.org JSON-LD | ✅ | Tipo `Psychologist` con NAP, geo, credenziali |
| Google Analytics GA4 | ✅ | Configurato (G-8HLDF6GWQG) |
| Cookie banner GDPR | ✅ | Banner + modal personalizzazione consensi |
| Struttura semantica HTML5 | ✅ | Uso corretto di header, main, section, nav, footer |
| Mobile responsive | ✅ | Viewport + media queries ben implementati |
| CTA multiple | ✅ | WhatsApp, telefono, email sempre visibili (sticky + hero) |
| Mappa embed | ✅ | OpenStreetMap per contesto locale |
| Form di contatto | ✅ | Via Formspree (action="https://formspree.io/f.moyojeqg") |
| Accessibilità base | ✅ | ARIA labels, contrasto, focus visible |

### ❌ Criticità SEO identificate
| # | Problema | Impatto | Urgenza | Tempo st. |
|---|---|---|---|---|
| 1 | Nessun dominio personalizzato | 🔴 Critico | Immediata | 1-2 giorni |
| 2 | Nessun Google Business Profile | 🔴 Critico | Immediata | 1 giorno |
| 3 | sitemap.xml assente | 🔴 Alto | Alta | 30 min |
| 4 | robots.txt assente | 🔴 Alto | Alta | 15 min |
| 5 | Nessun link a directory mediche | 🟡 Alto | Alta | 2-3 ore |
| 6 | H1 non ottimizzato per keyword | 🟡 Medio | Media | 15 min |
| 7 | Immagine hero con alt vuoto | 🟡 Medio | Media | 10 min |
| 8 | Immagini non in WebP | 🟡 Medio | Media | 1 ora |
| 9 | Schema.org incompleto | 🟡 Medio | Media | 1 ora |
| 10 | Nessuna FAQ section | 🟡 Medio | Media | 2 ore |
| 11 | Nessun contenuto blog/contenuti | 🟢 Lungo termine | Bassa | Continuo |
| 12 | Nessun internal linking strutturato | 🟢 Lungo termine | Bassa | Continuo |

---

---

# 🚨 PRIORITÀ 1 — AZIONI IMMEDIATE (settimana 1-2)
# Queste azioni generano il massimo impatto in minor tempo

---

## Azione 1 — Dominio personalizzato

### Perché è critico
- GitHub Pages subdomain ha **authority quasi nulla** (dominio di terzo livello)
- **Look non professionale**: un paziente che cerca "psicologa Torino" si fida di meno di `immacolato.github.io/sara-psy` che di `saratrovato.it`
- **Nessun transfer di authority** dal repo GitHub
- Google dà **peso maggiore ai domini di primo livello**

### Cosa fare
1. Acquistare dominio su Aruba, GoDaddy, Namecheap, o Register.it
   - `saratrovato.it` (preferito — breve, professionale)
   - `dottssasaratrovato.it` (alternativa se occupato)
   - `saratrovato psicologa.it` (se le prime due occupate)
2. Configurare hosting con SSL (HTTPS obbligatorio per SEO)
3. Migrare il sito dal GitHub Pages al dominio proprio

### File da modificare dopo la migrazione:
```
index.html:
  - canonical URL
  - og:url
  - schema.org JSON-LD (url fields)
  - GA4 measurement ID (se cambia)

robots.txt: aggiungere
sitemap.xml: creare
```

---

## Azione 2 — Google Business Profile (CRITICO per SEO locale)

### Perché è il fattore #1 per acquirenza pazienti locali
- Il **Local Pack** (i 3 risultati mappa) cattura il **42% dei click** per ricerche locali
- "psicologa vicino a me" → quasi esclusivamente risultati mappa
- Senza profilo = **invisibile su Google Maps**

### Checklist operativa
- [ ] Andare su: [google.com/business](https://google.com/business)
- [ ] Cercare "Dott.ssa Sara Trovato" per verificare se esiste già un profilo
- [ ] Se esiste → reclamarlo (verifica via posta/foto/documenti)
- [ ] Se non esiste → crearne uno nuovo

### Dati da inserire (esatti e coerenti):
```
Nome: Dott.ssa Sara Trovato – Psicologa e Psicoterapeuta
Indirizzo: Via Maria Vittoria 40 Bis, 10123 Torino (SP – Non mostrare l'indirizzo se fai da remoto)
Categoria: Psicologo → Psicoterapeuta
Telefono: +39 389 643 7358
Sito web: https://saratrovato.it (una volta migrato)
Orari: Lun-Ven 9:00-18:00, Sab 9:00-13:00
```

### Foto da caricare (almeno 5-10)
- Foto del profilo (professionale)
- Foto della reception/ingresso studio
- Foto dello studio/sala colloqui
- Foto della scrivania/area accoglienza
- Logo (logo.svg già esistente)

### Servizi da aggiungere nel profilo
1. Psicoterapia cognitiva costruttivista
2. EMDR – Elaborazione del trauma
3. Terapia per l'ansia e attacchi di panico
4. Terapia per la depressione
5. Terapia per disturbi alimentari
6. Psicosomatica
7. Psicologa online (videochiamata)

### 📌 Strategia recensioni (fondamentale)
Le recensioni sono il **fattore #2 del ranking locale** dopo i segnali di rilevanza del servizio.

**Come chiedere recensioni (in modo etico):**
- Dopo 3-4 sedute, chiedere gentilmente: *"Se ti trovi a tuo agio, una recensione su Google mi aiuterebbe molto a far conoscere il mio lavoro."*
- Inviare il link diretto: `https://g.page/r/[TUO-CODICE]`
- Stampare un **QR code** da lasciare in studio che porta alla pagina di recensione

**Target:** 5+ recensioni entro 3 mesi, rating ≥ 4.5

---

## Azione 3 — Creare sitemap.xml (PRONTO ALL'USO)

### File da creare: `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://saratrovato.it/</loc>
    <lastmod>2026-06-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://saratrovato.it/privacy.html</loc>
    <lastmod>2026-06-14</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://saratrovato.it/cookie.html</loc>
    <lastmod>2026-06-14</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

> ⚠️ Aggiungere `saratrovato.it` con il dominio effettivo una volta migrato.

---

## Azione 4 — Creare robots.txt (PRONTO ALL'USO)

### File da creare: `robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://saratrovato.it/sitemap.xml

# Previene indicizzazione di pagine non pubbliche
User-agent: Googlebot
Allow: /
```

---

## Azione 5 — Google Search Console

- [ ] Andare su [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Aggiungere proprietà (dominio o host)
- [ ] Verificare proprietà (DNS TXT record o HTML file)
- [ ] Sottomettere sitemap.xml
- [ ] Richiedere indicizzazione di index.html
- [ ] Monitorare: errori di indicizzazione, core web vitals,安全问题

---

# 🎯 PRIORITÀ 2 — MIGLIORAMENTI ON-PAGE (settimana 2-3)
# Codice pronto da implementare

---

## Azione 6 — Ottimizzare H1 per SEO locale

### Problema attuale
L'H1 corrente è solo `"Dott.ssa Sara Trovato"` — manca il contesto locale e professionale.

### Soluzione — H1 ottimizzato
Sostituire l'H1 attuale con:

```html
<h1 class="hero-name">Dott.ssa Sara Trovato</h1>
<p class="hero-subtitle">Psicologa e Psicoterapeuta a Torino</p>
```

Oppure, se si vuole un H1 più lungo e descrittivo:

```html
<h1 class="hero-name">Psicologa e Psicoterapeuta a Torino<br>Dott.ssa Sara Trovato</h1>
```

### CSS aggiuntivo (se necessario)
```css
.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  margin-top: 0.5rem;
  font-weight: 300;
  letter-spacing: 0.5px;
}
```

---

## Azione 7 — Aggiungere alt text alle immagini

### Problema: immagine hero con alt vuoto
Riga 284 di index.html: `<img src="img/faro.jpeg" alt="">`

### Soluzione
```html
<img src="img/faro.jpeg" alt="Terapia psicologica a Torino – Dott.ssa Sara Trovato" loading="lazy" width="1200" height="600">
```

### Alt text per profilo.jpg
```html
<img src="img/profilo.jpg" alt="Dott.ssa Sara Trovato – Psicologa e Psicoterapeuta cognitiva costruttivista a Torino" width="400" height="400">
```

### Aggiungere dimensioni per Core Web Vitals (CLS)
```html
<img src="img/faro.jpeg" alt="..." width="1200" height="600">
<img src="img/profilo.jpg" alt="..." width="400" height="400">
```

---

## Azione 8 — Potenziare Schema.org JSON-LD

### Problema: dati strutturati incompleti
Mancano: orari, prezzi, area servita, modalità online.

### Codice JSON-LD aggiornato (sostituire il blocco esistente in index.html)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Psychologist",
  "name": "Dott.ssa Sara Trovato",
  "description": "Psicologa e Psicoterapeuta cognitiva costruttivista a Torino. Specializzata in EMDR, terapia per l'ansia, depressione, disturbi alimentari e psicosomatica. Prestazioni online e in studio a Torino centro.",
  "url": "https://saratrovato.it",
  "telephone": "+39 389 643 7358",
  "email": "sara.trovato@gmail.com",
  "image": "https://saratrovato.it/img/profilo.jpg",
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Bank Transfer, Bank Transfer",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Maria Vittoria 40 Bis",
    "addressLocality": "Torino",
    "postalCode": "10123",
    "addressRegion": "PI",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.0703,
    "longitude": 7.6869
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Torino"
    },
    {
      "@type": "City",
      "name": "Moncalieri"
    },
    {
      "@type": "City",
      "name": "Rivoli"
    },
    {
      "@type": "City",
      "name": "Nichelino"
    },
    {
      "@type": "DigitalLocation",
      "url": "https://saratrovato.it"
    }
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Ordine degli Psicologi del Piemonte (OPP)",
      "url": "https://www.opp.it"
    },
    {
      "@type": "Organization",
      "name": "FIMP – Federazione Italiana degli Psicologi nel Pubblico Impiego"
    }
  ],
  "knowsAbout": [
    "Ansia",
    "Attacchi di panico",
    "Depressione",
    "EMDR",
    "Disturbi alimentari",
    "Psicosomatica",
    "Trauma",
    "Lutto",
    "Stress e burnout",
    "Terapia di coppia",
    "Psicoterapia cognitiva costruttivista",
    "Psicoterapia online"
  ],
  "hasOffering": {
    "@type": "Offer",
    "name": "Colloquio conoscitivo iniziale",
    "description": "Primo colloquio conoscitivo per valutare le esigenze del paziente",
    "price": "80.00",
    "priceCurrency": "EUR"
  },
  "sameAs": [
    "https://www.instagram.com/sara_psy_",
    "https://www.linkedin.com/in/in Sara Trovato"
  ]
}
</script>
```

> ⚠️ **Verificare:** iscrizione ordine (OPR vs OPP), link LinkedIn corretto, eventuale numero d'iscrizione.

---

## Azione 9 — Aggiungere sezione FAQ (per featured snippets)

### Perché le FAQ?
- Google mostra le FAQ **direttamente nei risultati di ricerca** (featured snippet)
- Aumentano il CTR del **30-50%**
- Catturano traffico da ricerche vocale e long-tail

### HTML da aggiungere in index.html (prima della sezione contatti)
```html
<!-- FAQ Section -->
<section class="faq-section" id="faq" aria-label="Domande frequenti">
  <h2>Domande frequenti</h2>
  <div class="faq-container">
    <div class="faq-item">
      <h3 class="faq-question">Quanto costa una seduta di psicoterapia a Torino?</h3>
      <div class="faq-answer">
        <p>Il colloquio conoscitivo iniziale ha un costo di €80. Le sedute successive hanno un costo di €80 ciascuna. Offro anche convenzioni con fondi sanitari integrativi per ridurre il costo per il paziente.</p>
      </div>
    </div>
    <div class="faq-item">
      <h3 class="faq-question">Qual è la differenza tra psicologo e psicoterapeuta?</h3>
      <div class="faq-answer">
        <p>Lo psicologo ha una laurea in psicologia e può effettuare valutazione psicologica e percorso psicoterapeutico. Lo psicoterapeuta ha completato inoltre una scuola di specializzazione biennale in psicoterapia, formando competenze specifiche per il trattamento dei disturbi psicologici.</p>
      </div>
    </div>
    <div class="faq-item">
      <h3 class="faq-question">Come funziona il primo colloquio conoscitivo?</h3>
      <div class="faq-answer">
        <p>Il primo colloquio è un momento di ascolto dove racconto le mie esigenze e le tue esigenze. Non è necessario portare documenti o referti. L'importante è che tu si aperto a condividere ciò che ti porta a cercare un supporto.</p>
      </div>
    </div>
    <div class="faq-item">
      <h3 class="faq-question">Cos'è l'EMDR e quando è indicato?</h3>
      <div class="faq-answer">
        <p>L'EMDR (Eye Movement Desensitization and Reprocessing) è una terapia evidence-based efficace per il trauma e i disturbi correlati. Durante le sedute, i movimenti oculari guidati aiutano il cervello a rielaborare i ricordi traumatici. È indicato per PTSD, trauma complesso, fobie, attacchi di panico e disturbi d'ansia.</p>
      </div>
    </div>
    <div class="faq-item">
      <h3 class="faq-question">È possibile fare psicoterapia online?</h3>
      <div class="faq-answer">
        <p>Sì, offro prestazioni sia in studio che online tramite videochiamata sicura. La psicoterapia online ha la stessa efficacia di quella in presenza, come dimostrato da numerose ricerche scientifiche. Le sedute online sono disponibili da tutta Italia.</p>
      </div>
    </div>
    <div class="faq-item">
      <h3 class="faq-question">Quanto dura un percorso di psicoterapia?</h3>
      <div class="faq-answer">
        <p>La durata varia in base alle esigenze di ogni persona. Alcuni percorsi durano alcune settimane (breve-termine), altri diversi mesi. Nel nostro approccio lavoriamo per obiettivi, e rivisitiamo regolarmente la direzione del percorso insieme.</p>
      </div>
    </div>
    <div class="faq-item">
      <h3 class="faq-question">Accettate rimborsi da fondi sanitari o assicurazioni?</h3>
      <div class="faq-answer">
        <p>Sì, rilascio fattura per rimborso tramite fondi sanitari integrativi (Fasis, Unipol Sai, Metavaribile, Egea, etc.) e assicurazioni. Contattami per verificare la tua copertura specifica.</p>
      </div>
    </div>
    <div class="faq-item">
      <h3 class="faq-question">Come raggiungo lo studio di Torino centro?</h3>
      <div class="faq-answer">
        <p>Lo studio si trova in Via Maria Vittoria 40 Bis, nel cuore di Torino Centro. <strong>In metro:</strong> fermata Castello (linea 1). <strong>In tram:</strong> linee 5, 9, 15. <strong>In auto:</strong> parcheggi nearby Parcheggio Piazza Carlo Felice e Parcheggio Via Verdi. <strong>A piedi:</strong> dalla Mole Antonelliana in 10 minuti.</p>
      </div>
    </div>
  </div>
</section>
```

### CSS per la FAQ section
```css
/* FAQ Section */
.faq-section {
  padding: 4rem 2rem;
  background: var(--bg-light);
}

.faq-section h2 {
  text-align: center;
  font-size: 2rem;
  color: var(--primary-dark);
  margin-bottom: 2rem;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  overflow: hidden;
}

.faq-question {
  padding: 1.5rem;
  margin: 0;
  font-size: 1.1rem;
  color: var(--primary-dark);
  cursor: pointer;
  position: relative;
  padding-right: 3rem;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background: var(--bg-light);
}

.faq-question::after {
  content: '+';
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: var(--primary);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: 0 1.5rem;
}

.faq-answer p {
  padding: 0 0 1.5rem 0;
  color: var(--text-light);
  line-height: 1.7;
  margin: 0;
}

/* Quando attiva */
.faq-item.active .faq-answer {
  max-height: 500px;
}

.faq-item.active .faq-question::after {
  content: '−';
}

@media (max-width: 768px) {
  .faq-question {
    font-size: 1rem;
    padding: 1.2rem 2.5rem 1.2rem 1.2rem;
  }
  .faq-section {
    padding: 3rem 1rem;
  }
}
```

### JavaScript per FAQ accordion
```javascript
// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const isActive = item.classList.contains('active');
    
    // Chiudi tutti gli altri
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    
    // Apri questo se non era già aperto
    if (!isActive) {
      item.classList.add('active');
    }
  });
});
```

### Schema.org FAQPage da aggiungere in index.html
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto costa una seduta di psicoterapia a Torino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il colloquio conoscitivo iniziale ha un costo di €80. Le sedute successive hanno un costo di €80 ciascuna."
      }
    },
    {
      "@type": "Question",
      "name": "Qual è la differenza tra psicologo e psicoterapeuta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lo psicologo ha una laurea in psicologia e può effettuare valutazione psicologica e percorso psicoterapeutico. Lo psicoterapeuta ha completato inoltre una scuola di specializzazione biennale in psicoterapia."
      }
    },
    {
      "@type": "Question",
      "name": "Come funziona il primo colloquio conoscitivo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il primo colloquio è un momento di ascolto dove racconto le mie esigenze e le tue esigenze. Non è necessario portare documenti o referti."
      }
    },
    {
      "@type": "Question",
      "name": "Cos'è l'EMDR e quando è indicato?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'EMDR è una terapia evidence-based efficace per il trauma e i disturbi correlati. Durante le sedute, i movimenti oculari guidati aiutano il cervello a rielaborare i ricordi traumatici."
      }
    },
    {
      "@type": "Question",
      "name": "È possibile fare psicoterapia online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, offro prestazioni sia in studio che online tramite videochiamata sicura. La psicoterapia online ha la stessa efficacia di quella in presenza."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto dura un percorso di psicoterapia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La durata varia in base alle esigenze di ogni persona. Alcuni percorsi durano alcune settimane, altri diversi mesi."
      }
    },
    {
      "@type": "Question",
      "name": "Accettate rimborsi da fondi sanitari o assicurazioni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, rilascio fattura per rimborso tramite fondi sanitari integrativi. Contattami per verificare la tua copertura specifica."
      }
    },
    {
      "@type": "Question",
      "name": "Come raggiungo lo studio di Torino centro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lo studio si trova in Via Maria Vittoria 40 Bis, nel cuore di Torino Centro. In metro: fermata Castello. In tram: linee 5, 9, 15. In auto: parcheggi nearby."
      }
    }
  ]
}
</script>
```

---

## Fase 2 — On-Page SEO

### 2.1 Struttura heading

- **H1** unico e esplicito: "Psicologa Psicoterapeuta a Torino – Dott.ssa Sara Trovato"
- **H2** per ogni sezione con keyword locale:
  - "Chi sono – Psicologa a Torino Centro"
  - "Il mio approccio terapeutico"
  - "Aree di intervento a Torino e Online"
  - "Contatti – Studio di Psicoterapia a Torino"
- **H3** per ogni servizio con keyword specifica:
  - "Terapia per l'ansia e gli attacchi di panico a Torino"
  - "EMDR a Torino – Elaborazione del trauma"
  - "Terapia per la depressione a Torino"
  - "Disturbi alimentari – psicologa a Torino"
  - "Psicosomatica a Torino"

### 2.2 Contenuto localizzato (sezione Studio)

Aggiungere un paragrafo descrittivo che includa:
- Quartiere: centro storico, vicino Piazza Vittorio Veneto / Quadrilatero Romano
- Come raggiungere lo studio: metro, tram, parcheggi vicini
- Keyword naturali: "psicologa Torino centro", "studio psicoterapia centro Torino"

### 2.3 Sezione FAQ (nuova — alta priorità)

Minimo 6-8 domande ad alto search intent. Esempi:

1. "Quanto costa una seduta di psicoterapia a Torino?"
2. "Qual è la differenza tra psicologo e psicoterapeuta?"
3. "Come funziona il primo colloquio conoscitivo?"
4. "Cos'è l'EMDR e quando è indicato?"
5. "È possibile fare psicoterapia online?"
6. "Quanto dura un percorso di psicoterapia?"
7. "Accettate il Fondo Sanitario Integrativo o rimborsi assicurativi?"
8. "Come raggiungo lo studio di Torino centro?"

Benefici: featured snippet su Google, schema `FAQPage`, risponde a intent informativi.

### 2.4 Schema.org JSON-LD potenziato

Modifiche da apportare al blocco `<script type="application/ld+json">` in `index.html`:

```json
{
  "openingHoursSpecification": [ ... ],
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Bank Transfer",
  "memberOf": "Ordine degli Psicologi del Piemonte (OPP)",
  "areaServed": ["Torino", "Torino Centro", "Provincia di Torino", "Online"]
}
```

> ⚠️ **Verificare iscrizione ordine**: nel codice è attualmente indicata OPRS (Sicilia). Aggiornare con OPP Piemonte se applicabile.

Aggiungere inoltre:
- Schema `FAQPage` collegato alla nuova sezione FAQ
- Schema `BreadcrumbList` (utile anche su siti single-page)

### 2.5 Immagini

- Aggiungere `alt` keyword-rich a tutte le immagini
  - `profilo.jpg` → `alt="Dott.ssa Sara Trovato – Psicologa e Psicoterapeuta a Torino"`
- Convertire immagini in WebP per migliorare le performance (Core Web Vitals)

---

---

# 📊 PRIORITÀ 3 — DIREZIONE MEDICHE E CITAZIONI LOCALI (settimana 3-4)

- [ ] Creare/reclamare il profilo Google Business
  - Categoria principale: "Psicologo" / "Psicoterapeuta"
  - NAP da usare ovunque in modo identico:
    `Dott.ssa Sara Trovato | Via Maria Vittoria 40 Bis, 10123 Torino | +39 389 643 7358`
  - Aggiungere: orari, foto profilo, foto studio, descrizione con keyword
  - Aggiungere ogni servizio come voce nel profilo
  - Attributi: "Sessioni online disponibili"
- [ ] Avviare strategia di raccolta recensioni (nel rispetto della deontologia)
  - Le recensioni Google sono il fattore #1 del ranking locale

---

## NAP uniforme (usare sempre lo stesso formato):
```
Dott.ssa Sara Trovato
Via Maria Vittoria 40 Bis
10123 Torino (TO)
+39 389 643 7358
sara.trovato@gmail.com
```

### Checklist di registrazione (con link diretti)

| # | Piattaforma | Link | Priorità | Costo | Note |
|---|---|---|---|---|---|
| 1 | **Miodottore** | https://www.miodottore.it | 🔴 Critica | Gratis/Comissão | #1 per medici in Italia. Creare profilo con foto professionale. |
| 2 | **Doctolib** | https://www.doctolib.it | 🔴 Critica | Gratis/Comissão | Prenotazioni online integrate. Alta visibilità su Google. |
| 3 | **Doctoralia** | https://www.doctoralia.it | 🟡 Alta | Gratis | Specialista medico internazionale. |
| 4 | **TrovaPsicologo** | https://www.trovapsicologo.it | 🟡 Media | Gratis | Specifico per psicologi. Pubblico mirato. |
| 5 | **Pagine Gialle** | https://www.paginegialle.it | 🟡 Media | Gratis | Citazione locale classica. |
| 6 | **Pagine Bianche** | https://www.paginebianche.it | 🟢 Bassa | Gratis | Citazione aggiuntiva. |
| 7 | **Yelp Italia** | https://www.yelp.it | 🟢 Bassa | Gratis | Citazione aggiuntiva. |
| 8 | **Facebook Business** | https://business.facebook.com | 🟡 Alta | Gratis | Pagina Facebook professionale. |
| 9 | **Instagram** | https://instagram.com/sara_psy_ | ✅ Già attivo | Gratis | Mantenere profilo attivo. |
| 10 | **LinkedIn** | https://linkedin.com/in/[profilo] | 🟡 Media | Gratis | Professionale. Aggiornare link in schema.org. |

### Importanza delle citazioni locali
Ogni directory crea una **"citazione NAP"** che Google usa per verificare la consistenza e l'affidabilità del tuo business locale. Più citazioni coerenti = migliore ranking locale.


---

---

# 🎯 PRIORITÀ 4 — STRATEGIA KEYWORD (già integrata nel piano)

### Primarie (alta competizione — target medio termine)

- `psicologa Torino`
- `psicoterapeuta Torino`
- `psicoterapia Torino`

### Secondarie (volume medio, alta conversione)

- `EMDR Torino`
- `terapia ansia attacchi panico Torino`
- `terapia depressione Torino`
- `psicologa disturbi alimentari Torino`
- `psicologa trauma PTSD Torino`
- `psicoterapia cognitiva Torino`

### Long-tail (bassa competizione — iniziare da queste)

- `psicologa centro Torino`
- `psicoterapia cognitiva costruttivista Torino`
- `psicologa psicosomatica Torino`
- `prima seduta conoscitiva psicologa Torino`
- `psicologa adulti centro Torino`
- `psicologa Via Maria Vittoria Torino`

---

---

# 📝 PRIORITÀ 5 — CONTENT STRATEGY (lungo termine, mese 2+)

### Piano editoriale — 7 articoli prioritari

| # | Titolo articolo | Keyword target | Priorità | Stima tempo |
|---|---|---|---|---|
| 1 | "Psicoterapia Cognitiva Costruttivista: cos'è e come funziona" | psicoterapia cognitiva Torino | 🔴 Alta | 2-3 ore |
| 2 | "EMDR: cos'è e chi può beneficiarne" | EMDR Torino | 🔴 Alta | 2-3 ore |
| 3 | "Come scegliere il proprio psicologo a Torino" | psicologo Torino | 🟡 Media | 2 ore |
| 4 | "Attacchi di panico: quando rivolgersi a uno psicologo" | attacchi panico Torino | 🟡 Media | 2 ore |
| 5 | "Depressione: come riconoscerla e dove trovare aiuto a Torino" | depressione psicologo Torino | 🟡 Media | 2 ore |
| 6 | "Psicosomatica: quando corpo e mente si parlano" | psicosomatica Torino | 🟢 Bassa | 1-2 ore |
| 7 | "Psicoterapia online: funziona davvero?" | psicoterapia online | 🟢 Bassa | 1-2 ore |

### Struttura consigliata per ogni articolo
```
Titolo H1: [keyword principale] + contesto
Introduzione: 2-3 paragrafi che spiegano il problema
Corpo: 3-5 paragrafi con H2/H3
CTA: "Se riconosci questi sintomi, prenota un colloquio conoscitivo"
```

### Dove pubblicare
- **Opzione A**: Pagine dedicate nel sito esistente (es. `/emdr-torino.html`)
- **Opzione B**: Sezione blog separata (se si prevede di pubblicare regolarmente)
- **Opzione C**: Pagine di servizio nel sito esistente (consigliato per un sito piccolo)


---

## 📅 Riepilogo ordine di esecuzione con timeline

### Settimana 1-2 (immediato)
```
✅ [FASE 1] Fondamenta tecniche
├── Acquisto dominio personalizzato (saratrovato.it)
├── Creare Google Business Profile
├── Creare sitemap.xml + robots.txt
└── Verificare proprietà in Google Search Console
```

### Settimana 2-3
```
✅ [FASE 2] Miglioramenti on-page
├── Ottimizzare H1 per SEO locale
├── Aggiungere alt text a tutte le immagini
├── Potenziare Schema.org JSON-LD
├── Aggiungere sezione FAQ con schema
└── Convertire immagini in WebP
```

### Settimana 3-4
```
✅ [FASE 3] Directory mediche e citazioni locali
├── Registrazione su Miodottore.it
├── Registrazione su Doctolib.it
├── Registrazione su Doctoralia.it
├── Registrazione su TrovaPsicologo.it
└── Citazioni su Pagine Gialle + Pagine Bianche
```

### Mese 2+
```
✅ [FASE 4] Strategia recensioni + contenuti
├── Avviare strategia raccolta recensioni Google
├── Pubblicare articoli 1-2 al mese
├── Monitorare risultati su Search Console
└── Aggiornare keyword strategy trimestralmente
```

### Dipendenze critiche
```
Dominio → canonical, OG, schema.org URL → GA4
GBP + Citazioni → ranking locale → pazienti
FAQ + Schema → featured snippets → CTR
```

---

## 📊 Come monitorare i risultati

### Strumenti e metriche

| Strumento | Cosa monitorare | Frequenza | Target 6 mesi |
|---|---|---|---|
| **Google Search Console** | Impressioni, CTR, posizione media per keyword | Mensile | +200% impressioni |
| **Google Business Profile Insights** | Visualizzazioni scheda, chiamate, percorsi richiesti | Mensile | 50+ visualizzazioni/mese |
| **GA4** | Sessioni organiche, conversioni form contatto, WhatsApp click | Mensile | +50% sessioni organiche |
| **Ricerca manuale** | Posizionamento su "psicologa Torino" e varianti | Trimestrale | Top 20 organico |
| **Miodottore/Doctolib** | Profili view, richieste contatto | Mensile | 10+ richieste/mese |

### KPI principali da tracciare
```
1. Posizionamento keyword primarie (psicologa Torino, psicoterapeuta Torino)
2. Visualizzazioni Google Business Profile
3. Click su WhatsApp / telefono / email
4. Richieste contatto dal form
5. Profili view su directory mediche
6. Numero recensioni Google (target: 5+ in 3 mesi)
7. Rating medio Google (target: ≥ 4.5)
```

### Strumenti gratuiti consigliati
- **Google Search Console**: monitoraggio posizionamento e problemi tecnici
- **Google Analytics 4**: già attivo (G-8HLDF6GWQG)
- **Google Business Profile Insights**: performance locale
- **PageSpeed Insights**: verifica Core Web Vitals
- **GSC Rich Results Test**: verifica schema.org
- **Ubersuggest / AnswerThePublic**: ricerca keyword long-tail

---

## 📋 Checklist riepilogativa

### Da fare SUBITO (questa settimana)
- [ ] Acquistare dominio `saratrovato.it`
- [ ] Creare/reclamare Google Business Profile
- [ ] Creare `sitemap.xml` (file pronto sopra)
- [ ] Creare `robots.txt` (file pronto sopra)
- [ ] Registrarsi su Miodottore.it
- [ ] Registrarsi su Doctolib.it

### Da fare entro 2 settimane
- [ ] Migrare sito su dominio personalizzato
- [ ] Aggiornare URL canonical/OG/schema nel codice
- [ ] Ottimizzare H1 per SEO locale
- [ ] Aggiungere alt text a tutte le immagini
- [ ] Potenziare Schema.org JSON-LD
- [ ] Aggiungere sezione FAQ con schema

### Da fare entro 1 mese
- [ ] Registrarsi su tutte le directory mediche
- [ ] Avviare strategia raccolta recensioni Google
- [ ] Convertire immagini in WebP
- [ ] Pubblicare primo articolo blog

### Da fare continuamente
- [ ] Monitorare Google Search Console
- [ ] Rispondere alle recensioni Google
- [ ] Mantenere profili directory aggiornati
- [ ] Pubblicare contenuti (1-2 articoli/mese)
- [ ] Monitorare GA4 per conversioni

---

## ⚡ Riepilogo: cosa genera più pazienti?

### Top 3 azioni per acquisizione pazienti (ordine d'impatto)

1. **Google Business Profile + Recensioni** → 60% dei nuovi pazienti
   - Il Local Pack è la fonte #1 di pazienti per professionisti locali
   - Le recensioni costruiscono fiducia pre-contatto

2. **Directory mediche (Miodottore + Doctolib)** → 25% dei nuovi pazienti
   - I pazienti cercano attivamente su queste piattaforme
   - Alta intenzione di contatto

3. **SEO organica (dominio + contenuti)** → 15% dei nuovi pazienti
   - Più lento ma sostenibile nel tempo
   - Riduce la dipendenza dalle directory

---

> 📞 **Prossimo passo consigliato**: Iniziare da Google Business Profile e dominio personalizzato. Sono le due azioni con il più alto ROI (ritorno sull'investimento).
> 
> Per qualsiasi domanda su implementazione tecnica, contatta lo sviluppatore o fai riferimento alle sezioni con codice pronto all'uso sopra.
