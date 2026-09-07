export type Locale = 'es' | 'en'

export interface Job {
  when: string
  now?: boolean
  role: string
  company: string
  bullets: string[]
}

export interface SkillGroup {
  title: string
  tags: { label: string; learn?: boolean }[]
}

export interface ProjectEntry {
  status: string
  heading: string
  body: string
  image?: string
  gallery?: string[]
  context?: string[]
  stackGroups: { label: string; items: string[] }[]
  featuresHeading: string
  features: string[]
  repoLabel: string
  repo: string
  liveLabel?: string
  live?: string
}

export interface LocaleContent {
  nav: { home: string; about: string; services: string; stack: string; experience: string; projects: string; contact: string }
  hero: {
    typed: string
    roleLead: string
    ctaHint: string
  }
  facts: {
    heading: string
    role: string
    location: string
    education: string
    experience: string
    languages: string
    focus: string
    availability: string
  }
  about: { title: string; paragraphs: string[]; highlights: string[]; downloadCv: string }
  services: {
    title: string
    intro: string
    items: { icon: string; title: string; body: string; tags: string[] }[]
    ctaLabel: string
    ctaHint: string
  }
  stack: { title: string; groups: SkillGroup[]; stats: { total: string; categories: string; learning: string } }
  experience: {
    title: string
    live: string
    now: string
    jobs: Job[]
    stats: { years: string; roles: string; companies: string }
  }
  projects: {
    title: string
    viewDetailLabel: string
    items: ProjectEntry[]
  }
  contact: {
    title: string
    availability: string
    cta: string
    location: string
    process: { heading: string; steps: { title: string; detail: string }[] }
  }
  footer: { built: string; status: string }
}

/* Skills are stack-agnostic to language; defined once and reused. */
const skillTags = {
  langs: [{ label: 'Python' }, { label: 'TypeScript' }, { label: 'JavaScript' }, { label: 'Dart' }],
  backend: [
    { label: 'Django' },
    { label: 'Django REST' },
    { label: 'PostgreSQL' },
    { label: 'WebSockets' },
    { label: 'Microservicios' },
  ],
  frontend: [
    { label: 'Vue 3' },
    { label: 'React' },
    { label: 'Nuxt' },
    { label: 'Vite' },
    { label: 'Tailwind' },
    { label: 'AG Grid' },
    { label: 'Handsontable' },
    { label: 'Flutter' },
    { label: 'Push' },
  ],
  infra: [{ label: 'Docker' }, { label: 'Nginx' }, { label: 'Firebase' }, { label: 'AWS', learn: true }],
  tooling: [
    { label: 'Git' },
    { label: 'GitHub' },
    { label: 'Bitbucket' },
    { label: 'Jira' },
    { label: 'CI/CD' },
    { label: 'Conv. Commits' },
    { label: 'VirtualBox' },
  ],
}

export const siteContent: Record<Locale, LocaleContent> = {
  es: {
    nav: { home: 'inicio', about: 'sobre-mí', services: 'servicios', stack: 'stack', experience: 'experiencia', projects: 'proyectos', contact: 'contacto' },
    hero: {
      typed: 'Convierto problemas reales de negocio en software confiable: del modelo de datos a la interfaz, listo para producción.',
      roleLead: 'Desarrollador',
      ctaHint: 'Hacé clic en cualquiera para ir directo a esa sección o descargar mi CV',
    },
    facts: {
      heading: 'info',
      role: 'Full Stack Developer',
      location: 'Trujillo, La Libertad · Perú',
      education: 'Ing. de Sistemas · UCV',
      experience: 'Desde 2019 en TI',
      languages: 'ES nativo · EN A2',
      focus: 'Vue · Nuxt · Django · Flutter',
      availability: 'Disponible: freelance y full-time',
    },
    about: {
      title: 'sobre_mí',
      paragraphs: [
        'Desarrollador <span class="hl">Full Stack</span> con base en Trujillo. Me hago cargo de tu proyecto completo: del modelo de datos en <span class="hlb">PostgreSQL</span> y las APIs en <span class="hlb">Django REST</span>, hasta interfaces en <span class="hlb">Vue 3 / Nuxt / React</span> y apps en <span class="hlb">Flutter</span>.',
        'Vengo de una ruta poco común: empecé en <span class="hl">soporte técnico y hardware</span>, y esa mentalidad de diagnóstico la traigo al software — encontrar el bug crítico, estabilizar el sistema y dejar el código mantenible con <span class="hlb">Conventional Commits</span> y CI/CD.',
        'Si tu equipo necesita a alguien que resuelva bugs críticos en producción rápido, <span class="hl">y</span> también construya features nuevas sin necesitar supervisión constante, ese soy yo — disponible tanto para proyectos freelance como para un rol full-time.',
      ],
      highlights: [
        'Un solo dev, todo el stack cubierto',
        'De PostgreSQL a la interfaz',
        'Mentalidad de diagnóstico (ex-soporte)',
        'Código mantenible · CI/CD',
      ],
      downloadCv: 'cv-aylton-martinez.pdf',
    },
    services: {
      title: 'servicios',
      intro: 'Cómo puedo ayudarte, ya sea por un proyecto puntual o como parte de tu equipo.',
      items: [
        {
          icon: 'lucide:layout-panel-top',
          title: 'Desarrollo Full Stack a medida',
          body: 'Plataformas web completas: modelo de datos, API REST y una interfaz que la gente realmente puede usar.',
          tags: ['Django REST', 'PostgreSQL', 'Vue / React'],
        },
        {
          icon: 'lucide:smartphone',
          title: 'Apps móviles multiplataforma',
          body: 'Apps Android/iOS desde una sola base de código, con notificaciones push cuando el producto lo necesita.',
          tags: ['Flutter', 'Firebase', 'Push'],
        },
        {
          icon: 'lucide:stethoscope',
          title: 'Estabilización de sistemas en producción',
          body: 'Diagnóstico y corrección de bugs críticos, reducción de incidencias recurrentes y código más mantenible.',
          tags: ['Debugging', 'CI/CD', 'Conv. Commits'],
        },
        {
          icon: 'lucide:workflow',
          title: 'Automatización e integraciones',
          body: 'Importación/exportación de datos, integraciones entre sistemas y procesos manuales convertidos en flujos automáticos.',
          tags: ['APIs', 'Excel', 'Webhooks'],
        },
      ],
      ctaLabel: 'Hablemos de tu proyecto',
      ctaHint: 'Hacé clic para ir directo a contacto',
    },
    stack: {
      title: 'stack',
      groups: [
        { title: 'lenguajes', tags: skillTags.langs },
        { title: 'backend', tags: skillTags.backend },
        { title: 'front & mobile', tags: skillTags.frontend },
        { title: 'infra & nube', tags: skillTags.infra },
        { title: 'seguridad', tags: [{ label: 'Hacking Ético', learn: true }, { label: 'Pentesting', learn: true }] },
        { title: 'tooling', tags: skillTags.tooling },
      ],
      stats: { total: 'tecnologías', categories: 'categorías', learning: 'en aprendizaje' },
    },
    experience: {
      title: 'experiencia',
      live: 'en curso',
      now: 'Actualidad',
      jobs: [
        {
          when: 'May 2025 — Ago 2026',
          role: 'Asistente de aplicaciones y software',
          company: 'Agrovision Perú',
          bullets: [
            'Detecté y corregí errores críticos en plataformas web (Vue.js) y móviles (Flutter).',
            'Mejoré la disponibilidad de los sistemas internos.',
            'Estandaricé commits (Conventional Commits) para reducir bugs recurrentes.',
            'Soporte técnico N1/N2 en plataformas críticas de gestión agrícola.',
          ],
        },
        {
          when: 'Ago 2024 — Ene 2025',
          role: 'Analista Programador',
          company: 'Omnitech',
          bullets: [
            'Lideré el desarrollo de una plataforma web integral de gestión logística y de ventas.',
            'Centralicé el flujo de trabajo con un stack moderno.',
            'Enfoque en productividad y escalabilidad.',
          ],
        },
        {
          when: 'Abr 2023 — Jul 2023',
          role: 'Soporte Técnico',
          company: 'Corporación Big Data',
          bullets: [
            'Diagnóstico y reparación especializada de equipos informáticos.',
            'Integración de sistemas de videovigilancia (CCTV): instalación y configuración.',
            'Soporte técnico integral a empresas y clientes.',
          ],
        },
        {
          when: 'Dic 2019 — Jul 2022',
          role: 'Soporte Técnico',
          company: 'Ovatec',
          bullets: [
            'Diagnóstico y reparación de hardware.',
            'Instalación de cámaras de seguridad para empresas y hogares.',
          ],
        },
      ],
      stats: { years: 'años en TI', roles: 'roles', companies: 'empresas' },
    },
    projects: {
      title: 'proyectos',
      viewDetailLabel: 'Ver detalle',
      items: [
        {
          status: 'proyecto propio · en desarrollo activo',
          heading: 'Gestión de Gastos e Ingresos',
          body: 'Aplicación full-stack para el control de gastos e ingresos, con autenticación segura, control de acceso por roles (RBAC), auditoría completa de cambios e importación masiva desde Excel.',
          context: [
            'Nace de una necesidad concreta: cuando el control financiero deja de ser cosa de una sola persona, una hoja de Excel ya no alcanza para saber quién cambió qué y cuándo.',
            'Por eso el RBAC es granular (no solo "admin/usuario") y la auditoría queda al mismo nivel que cualquier otra funcionalidad, no como un agregado posterior.',
            'El modelo base compartido en el backend fue una decisión temprana: cada entidad nueva hereda estado, auditoría y trazabilidad sin reescribir esa lógica cada vez.',
          ],
          stackGroups: [
            { label: 'Frontend', items: ['React', 'AG Grid', 'Tailwind'] },
            { label: 'Backend', items: ['Django REST', 'PostgreSQL'] },
          ],
          featuresHeading: 'Funcionalidades',
          features: [
            'Registro y login con verificación de correo + JWT',
            'Roles, permisos y menús configurables por usuario',
            'Historial de auditoría: quién y cuándo modificó cada registro',
            'Modelo base compartido en el backend: cada entidad nueva hereda estado, auditoría y trazabilidad sin repetir código',
            'Grid de datos editable en línea (AG Grid) con filtros y exportación',
            'Importación masiva desde Excel con vista previa antes de confirmar',
          ],
          repoLabel: 'Ver código en GitHub',
          repo: 'https://github.com/ADolmos194/gestion-gastos-ingresos',
        },
        {
          status: 'proyecto propio · en producción',
          heading: 'Portafolio Personal',
          image: '/projects/portfolio-preview.jpg',
          gallery: ['/projects/portfolio-preview.jpg', '/projects/portfolio-services-stack.jpg', '/projects/portfolio-stack-experience.jpg'],
          body: 'Este mismo sitio: una landing pensada como producto real, no solo una tarjeta de presentación — con soporte bilingüe, temas y una configuración de seguridad HTTP pensada para producción.',
          context: [
            'La estética de "terminal elevada" fue una decisión deliberada: nada de ventanas de terminal falsas ni relleno decorativo, solo la identidad de developer expresada con tipografía monoespaciada y micro-interacciones.',
            'Todo el contenido bilingüe vive en un único objeto tipado (LocaleContent) en vez de una librería de i18n externa — mantiene el bundle liviano y el contenido fácil de auditar en un solo archivo.',
            'La seguridad se trató como parte del producto, no un extra: headers CSP/HSTS/Permissions-Policy configurados para producción en Vercel, y el header X-Powered-By removido con un plugin de servidor (Nitro) para reducir el fingerprinting.',
          ],
          stackGroups: [
            { label: 'Frontend', items: ['Nuxt', 'Vue 3', 'TypeScript', 'Tailwind'] },
            { label: 'Infra & Deploy', items: ['Vercel', 'Git', 'GitHub'] },
          ],
          featuresHeading: 'Aspectos clave',
          features: [
            'Soporte bilingüe ES/EN con un composable de idioma propio',
            'Modo claro/oscuro persistente con transición animada (View Transitions API)',
            'Diseño responsive con estética de terminal elevada',
            'Headers de seguridad HTTP en producción: CSP, HSTS, Permissions-Policy',
            'Header X-Powered-By removido en un plugin de servidor (Nitro) para reducir fingerprinting',
            'Despliegue continuo en Vercel desde GitHub',
          ],
          repoLabel: 'Ver código en GitHub',
          repo: 'https://github.com/ADolmos194/repositorio-dev-adolmos',
          liveLabel: 'Ver sitio en vivo',
          live: 'https://aylton-martinez.vercel.app/',
        },
      ],
    },
    contact: {
      title: 'contacto',
      availability: 'Disponible para nuevos proyectos y oportunidades',
      cta: 'Escríbeme',
      location: 'Trujillo, Perú · GMT-5',
      process: {
        heading: 'Cómo trabajamos',
        steps: [
          { title: 'Mensaje', detail: 'Cuéntame tu proyecto por email o WhatsApp.' },
          { title: 'Respuesta < 24h', detail: 'Reviso y te respondo el mismo día.' },
          { title: 'Llamada breve', detail: 'Alineamos alcance, plazos y stack.' },
          { title: 'Propuesta', detail: 'Te envío una propuesta clara, sin rodeos.' },
        ],
      },
    },
    footer: { built: 'construido con', status: 'sistema operativo' },
  },

  en: {
    nav: { home: 'home', about: 'about', services: 'services', stack: 'stack', experience: 'experience', projects: 'projects', contact: 'contact' },
    hero: {
      typed: 'I turn real business problems into reliable software: from the data model to the interface, production-ready.',
      roleLead: 'Developer',
      ctaHint: 'Click any of these to jump to that section, or grab my resume',
    },
    facts: {
      heading: 'info',
      role: 'Full Stack Developer',
      location: 'Trujillo, La Libertad · Peru',
      education: 'Systems Engineering · UCV',
      experience: 'In IT since 2019',
      languages: 'ES native · EN A2',
      focus: 'Vue · Nuxt · Django · Flutter',
      availability: 'Available: freelance & full-time',
    },
    about: {
      title: 'about_me',
      paragraphs: [
        '<span class="hl">Full Stack</span> developer based in Trujillo, Peru. I take full ownership of your project: from the data model in <span class="hlb">PostgreSQL</span> and the APIs in <span class="hlb">Django REST</span>, to interfaces in <span class="hlb">Vue 3 / Nuxt / React</span> and apps in <span class="hlb">Flutter</span>.',
        'I come from an unusual path: I started in <span class="hl">technical support and hardware</span>, and I bring that diagnostic mindset to software — finding the critical bug, stabilizing the system, and keeping the code maintainable with <span class="hlb">Conventional Commits</span> and CI/CD.',
        'If your team needs someone who can fix critical production bugs fast <span class="hl">and</span> ship new features without needing much hand-holding, that\'s me — open to freelance projects and full-time roles alike.',
      ],
      highlights: [
        'One dev, the whole stack covered',
        'From PostgreSQL to the UI',
        'Diagnostic mindset (ex-support)',
        'Maintainable code · CI/CD',
      ],
      downloadCv: 'cv-aylton-martinez.pdf',
    },
    services: {
      title: 'services',
      intro: 'How I can help, whether it\'s a one-off project or as part of your team.',
      items: [
        {
          icon: 'lucide:layout-panel-top',
          title: 'Custom Full Stack development',
          body: 'Complete web platforms: data model, REST API, and an interface people can actually use.',
          tags: ['Django REST', 'PostgreSQL', 'Vue / React'],
        },
        {
          icon: 'lucide:smartphone',
          title: 'Cross-platform mobile apps',
          body: 'Android/iOS apps from a single codebase, with push notifications when the product needs them.',
          tags: ['Flutter', 'Firebase', 'Push'],
        },
        {
          icon: 'lucide:stethoscope',
          title: 'Production system stabilization',
          body: 'Diagnosing and fixing critical bugs, cutting down recurring incidents, and leaving the codebase more maintainable.',
          tags: ['Debugging', 'CI/CD', 'Conv. Commits'],
        },
        {
          icon: 'lucide:workflow',
          title: 'Automation & integrations',
          body: 'Data import/export, integrations between systems, and manual processes turned into automated flows.',
          tags: ['APIs', 'Excel', 'Webhooks'],
        },
      ],
      ctaLabel: 'Let\'s talk about your project',
      ctaHint: 'Click to jump straight to the contact section',
    },
    stack: {
      title: 'stack',
      groups: [
        { title: 'languages', tags: skillTags.langs },
        { title: 'backend', tags: skillTags.backend },
        { title: 'front & mobile', tags: skillTags.frontend },
        { title: 'infra & cloud', tags: skillTags.infra },
        { title: 'security', tags: [{ label: 'Ethical Hacking', learn: true }, { label: 'Pentesting', learn: true }] },
        { title: 'tooling', tags: skillTags.tooling },
      ],
      stats: { total: 'technologies', categories: 'categories', learning: 'learning' },
    },
    experience: {
      title: 'experience',
      live: 'ongoing',
      now: 'Present',
      jobs: [
        {
          when: 'May 2025 — Aug 2026',
          role: 'Applications & Software Assistant',
          company: 'Agrovision Peru',
          bullets: [
            'Detected and fixed critical bugs in web (Vue.js) and mobile (Flutter) platforms.',
            'Improved the availability of internal systems.',
            'Standardized commits (Conventional Commits) to reduce recurring bugs.',
            'L1/L2 support for critical agricultural-management platforms.',
          ],
        },
        {
          when: 'Aug 2024 — Jan 2025',
          role: 'Programmer Analyst',
          company: 'Omnitech',
          bullets: [
            'Led the development of a full web platform for logistics and sales management.',
            'Centralized the workflow with a modern stack.',
            'Focused on productivity and scalability.',
          ],
        },
        {
          when: 'Apr 2023 — Jul 2023',
          role: 'Technical Support',
          company: 'Corporación Big Data',
          bullets: [
            'Specialized diagnosis and repair of computer equipment.',
            'Integration of CCTV surveillance systems: installation and configuration.',
            'Comprehensive technical support for businesses and clients.',
          ],
        },
        {
          when: 'Dec 2019 — Jul 2022',
          role: 'Technical Support',
          company: 'Ovatec',
          bullets: [
            'Hardware diagnosis and repair.',
            'Installation of security cameras for businesses and homes.',
          ],
        },
      ],
      stats: { years: 'years in IT', roles: 'roles', companies: 'companies' },
    },
    projects: {
      title: 'projects',
      viewDetailLabel: 'View detail',
      items: [
        {
          status: 'personal project · active development',
          heading: 'Expense & Income Management',
          body: 'Full-stack app for tracking expenses and income, with secure authentication, role-based access control (RBAC), full change auditing, and bulk import from Excel.',
          context: [
            "It comes from a real need: once financial control stops being a one-person job, a spreadsheet can no longer tell you who changed what, and when.",
            'That\'s why RBAC is granular (not just "admin/user") and auditing sits at the same level as any other feature, not bolted on afterward.',
            'The shared base model in the backend was an early call: every new entity inherits state, auditing and traceability without rewriting that logic each time.',
          ],
          stackGroups: [
            { label: 'Frontend', items: ['React', 'AG Grid', 'Tailwind'] },
            { label: 'Backend', items: ['Django REST', 'PostgreSQL'] },
          ],
          featuresHeading: 'Features',
          features: [
            'Sign up / login with email verification + JWT',
            'Configurable roles, permissions and menus per user',
            'Audit history: who changed what, and when',
            'Shared base model in the backend: every new entity inherits status, auditing and traceability with zero boilerplate',
            'Inline-editable data grid (AG Grid) with filters and export',
            'Bulk import from Excel with a preview step before confirming',
          ],
          repoLabel: 'View code on GitHub',
          repo: 'https://github.com/ADolmos194/gestion-gastos-ingresos',
        },
        {
          status: 'personal project · in production',
          heading: 'Personal Portfolio',
          image: '/projects/portfolio-preview.jpg',
          gallery: ['/projects/portfolio-preview.jpg', '/projects/portfolio-services-stack.jpg', '/projects/portfolio-stack-experience.jpg'],
          body: 'This very site: built as a real product, not just a business card — bilingual support, theming, and an HTTP security setup meant for production.',
          context: [
            'The "elevated terminal" look was a deliberate call: no fake terminal window, no decorative filler — just the developer identity expressed through monospace type and small interactions.',
            'All bilingual content lives in a single typed object (LocaleContent) instead of a third-party i18n library — keeps the bundle light and the content auditable from one file.',
            'Security was treated as part of the product, not an add-on: CSP/HSTS/Permissions-Policy headers configured for production on Vercel, and the X-Powered-By header stripped via a Nitro server plugin to reduce fingerprinting.',
          ],
          stackGroups: [
            { label: 'Frontend', items: ['Nuxt', 'Vue 3', 'TypeScript', 'Tailwind'] },
            { label: 'Infra & Deploy', items: ['Vercel', 'Git', 'GitHub'] },
          ],
          featuresHeading: 'Key aspects',
          features: [
            'Bilingual ES/EN support via a custom locale composable',
            'Persistent light/dark theme with an animated reveal (View Transitions API)',
            'Responsive design with an elevated terminal aesthetic',
            'Production HTTP security headers: CSP, HSTS, Permissions-Policy',
            'X-Powered-By header stripped in a Nitro server plugin to reduce fingerprinting',
            'Continuous deployment to Vercel from GitHub',
          ],
          repoLabel: 'View code on GitHub',
          repo: 'https://github.com/ADolmos194/repositorio-dev-adolmos',
          liveLabel: 'View live site',
          live: 'https://aylton-martinez.vercel.app/',
        },
      ],
    },
    contact: {
      title: 'contact',
      availability: 'Available for new projects and opportunities',
      cta: 'Write to me',
      location: 'Trujillo, Peru · GMT-5',
      process: {
        heading: 'How we’d work together',
        steps: [
          { title: 'Message', detail: 'Reach out by email or WhatsApp with a short brief.' },
          { title: 'Reply < 24h', detail: 'I review and get back to you the same day.' },
          { title: 'Quick call', detail: 'We align on scope, timeline and stack.' },
          { title: 'Proposal', detail: 'I send a clear, no-nonsense proposal.' },
        ],
      },
    },
    footer: { built: 'built with', status: 'system operational' },
  },
}
