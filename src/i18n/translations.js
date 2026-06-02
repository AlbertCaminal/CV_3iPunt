export const translations = {
  es: {
    lang: { code: 'es', label: 'ES', other: 'CA', otherLabel: 'Català' },
    nav: {
      brand: 'Albert Caminal',
      impact: 'Impacto',
      methodology: 'Metodología',
      projects: 'Proyectos',
      timeline: 'Trayectoria',
      stack: 'Stack',
      contact: 'Contacto',
    },
    hero: {
      tagline: 'Desarrollador Full Stack · IA aplicada y automatización',
      titleLine1: 'De procesos manuales',
      titleHighlight: 'a resultados en días.',
      subtitle:
        'Maximizando la rentabilidad de las empresas mediante IA, automatización y desarrollo ágil. Ahorrando horas de trabajo para escalar los beneficios.',
      cta: 'Contactar',
    },
    impact: {
      eyebrow: 'Impact Dashboard',
      titleStart: 'Resultados que se',
      titleHighlight: 'miden en horas',
      titleEnd: 'y euros.',
      description:
        'Cada métrica representa tiempo recuperado para el equipo y capacidad real para absorber más clientes sin escalar costes.',
      metrics: {
        wp: {
          label: 'Eficiencia en WordPress',
          description:
            'Reducción del tiempo de maquetación de 2 días a 2 horas gracias a flujos optimizados con IA.',
        },
        mgmt: {
          label: 'Tiempo de entrega',
          beforeLabel: 'Pendiente',
          afterLabel: 'Resuelto en',
          before: '6 meses sin solución',
          after: '1 semana, con tutorial',
          description:
            'Pongo en producción en días lo que llevaba meses pendiente. Ejemplo concreto: el sistema centralizado de firmas con tracking en Google Analytics, validado e implantado en entorno real de producción.',
          staticValue: '1 semana',
        },
        sig: {
          label: 'Despliegue de Firmas',
          beforeLabel: 'Antes',
          afterLabel: 'Ahora',
          before: '15–30 min por empleado',
          after: '5 min para toda la empresa',
          description:
            'Antes: 15–30 min por empleado. Ahora: 5 min para toda la empresa.',
          staticValue: '5 min',
        },
        moodle: {
          label: 'Generador de contenidos LM',
          beforeLabel: 'Antes',
          afterLabel: 'Ahora',
          before: '2 semanas de producción manual',
          after: '2 días con herramienta externa',
          description:
            'Automatización de la creación de contenidos en Moodle. De dos semanas de trabajo a dos días, con el mismo estándar de calidad.',
          staticValue: '2 días',
        },
      },
    },
    methodology: {
      eyebrow: 'Metodología',
      titleStart: 'Un',
      titleHighlight: 'método reproducible,',
      titleEnd: 'no suerte.',
      description:
        'Cada solución que entrego sigue el mismo proceso. Por eso puedo aplicarlo a problemas nuevos sin fricción.',
      steps: {
        detect: {
          title: 'Detectar',
          description:
            'Identifico procesos manuales repetitivos donde se están perdiendo horas (o semanas) cada mes.',
        },
        automate: {
          title: 'Automatizar',
          description:
            'Diseño la solución (script, IA, integración) con el mínimo esfuerzo de mantenimiento y sin atar al equipo a una sola persona.',
        },
        scale: {
          title: 'Escalar',
          description:
            'Documento, centralizo y dejo el sistema listo para que toda la empresa lo use sin fricción.',
        },
      },
    },
    projects: {
      eyebrow: 'Showcase',
      titleStart: 'Proyectos reales,',
      titleHighlight: 'impacto reciente.',
      description:
        'Una selección de iniciativas desarrolladas en entornos reales. Todas en producción o validadas internamente.',
      items: {
        moodle: {
          title: 'Generador de contenidos LM',
          description:
            'Herramienta externa que automatiza la creación y estructuración de contenidos en Moodle. Un proceso que antes requería dos semanas de trabajo manual ahora se completa en dos días, manteniendo el control de calidad y la revisión del equipo.',
          badge: 'Proyecto más reciente',
        },
        signatures: {
          title: 'Sistema Centralizado de Firmas',
          description:
            'Centralicé el cambio de firma del correo de toda la empresa. Antes cada empleado lo hacía manualmente (15–30 min cada uno, y muchos se equivocaban). Ahora un solo script actualiza a toda la plantilla en 5 minutos. Añadí tracking de clics en cada imagen y URL con Google Analytics — requisito que llevaba 6 meses pendiente, resuelto e implantado en 1 semana, con tutorial incluido. El éxito del sistema propició que la dirección del grupo empresarial solicitara una presentación interna para replicar el modelo en otros departamentos.',
          badge: 'Validado en producción',
        },
        wordpressAI: {
          title: 'Maquetación WordPress con IA',
          description:
            'Gracias al entrenamiento del equipo y a la integración de IA en mi flujo de trabajo, paso de 2 días a 2 horas por maquetación. +800% de eficiencia en uno de los procesos con más volumen de la empresa.',
          badge: '+800% eficiencia',
        },
        landings: {
          title: 'Generador Dinámico de Landings',
          description:
            'Herramienta interna en el servidor para crear landings de cliente sin repetir el setup cada vez. En medio día estaba funcionando, ahorrando 30–60 min por cada landing nueva y centralizando los recursos.',
          badge: 'Medio día de desarrollo',
        },
        healthApp: {
          title: 'Health App Corporativa',
          description:
            'App social gamificada para incentivar la actividad física del equipo como vía a mayor rendimiento y menor absentismo. Construida a coste cero. Lista para producción, pendiente de afinar detalles antes de desplegar.',
          badge: 'Coste cero',
        },
      },
    },
    timeline: {
      eyebrow: 'Trayectoria',
      titleStart: '7 meses,',
      titleHighlight: 'curva de impacto.',
      description:
        'Cronología de impacto: 7 meses de resultados reales en mi última etapa.',
      events: {
        onboarding: {
          month: 'Mes 1–2',
          title: 'Onboarding técnico',
          description:
            'Inmersión en el stack interno (WordPress, scripts del servidor) y mapeo de los procesos manuales más costosos de la empresa.',
        },
        signatures: {
          month: 'Mes 3',
          title: 'Sistema de firmas',
          description:
            'Resolución en 1 semana de un requisito que llevaba 6 meses pendiente. Validado e integrado con éxito a nivel corporativo, con Google Analytics.',
        },
        healthApp: {
          month: 'Mes 4',
          title: 'Health App corporativa',
          description:
            'App social gamificada a coste cero. Mayor salud física = mayor rendimiento y menor absentismo.',
        },
        wordpressAI: {
          month: 'Mes 5',
          title: 'Maquetación WordPress con IA',
          description:
            'Flujos optimizados con IA: de 2 días a 2 horas por maquetación (+800% eficiencia).',
        },
        landings: {
          month: 'Mes 6',
          title: 'Generador dinámico de landings',
          description:
            'Herramienta interna en el servidor para crear landings de clientes en minutos, centralizando recursos y ahorrando coste directo de desarrollo.',
        },
        moodle: {
          month: 'Mes 7',
          title: 'Generador de contenidos LM',
          description:
            'Herramienta externa para contenidos en Moodle: de 2 semanas de producción manual a 2 días por ciclo, con revisión y calidad controladas.',
        },
      },
    },
    stack: {
      eyebrow: 'Stack',
      titleStart: 'Polivalencia técnica,',
      titleHighlight: 'foco en resultado.',
      description:
        'Las herramientas son el medio. El objetivo es siempre el mismo: menos horas manuales, más capacidad.',
    },
    value: {
      eyebrow: 'Propuesta de Valor',
      titleStart: '¿Por qué',
      titleHighlight: 'invertir en mi perfil?',
      body: 'Mi objetivo desde el primer día es demostrar que contratarme tiene un retorno medible. Mi experiencia en entornos reales demuestra que traduzco el desarrollo y la IA en horas ahorradas, costes evitados y eficiencia operativa. Busco un nuevo reto profesional donde seguir detectando procesos ineficientes y resolverlos con tecnología, escalando el rendimiento del equipo sin multiplicar los costes.',
      chips: [
        { label: 'Velocidad', value: 'Días, no meses' },
        { label: 'Coste operativo', value: 'No escala' },
        { label: 'Impacto', value: 'Corporativo' },
      ],
      contactTitle: 'Hablemos',
      contactSubtitle:
        '¿Buscas un perfil que convierta procesos manuales en resultados medibles? Esta es la forma más rápida de contactar.',
      ctaEmail: 'Enviar email',
      ctaLinkedin: 'Conectar en LinkedIn',
      ctaGithub: 'Ver GitHub',
      signedAs: 'Firmado',
      role: 'Desarrollador Full Stack · IA aplicada y automatización',
      backTop: 'Volver arriba',
      footer: 'Albert Caminal · Full Stack Developer & AI Automation Specialist',
      mailSubject: 'Hablemos · Portfolio de impacto',
    },
    pdf: {
      cta: 'Descargar resumen (PDF)',
      generating: 'Generando PDF…',
      filename: 'Albert-Caminal-Resumen',
      portfolioLabel: 'Portfolio completo',
      portfolioUrl: 'https://albert-caminal.vercel.app',
      sections: {
        impact: 'Impacto medible',
        projects: 'Proyectos clave',
        timeline: 'Trayectoria (7 meses)',
        method: 'Metodología',
        stack: 'Stack principal',
        contact: 'Contacto',
      },
      metrics: [
        'WordPress: +800% (2 días → 2 h por maquetación)',
        'Entrega: requisito 6 meses pendiente → 1 semana en producción',
        'Firmas email: 15–30 min/empleado → 5 min toda la empresa',
        'Moodle LM: 2 semanas de producción → 2 días',
      ],
      projects: [
        'Generador de contenidos LM (Moodle)',
        'Sistema centralizado de firmas + Google Analytics',
        'Maquetación WordPress con IA',
        'Generador dinámico de landings',
        'Health App corporativa (MVP, coste cero)',
      ],
      methodSteps: ['Detectar procesos manuales', 'Automatizar con IA/scripts', 'Escalar y documentar'],
    },
    a11y: {
      languageToggle: 'Cambiar idioma',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      languageChanged: 'Idioma cambiado a Español',
    },
  },
  ca: {
    lang: { code: 'ca', label: 'CA', other: 'ES', otherLabel: 'Español' },
    nav: {
      brand: 'Albert Caminal',
      impact: 'Impacte',
      methodology: 'Metodologia',
      projects: 'Projectes',
      timeline: 'Trajectòria',
      stack: 'Stack',
      contact: 'Contacte',
    },
    hero: {
      tagline: 'Desenvolupador Full Stack · IA aplicada i automatització',
      titleLine1: 'De processos manuals',
      titleHighlight: 'a resultats en dies.',
      subtitle:
        "Maximitzant la rendibilitat de les empreses mitjançant IA, automatització i desenvolupament àgil. Estalviant hores de treball per escalar els beneficis.",
      cta: 'Contactar',
    },
    impact: {
      eyebrow: "Panell d'Impacte",
      titleStart: 'Resultats que es',
      titleHighlight: 'mesuren en hores',
      titleEnd: 'i euros.',
      description:
        "Cada mètrica representa temps recuperat per a l'equip i capacitat real per absorbir més clients sense escalar costos.",
      metrics: {
        wp: {
          label: 'Eficiència a WordPress',
          description:
            'Reducció del temps de maquetació de 2 dies a 2 hores gràcies a fluxos optimitzats amb IA.',
        },
        mgmt: {
          label: 'Temps de lliurament',
          beforeLabel: 'Pendent',
          afterLabel: 'Resolt en',
          before: '6 mesos sense solució',
          after: '1 setmana, amb tutorial',
          description:
            "Poso en producció en dies el que portava mesos pendent. Exemple concret: el sistema centralitzat de signatures amb tracking a Google Analytics, validat i implantat en entorn real de producció.",
          staticValue: '1 setmana',
        },
        sig: {
          label: 'Desplegament de Signatures',
          beforeLabel: 'Abans',
          afterLabel: 'Ara',
          before: '15–30 min per empleat',
          after: "5 min per a tota l'empresa",
          description:
            "Abans: 15–30 min per empleat. Ara: 5 min per a tota l'empresa.",
          staticValue: '5 min',
        },
        moodle: {
          label: 'Generador de continguts LM',
          beforeLabel: 'Abans',
          afterLabel: 'Ara',
          before: '2 setmanes de producció manual',
          after: '2 dies amb eina externa',
          description:
            "Automatització de la creació de continguts a Moodle. De dues setmanes de treball a dos dies, amb el mateix estàndard de qualitat.",
          staticValue: '2 dies',
        },
      },
    },
    methodology: {
      eyebrow: 'Metodologia',
      titleStart: 'Un',
      titleHighlight: 'mètode reproduïble,',
      titleEnd: 'no sort.',
      description:
        "Cada solució que lliuro segueix el mateix procés. Per això el puc aplicar a problemes nous sense fricció.",
      steps: {
        detect: {
          title: 'Detectar',
          description:
            "Identifico processos manuals repetitius on s'estan perdent hores (o setmanes) cada mes.",
        },
        automate: {
          title: 'Automatitzar',
          description:
            "Dissenyo la solució (script, IA, integració) amb el mínim esforç de manteniment i sense lligar l'equip a una sola persona.",
        },
        scale: {
          title: 'Escalar',
          description:
            "Documento, centralitzo i deixo el sistema llest perquè tota l'empresa el faci servir sense fricció.",
        },
      },
    },
    projects: {
      eyebrow: 'Showcase',
      titleStart: 'Projectes reals,',
      titleHighlight: 'impacte recent.',
      description:
        "Una selecció d'iniciatives desenvolupades en entorns reals. Totes en producció o validades internament.",
      items: {
        moodle: {
          title: 'Generador de continguts LM',
          description:
            "Eina externa que automatitza la creació i l'estructuració de continguts a Moodle. Un procés que abans requeria dues setmanes de treball manual ara es completa en dos dies, mantenint el control de qualitat i la revisió de l'equip.",
          badge: 'Projecte més recent',
        },
        signatures: {
          title: 'Sistema Centralitzat de Signatures',
          description:
            "Vaig centralitzar el canvi de signatura del correu de tota l'empresa. Abans cada empleat ho feia manualment (15–30 min cadascú, i molts s'equivocaven). Ara un sol script actualitza tota la plantilla en 5 minuts. Hi vaig afegir tracking de clics a cada imatge i URL amb Google Analytics — requisit que portava 6 mesos pendent, resolt i implantat en 1 setmana, amb tutorial inclòs. L'èxit del sistema va propiciar que la direcció del grup empresarial en sol·licités una presentació interna per replicar el model a altres departaments.",
          badge: 'Validat en producció',
        },
        wordpressAI: {
          title: 'Maquetació WordPress amb IA',
          description:
            "Gràcies a l'entrenament de l'equip i a la integració d'IA en el meu flux de treball, passo de 2 dies a 2 hores per maquetació. +800% d'eficiència en un dels processos amb més volum de l'empresa.",
          badge: '+800% eficiència',
        },
        landings: {
          title: 'Generador Dinàmic de Landings',
          description:
            "Eina interna al servidor per crear landings de client sense repetir el setup cada cop. En mig dia ja estava funcionant, estalviant 30–60 min per cada landing nova i centralitzant els recursos.",
          badge: 'Mig dia de desenvolupament',
        },
        healthApp: {
          title: 'Health App Corporativa',
          description:
            "App social gamificada per incentivar l'activitat física de l'equip com a via a major rendiment i menor absentisme. Construïda a cost zero. Llesta per a producció, pendent d'afinar detalls abans de desplegar.",
          badge: 'Cost zero',
        },
      },
    },
    timeline: {
      eyebrow: 'Trajectòria',
      titleStart: '7 mesos,',
      titleHighlight: "corba d'impacte.",
      description:
        "Cronologia d'impacte: 7 mesos de resultats reals a la meva última etapa.",
      events: {
        onboarding: {
          month: 'Mes 1–2',
          title: 'Onboarding tècnic',
          description:
            "Immersió en l'stack intern (WordPress, scripts del servidor) i mapatge dels processos manuals més costosos de l'empresa.",
        },
        signatures: {
          month: 'Mes 3',
          title: 'Sistema de signatures',
          description:
            "Resolució en 1 setmana d'un requisit que portava 6 mesos pendent. Validat i integrat amb èxit a nivell corporatiu, amb Google Analytics.",
        },
        healthApp: {
          month: 'Mes 4',
          title: 'Health App corporativa',
          description:
            'App social gamificada a cost zero. Major salut física = major rendiment i menor absentisme.',
        },
        wordpressAI: {
          month: 'Mes 5',
          title: 'Maquetació WordPress amb IA',
          description:
            'Fluxos optimitzats amb IA: de 2 dies a 2 hores per maquetació (+800% eficiència).',
        },
        landings: {
          month: 'Mes 6',
          title: 'Generador dinàmic de landings',
          description:
            "Eina interna al servidor per crear landings de clients en minuts, centralitzant recursos i estalviant cost directe de desenvolupament.",
        },
        moodle: {
          month: 'Mes 7',
          title: 'Generador de continguts LM',
          description:
            "Eina externa per a continguts a Moodle: de 2 setmanes de producció manual a 2 dies per cicle, amb revisió i qualitat controlades.",
        },
      },
    },
    stack: {
      eyebrow: 'Stack',
      titleStart: 'Polivalència tècnica,',
      titleHighlight: 'focus en resultat.',
      description:
        "Les eines són el mitjà. L'objectiu és sempre el mateix: menys hores manuals, més capacitat.",
    },
    value: {
      eyebrow: 'Proposta de Valor',
      titleStart: 'Per què',
      titleHighlight: 'invertir en el meu perfil?',
      body: "El meu objectiu des del primer dia és demostrar que contractar-me té un retorn mesurable. La meva experiència en entorns reals demostra que tradueixo el desenvolupament i la IA en hores estalviades, costos evitats i eficiència operativa. Busco un nou repte professional on continuar detectant processos ineficients i resoldre'ls amb tecnologia, escalant el rendiment de l'equip sense multiplicar els costos.",
      chips: [
        { label: 'Velocitat', value: 'Dies, no mesos' },
        { label: 'Cost operatiu', value: 'No escala' },
        { label: 'Impacte', value: 'Corporatiu' },
      ],
      contactTitle: 'Parlem',
      contactSubtitle:
        'Busques un perfil que converteixi processos manuals en resultats mesurables? Aquesta és la manera més ràpida de contactar.',
      ctaEmail: 'Enviar email',
      ctaLinkedin: 'Connectar a LinkedIn',
      ctaGithub: 'Veure GitHub',
      signedAs: 'Signat',
      role: 'Desenvolupador Full Stack · IA aplicada i automatització',
      backTop: 'Tornar amunt',
      footer: 'Albert Caminal · Full Stack Developer & AI Automation Specialist',
      mailSubject: 'Parlem · Portfolio d\'impacte',
    },
    pdf: {
      cta: 'Descarregar resum (PDF)',
      generating: 'Generant PDF…',
      filename: 'Albert-Caminal-Resum',
      portfolioLabel: 'Portfolio complet',
      portfolioUrl: 'https://albert-caminal.vercel.app',
      sections: {
        impact: 'Impacte mesurable',
        projects: 'Projectes clau',
        timeline: 'Trajectòria (7 mesos)',
        method: 'Metodologia',
        stack: 'Stack principal',
        contact: 'Contacte',
      },
      metrics: [
        'WordPress: +800% (2 dies → 2 h per maquetació)',
        'Lliurament: requisit 6 mesos pendent → 1 setmana en producció',
        "Signatures email: 15–30 min/empleat → 5 min tota l'empresa",
        'Moodle LM: 2 setmanes de producció → 2 dies',
      ],
      projects: [
        'Generador de continguts LM (Moodle)',
        'Sistema centralitzat de signatures + Google Analytics',
        'Maquetació WordPress amb IA',
        'Generador dinàmic de landings',
        'Health App corporativa (MVP, cost zero)',
      ],
      methodSteps: ['Detectar processos manuals', 'Automatitzar amb IA/scripts', 'Escalar i documentar'],
    },
    a11y: {
      languageToggle: 'Canviar idioma',
      openMenu: 'Obrir menú',
      closeMenu: 'Tancar menú',
      languageChanged: 'Idioma canviat a Català',
    },
  },
  en: {
    lang: { code: 'en', label: 'EN' },
    nav: {
      brand: 'Albert Caminal',
      impact: 'Impact',
      methodology: 'Methodology',
      projects: 'Projects',
      timeline: 'Timeline',
      stack: 'Stack',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Full Stack Developer · Applied AI & automation',
      titleLine1: 'From manual workflows',
      titleHighlight: 'to results in days.',
      subtitle:
        'Maximizing business profitability through AI, automation, and agile development. Saving work hours to scale profits.',
      cta: 'Get in touch',
    },
    impact: {
      eyebrow: 'Impact Dashboard',
      titleStart: 'Results that are',
      titleHighlight: 'measured in hours',
      titleEnd: 'and euros.',
      description:
        'Each metric represents time recovered for the team and real capacity to take on more clients without scaling costs.',
      metrics: {
        wp: {
          label: 'WordPress efficiency',
          description:
            'Cut layout time from 2 days to 2 hours with AI-optimized workflows.',
        },
        mgmt: {
          label: 'Delivery time',
          beforeLabel: 'Pending',
          afterLabel: 'Delivered in',
          before: '6 months unresolved',
          after: '1 week, with tutorial',
          description:
            'I ship in days what had been pending for months. Concrete example: centralized email signature system with Google Analytics click tracking, validated and deployed in a real production environment.',
          staticValue: '1 week',
        },
        sig: {
          label: 'Signature rollout',
          beforeLabel: 'Before',
          afterLabel: 'Now',
          before: '15–30 min per employee',
          after: '5 min for the whole company',
          description:
            'Before: 15–30 min per employee. Now: 5 min for the whole company.',
          staticValue: '5 min',
        },
        moodle: {
          label: 'LM Content Generator',
          beforeLabel: 'Before',
          afterLabel: 'Now',
          before: '2 weeks of manual production',
          after: '2 days with external tool',
          description:
            'Automated Moodle content creation. From two weeks of work to two days, with the same quality standard.',
          staticValue: '2 days',
        },
      },
    },
    methodology: {
      eyebrow: 'Methodology',
      titleStart: 'A',
      titleHighlight: 'repeatable method,',
      titleEnd: 'not luck.',
      description:
        'Every solution I deliver follows the same process. That is why I can apply it to new problems without friction.',
      steps: {
        detect: {
          title: 'Detect',
          description:
            'I identify repetitive manual processes where hours (or weeks) are lost every month.',
        },
        automate: {
          title: 'Automate',
          description:
            'I design the solution (script, AI, integration) with minimal maintenance overhead and without tying the team to a single person.',
        },
        scale: {
          title: 'Scale',
          description:
            'I document, centralize, and leave the system ready for the whole company to use without friction.',
        },
      },
    },
    projects: {
      eyebrow: 'Showcase',
      titleStart: 'Real projects,',
      titleHighlight: 'recent impact.',
      description:
        'A selection of initiatives built in real environments. All in production or validated internally.',
      items: {
        moodle: {
          title: 'LM Content Generator',
          description:
            'External tool that automates creation and structuring of Moodle content. A process that previously required two weeks of manual work is now completed in two days, while keeping quality control and team review.',
          badge: 'Latest project',
        },
        signatures: {
          title: 'Centralized Email Signature System',
          description:
            'I centralized company-wide email signature updates. Before, each employee did it manually (15–30 min each, and many made mistakes). Now a single script updates the entire workforce in 5 minutes. I added click tracking on every image and URL with Google Analytics — a requirement pending for 6 months, solved and deployed in 1 week, tutorial included. The system’s success led corporate leadership to request an internal presentation to replicate the model across other departments.',
          badge: 'Production validated',
        },
        wordpressAI: {
          title: 'AI-Powered WordPress Layout',
          description:
            'With team training and AI integrated into my workflow, I went from 2 days to 2 hours per layout. +800% efficiency on one of the company’s highest-volume processes.',
          badge: '+800% efficiency',
        },
        landings: {
          title: 'Dynamic Landing Page Generator',
          description:
            'Internal server tool to create client landings without repeating setup each time. Live within half a day, saving 30–60 min per new landing and centralizing resources.',
          badge: 'Half-day build',
        },
        healthApp: {
          title: 'Corporate Health App',
          description:
            'Gamified social app to encourage physical activity as a path to higher performance and lower absenteeism. Built at zero cost. Production-ready, pending minor polish before deployment.',
          badge: 'Zero cost',
        },
      },
    },
    timeline: {
      eyebrow: 'Timeline',
      titleStart: '7 months,',
      titleHighlight: 'impact curve.',
      description:
        'Impact timeline: 7 months of real results in my latest role.',
      events: {
        onboarding: {
          month: 'Month 1–2',
          title: 'Technical onboarding',
          description:
            'Immersion in the internal stack (WordPress, server scripts) and mapping of the company’s costliest manual processes.',
        },
        signatures: {
          month: 'Month 3',
          title: 'Signature system',
          description:
            '1-week resolution of a requirement that had been pending for 6 months. Successfully validated and integrated at corporate level, with Google Analytics.',
        },
        healthApp: {
          month: 'Month 4',
          title: 'Corporate health app',
          description:
            'Gamified social app at zero cost. Better physical health = higher performance and lower absenteeism.',
        },
        wordpressAI: {
          month: 'Month 5',
          title: 'AI-powered WordPress layout',
          description:
            'AI-optimized workflows: from 2 days to 2 hours per layout (+800% efficiency).',
        },
        landings: {
          month: 'Month 6',
          title: 'Dynamic landing generator',
          description:
            'Internal server tool to create client landings in minutes, centralizing resources and cutting direct development cost.',
        },
        moodle: {
          month: 'Month 7',
          title: 'LM Content Generator',
          description:
            'External tool for Moodle content: from 2 weeks of manual production to 2 days per cycle, with controlled review and quality.',
        },
      },
    },
    stack: {
      eyebrow: 'Stack',
      titleStart: 'Technical versatility,',
      titleHighlight: 'results-focused.',
      description:
        'Tools are the means. The goal is always the same: fewer manual hours, more capacity.',
    },
    value: {
      eyebrow: 'Value Proposition',
      titleStart: 'Why',
      titleHighlight: 'invest in my profile?',
      body: 'My goal from day one has been to prove that hiring me delivers measurable ROI. My experience in real environments shows I translate development and AI into hours saved, costs avoided, and operational efficiency. I am looking for a new professional challenge where I can keep spotting inefficient processes and solving them with technology, scaling team performance without multiplying costs.',
      chips: [
        { label: 'Speed', value: 'Days, not months' },
        { label: 'Operating cost', value: 'Does not scale' },
        { label: 'Impact', value: 'Corporate' },
      ],
      contactTitle: 'Let’s talk',
      contactSubtitle:
        'Looking for someone who turns manual processes into measurable results? This is the fastest way to reach me.',
      ctaEmail: 'Send email',
      ctaLinkedin: 'Connect on LinkedIn',
      ctaGithub: 'View GitHub',
      signedAs: 'Signed',
      role: 'Full Stack Developer · Applied AI & automation',
      backTop: 'Back to top',
      footer: 'Albert Caminal · Full Stack Developer & AI Automation Specialist',
      mailSubject: 'Let’s talk · Impact portfolio',
    },
    pdf: {
      cta: 'Download summary (PDF)',
      generating: 'Generating PDF…',
      filename: 'Albert-Caminal-Summary',
      portfolioLabel: 'Full portfolio',
      portfolioUrl: 'https://albert-caminal.vercel.app',
      sections: {
        impact: 'Measurable impact',
        projects: 'Key projects',
        timeline: 'Timeline (7 months)',
        method: 'Methodology',
        stack: 'Core stack',
        contact: 'Contact',
      },
      metrics: [
        'WordPress: +800% (2 days → 2 h per layout)',
        'Delivery: 6-month pending requirement → 1 week in production',
        'Email signatures: 15–30 min/employee → 5 min company-wide',
        'Moodle LM: 2 weeks production → 2 days',
      ],
      projects: [
        'LM content generator (Moodle)',
        'Centralized signature system + Google Analytics',
        'AI-powered WordPress layout',
        'Dynamic landing generator',
        'Corporate health app (MVP, zero cost)',
      ],
      methodSteps: ['Detect manual processes', 'Automate with AI/scripts', 'Scale and document'],
    },
    a11y: {
      languageToggle: 'Change language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      languageChanged: 'Language changed to English',
    },
  },
};

export const LANG_OPTIONS = [
  { code: 'es', label: 'ES' },
  { code: 'ca', label: 'CA' },
  { code: 'en', label: 'EN' },
];
