/** Brand-ish color per skill, tuned for legibility on a near-black background.
 *  Skills without a real brand identity fall back to a neutral tone. */
const map: Record<string, string> = {
  Python: '#4B8BBE',
  TypeScript: '#3178C6',
  JavaScript: '#F0DB4F',
  Dart: '#40C4FF',
  Django: '#44B78B',
  'Django REST': '#44B78B',
  PostgreSQL: '#6BA4E8',
  WebSockets: '#9AA5B1',
  'Vue 3': '#4FC08D',
  React: '#61DAFB',
  Nuxt: '#00DC82',
  Vite: '#8B8CF9',
  Tailwind: '#38BDF8',
  Flutter: '#54C5F8',
  Docker: '#2496ED',
  Nginx: '#2FA85A',
  Firebase: '#FFCA28',
  AWS: '#FF9900',
  Git: '#F05032',
  GitHub: '#E6EDF3',
  Bitbucket: '#2684FF',
  Jira: '#5B9BFF',
  VirtualBox: '#607DB8',
}

const FALLBACK = 'var(--text-mute)'

export function skillColor(label: string): string {
  return map[label] ?? FALLBACK
}
