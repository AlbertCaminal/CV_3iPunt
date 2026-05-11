# Informe de Impacto · 3iPunt

One-pager tipo "Portfolio / Informe de Impacto" diseñado para demostrar el ROI de mi perfil técnico en 3iPunt (Grupo 480). El objetivo es comunicar, con datos y proyectos reales, que mi contratación es una **inversión** (no un gasto) gracias a automatización, IA y desarrollo ágil.

## Stack

- **Vite + React 18** — bundler ultrarrápido, JSX puro.
- **Tailwind CSS 3** — diseño rápido, dark mode forzado, paleta personalizada (zinc + azul/cian eléctricos).
- **Framer Motion** — animaciones de scroll, contadores numéricos y hovers.
- **Lucide React** — iconografía minimalista.
- **Inter** vía `@fontsource/inter` (sin dependencia de Google Fonts en runtime).

## Estructura

```text
public/
└── og.png                  # Open Graph image (1200x630)

src/
├── main.jsx                # Punto de entrada
├── App.jsx                 # Layout principal (provider + sticky nav + 7 secciones)
├── index.css               # Tailwind + estilos globales + prefers-reduced-motion
│
├── components/
│   ├── sections/           # Hero · ImpactDashboard · Methodology · ProjectShowcase · Timeline · Stack · ValueProposition
│   └── ui/                 # BentoCard · AnimatedCounter · FadeInUp · SectionHeader · StickyNav
│
├── data/                   # Contenido estructural (metrics, projects, stack, timeline, methodology, contact)
├── i18n/                   # LanguageContext · LanguageToggle · translations (ES + CA)
└── lib/                    # Framer Motion variants compartidas
```

## Funcionalidades clave

- **Toggle ES/CA** persistente (localStorage) y con detección automática por idioma del navegador.
- **Sticky nav** que aparece al hacer scroll con anchors a cada sección + toggle de idioma.
- **Bento cards** con efecto _spotlight_ que sigue al cursor + lift y glow en hover.
- **Contador animado con glow** en el `+800%`.
- **Open Graph + Twitter Card** con imagen 1200x630 lista para compartir en WhatsApp/Slack/LinkedIn.
- **Stack tecnológico** con logos servidos desde [cdn.simpleicons.org](https://cdn.simpleicons.org/) (precolor brand, sin dependencia npm extra).

## Comandos

```bash
npm install   # Instala dependencias
npm run dev   # Servidor de desarrollo en http://localhost:5173
npm run build # Build de producción en /dist
npm run preview # Preview del build
```

## Filosofía de diseño

- **Dark mode only** (`html.dark` + `bg-zinc-950`).
- **Bento Box**: tarjetas con jerarquía visual, la métrica más fuerte (+800%) ocupa más espacio.
- **Datos > narrativa**: cada sección refuerza la tesis "ahorro de horas + escalado sin coste".
- **Accesibilidad**: respeta `prefers-reduced-motion`, focus rings visibles, contraste AA.

## Personalización rápida

- **Todos los textos** (ES + CA) viven en [src/i18n/translations.js](src/i18n/translations.js). Es el único archivo a tocar para cambiar copy.
- **Datos de contacto** (email, LinkedIn, GitHub) en [src/data/contact.js](src/data/contact.js) — ahora mismo tienen valores de **placeholder** que debes sustituir antes de compartir.
- **Stack tecnológico**: añade/quita herramientas en [src/data/stack.js](src/data/stack.js) (usa los slugs de [simpleicons.org](https://simpleicons.org/)).
- **Imagen OG**: reemplaza [public/og.png](public/og.png) por la tuya (1200x630, PNG).
