/** Maps a skill label to an Iconify icon name (offline collections). */
const map: Record<string, string> = {
  Python: 'simple-icons:python',
  TypeScript: 'simple-icons:typescript',
  JavaScript: 'simple-icons:javascript',
  Dart: 'simple-icons:dart',
  Django: 'simple-icons:django',
  'Django REST': 'simple-icons:django',
  PostgreSQL: 'simple-icons:postgresql',
  WebSockets: 'simple-icons:socketdotio',
  Microservicios: 'lucide:boxes',
  'Vue 3': 'simple-icons:vuedotjs',
  Nuxt: 'simple-icons:nuxtdotjs',
  Vite: 'simple-icons:vite',
  Tailwind: 'simple-icons:tailwindcss',
  Handsontable: 'lucide:table-2',
  Flutter: 'simple-icons:flutter',
  Push: 'lucide:bell-ring',
  Docker: 'simple-icons:docker',
  Nginx: 'simple-icons:nginx',
  Firebase: 'simple-icons:firebase',
  AWS: 'simple-icons:amazonwebservices',
  Git: 'simple-icons:git',
  GitHub: 'simple-icons:github',
  Bitbucket: 'simple-icons:bitbucket',
  Jira: 'simple-icons:jira',
  'CI/CD': 'lucide:infinity',
  'Conv. Commits': 'lucide:git-commit-horizontal',
  VirtualBox: 'simple-icons:virtualbox',
  'Hacking Ético': 'lucide:shield',
  'Ethical Hacking': 'lucide:shield',
  Pentesting: 'lucide:bug',
}

export function skillIcon(label: string): string {
  return map[label] ?? 'lucide:chevron-right'
}
