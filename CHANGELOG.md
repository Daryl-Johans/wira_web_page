# Changelog

Todos los cambios notables del proyecto Wira Web Page se documentan aqui.
Formato basado en [Keep a Changelog](https://keepachangelog.com/) en
espanol y versionado [SemVer](https://semver.org/lang/es/).

## [Unreleased]
### Anadido
- Inicializacion del arnes Harness Engineering (HARNESS.md, AGENTS.md).
- Sub-agentes especializados: orquestador, investigador, implementador,
  revisor y documentador (sistema hub-and-spoke).
- Memoria externa: `task.md` e `implementation_plan.md`.
- Proyecto Astro base con ESLint, Prettier y TypeScript strict.
- Componentes iniciales: `Layout.astro`, `Hero.astro`, `index.astro`.
- Bucle interno REPL (`repl_loop.mjs`) para iteracion tool-call vs respuesta.
- Script de verificacion `verify_harness.ps1` ampliado con lint y formato.
- `task.md` alineado con la fase actual (`en_progreso`, hito 0 casi cerrado).

### Corregido (2026-06-26)
- **Bug de render en Pricing.astro**: `0&euro;`/`29&euro;` sustituido por
  `0 €`/`29 €` (la entidad `&euro;` tras un digito no es HTML valido y
  producia texto literal en produccion).
- **Skill `wira-developer` roto**: referencias a variables `--spacing-md`,
  `--spacing-lg` y `--shadow-glow` inexistentes. Sustituidas por
  `--space-3`/`--space-6` y se anade `--shadow-glow` a `global.css`.
- **Hardcoding de colores** (`#fff`, `rgba(255,255,255,0.85)`) en Hero,
  Pricing y Layout. Sustituido por nuevas variables globales
  `--color-on-primary`, `--color-surface-translucent`, `--shadow-glow`.
- **Acentos y encoding inconsistentes**: mezcla de `mas`/`version`/`disenados`
  y entidades `&iquest;`/`&iacute;`/`&oacute;`. Unificado a UTF-8 directo
  (`á`, `é`, `¿`, `í`, `ó`, `ñ`) en Hero, Catalog, FAQ, Pricing, task y README.
- **AGENTS.md raiz contradictorio**: existia en ingles con referencias a
  Tailwind (prohibido). Reemplazado por stub en espanol que delega las
  reglas Wira a `.agents/AGENTS.md`.
- **HARNESS.md amarrado a Google Antigravity**: se elimina la referencia
  propietaria y se describe el agente como agnostico de IDE/CLI (opencode,
  Claude Code, Cursor, etc.).
- **Falso positivo lint** `astro/no-unused-css-selector` en `FAQ.astro:68`
  silenciado con `eslint-disable-next-line` (selector `[open]` dinamico).
- `task.md` sincronizado: la fase ya no pide al humano ejecutar `npm install`
  (ya hecho) y abre el Hito 2 SEO como proximo paso.