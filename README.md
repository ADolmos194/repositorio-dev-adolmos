# Portafolio — Aylton Mesias Martinez

Sitio personal construido con Nuxt 4, con estética dev/monospace, soporte bilingüe (ES/EN) y modo claro/oscuro.

## Secciones

Hero · Sobre mí · Servicios · Stack · Experiencia · Proyectos · Contacto

## Stack

Nuxt 4 · Vue 3 · TypeScript · Tailwind CSS 4 · Nuxt Icon

## Desarrollo

```bash
pnpm install
pnpm dev       # http://localhost:3000
```

```bash
pnpm build     # build de producción
pnpm generate  # sitio estático
pnpm preview   # preview del build
```

## Estructura

- `app/components` — secciones del sitio (Hero, About, Services, Stack, Experience, Projects, Contact, TerminalBar, SiteFooter, ProjectDetailModal)
- `app/utils/content.ts` — todo el contenido textual (ES/EN) en un solo lugar
- `app/composables` — tema (`useTheme`) e idioma (`useLocale`)
- `app/plugins/reveal.client.ts` — animaciones de aparición al hacer scroll
- `public/` — CV descargable y assets estáticos

---

[Aylton Mesias Martinez](https://github.com/ADolmos194) — Full Stack Developer
