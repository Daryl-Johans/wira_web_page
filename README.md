# Wira Web Page

Sitio web de Wira Systems, construido con **Astro + Vanilla CSS** siguiendo
el patron **Harness Engineering**: arnes de archivos en el repo, multi-agente
hub-and-spoke, verificacion automatizada y memoria externa.

## Arranque rapido

```powershell
npm install
npm run dev          # servidor de desarrollo
npm run verify       # verificacion completa del arnes
```

## Estructura

```
wira_web_page/
├─ .agents/                # Reglas y prompts de los sub-agentes
│  ├─ AGENTS.md            # Guardrails generales
│  ├─ multi_agent.md       # Topologia hub-and-spoke
│  ├─ orchestrator.md      # Lider / coordinador
│  ├─ investigator.md      # Investigacion y hallazgos
│  ├─ implementer.md       # Implementacion de codigo
│  ├─ reviewer.md          # Revision y veredicto
│  └─ documenter.md        # Memoria externa
├─ src/
│  ├─ components/          # Hero, Catalog, Pricing, FAQ, CTA
│  ├─ layouts/             # Layout.astro
│  ├─ pages/               # index.astro
│  └─ styles/global.css    # Variables CSS del diseno
├─ public/favicon.svg
├─ HARNESS.md              # Documento maestro del arnes
├─ task.md                 # Memoria a corto plazo del orquestador
├─ implementation_plan.md # Acuerdos de diseno pre-codigo
├─ verify_harness.ps1     # Script de verificacion (build + lint + tests)
├─ repl_loop.mjs          # Bucle interno iterativo del harness
└─ package.json
```

## Comandos

| Comando                  | Descripcion                                   |
|--------------------------|-----------------------------------------------|
| `npm run dev`            | Servidor de desarrollo                         |
| `npm run build`          | Build de produccion                            |
| `npm run check`          | Astro check (tipado)                           |
| `npm run lint`           | ESLint con fix                                 |
| `npm run lint:check`     | ESLint solo reporte                           |
| `npm run format`         | Prettier con fix                              |
| `npm run format:check`   | Prettier solo reporte                         |
| `npm run test`           | check + lint + build (sin scripts UI)         |
| `npm run verify`         | Lanza verify_harness.ps1                      |

## Flujo multi-agente

1. El **orquestador** lee `task.md`, elige una subtarea y la delega en
   el sub-agente adecuado pasandole solo el contexto imprescindible.
2. El sub-agente devuelve un reporte y el **orquestador** consolida y
   descarta el resto del contexto para preservar tokens.
3. El **revisor** valida build, lint, a11y y SEO antes del cierre.
4. El **documentador** actualiza `task.md`, `CHANGELOG.md` y `implementation_plan.md`.

Mas detalle en `.agents/multi_agent.md`.