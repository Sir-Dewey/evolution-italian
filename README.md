# From the Old Country to the American Table

An interactive timeline tracing the evolution of Italian-American cuisine from the peasant kitchens of pre-migration Italy through the Red Sauce Renaissance of the 2010s.

Built for *Street Corner Society* — Professor James Pasto, Boston University.

---

## About

This project explores how Italian food was transformed by the immigrant experience in America — shaped by poverty, war, Prohibition, industrial food production, celebrity chefs, and finally, cultural reclamation. Each era on the timeline is drawn from primary research and annotated sources.

The site covers 13 historical eras:

| Era | Title |
|-----|-------|
| Pre-1880s | Roots in the Motherland |
| 1880s–1900 | The Arrival |
| 1900–1914 | Tenement Kitchens |
| 1914–1920 | War and Shifting Status |
| 1920s–1933 | Prohibition & Glamour |
| 1930s–1940s | Depression Staples |
| 1940–1950 | The GI Influence |
| 1950s | The Pizza Explosion |
| 1960s–1970s | Convenience & Authenticity |
| 1970s–1980s | The New Italian |
| 1980s–1990s | The Celebrity Chef |
| 2000s–2010s | Regional Exploration |
| 2010s–Present | The Red Sauce Renaissance |

---

## Project Structure

```
src/
├── pages/
│   ├── Index.tsx         # Home page: hero, timeline, bibliography
│   └── EraDetail.tsx     # Individual era detail page
├── components/
│   ├── TimelineCurve.tsx  # Animated SVG timeline
│   └── Bibliography.tsx   # Expandable annotated bibliography
└── data/
    ├── eras.ts            # All 13 era entries with full content
    └── bibliography.ts    # 7 annotated sources
```

---

## Running Locally

```bash
npm install
npm run dev
```

---

## Sources

Full annotated bibliography is available at the bottom of the site. Primary sources include works by John Dickie, Harvey Levenstein, Ian Macallen, Nancy Kruse, and others.
