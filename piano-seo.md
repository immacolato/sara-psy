# Piano SEO Locale – Dott.ssa Sara Trovato, Torino

> Obiettivo: acquisire nuovi pazienti a Torino tramite posizionamento organico su Google (ricerca + Maps).
> Ultimo aggiornamento: aprile 2026

---

## Profilo sito attuale

| Voce | Stato |
|---|---|
| Dominio | ⚠️ `immacolato.github.io/sara-psy` — da sostituire |
| Meta title/description | ✅ Presenti e ottimizzati |
| Schema.org JSON-LD | ✅ Presente ma incompleto |
| Google Analytics GA4 | ✅ Attivo (G-8HLDF6GWQG) |
| sitemap.xml | ❌ Assente |
| robots.txt | ❌ Assente |
| Google Business Profile | ❌ Assente — priorità assoluta |
| Directory mediche | ❌ Nessuna presenza |
| FAQ section | ❌ Assente |
| Blog/contenuti | ❌ Assente |

---

## Fase 1 — Fondamenta tecniche (priorità assoluta)

- [ ] Acquistare dominio personalizzato → `saratrovato.it` o `dottssasaratrovato.it`
- [ ] Configurare redirect 301 da GitHub Pages al nuovo dominio
- [ ] Aggiornare tutti gli URL nel codice: `canonical`, `og:url`, schema.org `url`, GA4
- [ ] Creare `sitemap.xml` (index.html, privacy.html, cookie.html) con `lastmod`, `changefreq`, `priority`
- [ ] Creare `robots.txt` con directive `Sitemap:`
- [ ] Verificare proprietà in Google Search Console e sottomettere sitemap

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

## Fase 3 — Google Business Profile (massimo impatto locale)

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

## Fase 4 — Directory e Citazioni Locali

Il **NAP deve essere identico** su tutte le piattaforme.

| Piattaforma | Priorità | Note |
|---|---|---|
| Miodottore.it | 🔴 Alta | La più usata in Italia per trovare specialisti |
| Doctolib.it | 🔴 Alta | Prenotazioni online + alta visibilità |
| Doctoralia.it | 🟡 Media | Specialisti medici |
| TrovaPsicologo.it | 🟡 Media | Specifica per psicologi |
| Pagine Gialle | 🟡 Media | Citazione locale classica |
| Pagine Bianche | 🟢 Bassa | Citazione aggiuntiva |
| Yelp Italia | 🟢 Bassa | Citazione aggiuntiva |

---

## Fase 5 — Keyword Strategy

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

## Fase 6 — Blog / Content Strategy (lungo termine)

Articoli proposti per intercettare ricerche informazionali e keyword long-tail:

1. "Psicoterapia Cognitiva Costruttivista: cos'è e come funziona" → *psicoterapia cognitiva Torino*
2. "EMDR: cos'è e chi può beneficiarne" → *EMDR Torino*
3. "Come scegliere il proprio psicologo a Torino" → *psicologo Torino*
4. "Attacchi di panico: quando rivolgersi a uno psicologo" → *attacchi panico Torino*
5. "Depressione: come riconoscerla e dove trovare aiuto a Torino" → *depressione psicologo Torino*
6. "Psicosomatica: quando corpo e mente si parlano" → *psicosomatica Torino*
7. "Psicoterapia online: funziona davvero?" → *psicoterapia online*

---

## Ordine di esecuzione (con dipendenze)

```
1. [IMMEDIATO] Acquisto dominio personalizzato ──────────────────────────────┐
2. [IMMEDIATO] Creare Google Business Profile                                │
3. [dipende da 1] Aggiornare URL nel codice (canonical, og, schema, GA4)     │
4. [dipende da 1] Creare sitemap.xml + robots.txt + Google Search Console    │
5. [parallelo 3-4] Miglioramenti on-page (heading, localizzazione, FAQ,      ┘
                   schema potenziato, immagini)
6. [parallelo 5]   Registrazione su directory mediche
7. [dopo 2+6]      Strategia raccolta recensioni Google
8. [lungo termine] Blog / content strategy
```

---

## Verifica risultati

| Strumento | Cosa monitorare | Frequenza |
|---|---|---|
| Google Search Console | Impressioni, CTR, posizione media per keyword target | Mensile |
| Google Business Profile Insights | Visualizzazioni scheda, chiamate, richieste percorso | Mensile |
| GA4 (già attivo) | Sessioni organiche, conversioni form contatto | Mensile |
| Ricerca manuale (da IP Torino) | Posizionamento su "psicologa Torino" e varianti | Trimestrale |

**Target 6 mesi**: top 10 per keyword long-tail + apparizione nel Local Pack di Google Maps per "psicologa Torino centro".

---

## Decisioni aperte

- [ ] **Dominio**: `saratrovato.it` / `dottssasaratrovato.it` / altro?
- [ ] **Ordine degli Psicologi**: verificare se Sara è iscritta OPP Piemonte oltre che OPRS Sicilia
- [ ] **Blog**: sezione nel sito esistente o pagine di servizio separate?
