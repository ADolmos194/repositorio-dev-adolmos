# Portafolio — Aylton Mesias Martinez

Sitio personal construido con Nuxt 4 y Tailwind CSS 4. El diseño parte de "Retro Cyber Arcade" (Stitch), en versión sobria: negro puro, rojo carmesí como único acento, tipografía Press Start 2P + JetBrains Mono, bordes escalonados y sombras duras, sin brillos. El contenido sale del CV y de los repositorios de GitHub.

Las pantallas de Stitch eran distintas entre sí, así que se unificaron: `SiteHeader` y `SiteFooter` son componentes compartidos, y `main.css` define una sola escala tipográfica, un solo borde neutro y el mismo fondo para todas las páginas.

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Inicio: perfil, servicios, proyectos destacados, enfoque y contacto |
| `/proyectos` | Casos de estudio: Gestión de Gastos e Ingresos (Qullqi) y este portafolio |
| `/stack` | Stack y arquitectura de referencia, habilidades del CV |
| `/experiencia` | Trayectoria laboral y formación |
| `/contacto` | Formulario (abre el correo con el mensaje preparado), WhatsApp y canales |

## Stack

Nuxt 4 · Vue 3 · TypeScript · Tailwind CSS 4 (`@tailwindcss/forms`)

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

- `app/pages` — una página por ruta, con el marcado de las pantallas de Stitch
- `app/components` — `SiteHeader` y `SiteFooter`, iguales en todas las páginas
- `app/assets/css/main.css` — tokens de diseño en `@theme` y la escala tipográfica común
- `app/stitch-scripts` — interacciones de cada página (filtros, selector de servicio, log simulado)
- `app/composables/useStitchScript.ts` — ejecuta esos scripts al montar la página y limpia temporizadores al salir
- `public/` — CV descargable, imágenes y fuentes
- `vercel.json` — cabeceras de seguridad (CSP, HSTS, Permissions-Policy)

Nota: el CSP (`img-src 'self' data:`) exige que las imágenes estén en `public/`; no se pueden enlazar desde otros dominios.

---

[Aylton Mesias Martinez](https://github.com/ADolmos194) — Full Stack Developer
