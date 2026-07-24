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

export interface LocaleContent {
  nav: { home: string; about: string; stack: string; experience: string; projects: string; contact: string }
  hero: {
    typed: string
    roleLead: string
    metas: string[]
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
  about: { cmd: string; title: string; paragraphs: string[]; highlights: string[]; downloadCv: string }
  stack: { cmd: string; title: string; groups: SkillGroup[]; stats: { total: string; categories: string; learning: string } }
  experience: {
    cmd: string
    title: string
    live: string
    now: string
    jobs: Job[]
    stats: { years: string; roles: string; companies: string }
  }
  projects: {
    cmd: string
    title: string
    status: string
    heading: string
    body: string
    plannedHeading: string
    features: string[]
  }
  contact: {
    cmd: string
    title: string
    availability: string
    cta: string
    location: string
    process: { heading: string; steps: { title: string; detail: string }[] }
  }
  footer: { built: string; status: string }
  palette: {
    placeholder: string
    navGroup: string
    actionsGroup: string
    themeToLight: string
    themeToDark: string
    langToEs: string
    langToEn: string
    empty: string
  }
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
    { label: 'Nuxt' },
    { label: 'Vite' },
    { label: 'Tailwind' },
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
    nav: { home: 'inicio', about: 'sobre-mí', stack: 'stack', experience: 'experiencia', projects: 'proyectos', contact: 'contacto' },
    hero: {
      typed: 'Construyo soluciones web y móviles de punta a punta, del backend a la interfaz.',
      roleLead: 'Desarrollador',
      metas: ['Trujillo, La Libertad · Perú', 'Ing. de Sistemas — UCV', 'ES nativo · EN A2'],
    },
    facts: {
      heading: 'info',
      role: 'Full Stack Developer',
      location: 'Trujillo, La Libertad · Perú',
      education: 'Ing. de Sistemas · UCV',
      experience: 'Desde 2019 en TI',
      languages: 'ES nativo · EN A2',
      focus: 'Vue · Nuxt · Django · Flutter',
      availability: 'Disponible para proyectos',
    },
    about: {
      cmd: 'cat about.md',
      title: 'sobre_mí',
      paragraphs: [
        'Desarrollador <span class="hl">Full Stack</span> con base en Trujillo. Construyo plataformas web y móviles de punta a punta: del modelo de datos en <span class="hlb">PostgreSQL</span> y las APIs en <span class="hlb">Django REST</span>, hasta interfaces en <span class="hlb">Vue 3 / Nuxt</span> y apps en <span class="hlb">Flutter</span>.',
        'Vengo de una ruta poco común: empecé en <span class="hl">soporte técnico y hardware</span>, y esa mentalidad de diagnóstico la traigo al software — encontrar el bug crítico, estabilizar el sistema y dejar el código mantenible con <span class="hlb">Conventional Commits</span> y CI/CD.',
      ],
      highlights: [
        'Web & mobile de punta a punta',
        'De PostgreSQL a la interfaz',
        'Mentalidad de diagnóstico (ex-soporte)',
        'Código mantenible · CI/CD',
      ],
      downloadCv: 'cv-aylton-martinez.pdf',
    },
    stack: {
      cmd: 'ls -la ./skills',
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
      cmd: 'git log --oneline --career',
      title: 'experiencia',
      live: 'en curso',
      now: 'Actualidad',
      jobs: [
        {
          when: 'May 2025 — Actualidad',
          now: true,
          role: 'Auxiliar de Soporte de Software',
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
      cmd: 'ls ./projects',
      title: 'proyectos',
      status: 'en construcción',
      heading: 'Próximamente',
      body: 'Estoy desarrollando un proyecto full-stack de gestión de tareas y gastos personales para mostrar aquí mi trabajo de punta a punta.',
      plannedHeading: 'Lo que incluirá este proyecto',
      features: [
        'Gestión de tareas y actividades',
        'Registro de gastos por categoría',
        'Dashboard con gráficos en tiempo real',
        'API REST con Django + PostgreSQL',
        'App móvil en Flutter con notificaciones push',
      ],
    },
    contact: {
      cmd: './connect.sh',
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
    palette: {
      placeholder: 'Buscar sección o comando…',
      navGroup: 'ir_a',
      actionsGroup: 'acciones',
      themeToLight: 'Cambiar a modo claro',
      themeToDark: 'Cambiar a modo oscuro',
      langToEs: 'Cambiar idioma a Español',
      langToEn: 'Cambiar idioma a English',
      empty: 'Sin resultados',
    },
  },

  en: {
    nav: { home: 'home', about: 'about', stack: 'stack', experience: 'experience', projects: 'projects', contact: 'contact' },
    hero: {
      typed: 'Building end-to-end web & mobile solutions, from backend to interface.',
      roleLead: 'Developer',
      metas: ['Trujillo, La Libertad · Peru', 'Systems Engineering — UCV', 'ES native · EN A2'],
    },
    facts: {
      heading: 'info',
      role: 'Full Stack Developer',
      location: 'Trujillo, La Libertad · Peru',
      education: 'Systems Engineering · UCV',
      experience: 'In IT since 2019',
      languages: 'ES native · EN A2',
      focus: 'Vue · Nuxt · Django · Flutter',
      availability: 'Available for projects',
    },
    about: {
      cmd: 'cat about.md',
      title: 'about_me',
      paragraphs: [
        '<span class="hl">Full Stack</span> developer based in Trujillo, Peru. I build web and mobile platforms end to end: from the data model in <span class="hlb">PostgreSQL</span> and the APIs in <span class="hlb">Django REST</span>, to interfaces in <span class="hlb">Vue 3 / Nuxt</span> and apps in <span class="hlb">Flutter</span>.',
        'I come from an unusual path: I started in <span class="hl">technical support and hardware</span>, and I bring that diagnostic mindset to software — finding the critical bug, stabilizing the system, and keeping the code maintainable with <span class="hlb">Conventional Commits</span> and CI/CD.',
      ],
      highlights: [
        'End-to-end web & mobile',
        'From PostgreSQL to the UI',
        'Diagnostic mindset (ex-support)',
        'Maintainable code · CI/CD',
      ],
      downloadCv: 'cv-aylton-martinez.pdf',
    },
    stack: {
      cmd: 'ls -la ./skills',
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
      cmd: 'git log --oneline --career',
      title: 'experience',
      live: 'ongoing',
      now: 'Present',
      jobs: [
        {
          when: 'May 2025 — Present',
          now: true,
          role: 'Software Support Specialist',
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
      cmd: 'ls ./projects',
      title: 'projects',
      status: 'under construction',
      heading: 'Coming soon',
      body: 'I am building a full-stack personal task & expense management project to showcase my end-to-end work here.',
      plannedHeading: 'What this project will include',
      features: [
        'Task & activity management',
        'Expense tracking by category',
        'Real-time dashboard with charts',
        'REST API with Django + PostgreSQL',
        'Flutter mobile app with push notifications',
      ],
    },
    contact: {
      cmd: './connect.sh',
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
    palette: {
      placeholder: 'Search a section or command…',
      navGroup: 'go_to',
      actionsGroup: 'actions',
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
      langToEs: 'Switch language to Español',
      langToEn: 'Switch language to English',
      empty: 'No results',
    },
  },
}
