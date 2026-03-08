# Mattrika Website - Project Context

## Project Overview

**Mattrika** is a modern website built with **Nuxt 3** and **@nuxt/ui v4**. It's a minimal starter project using Vue 3, TypeScript, and Tailwind CSS v4 for styling.

### Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Nuxt | ^4.3.1 | Full-stack Vue framework |
| Vue | ^3.5.29 | Frontend framework |
| @nuxt/ui | ^4.5.1 | UI component library (125+ components) |
| @nuxt/icon | ^2.2.1 | Icon system (Iconify) |
| @nuxt/image | ^2.0.0 | Image optimization |
| Tailwind CSS | ^4.2.1 | Utility-first CSS |
| Vue Router | ^4.6.4 | Client-side routing |

### Project Structure

```
matrrika-website/
├── app/
│   ├── app.vue          # Root component (wraps app with UApp)
│   ├── assets/
│   │   └── main.css     # Global styles (Tailwind + Nuxt UI imports)
│   └── pages/
│       └── index.vue    # Home page
├── public/
│   ├── favicon.ico      # Site favicon
│   └── robots.txt       # Robots configuration
├── nuxt.config.ts       # Nuxt configuration
├── package.json         # Dependencies & scripts
├── tsconfig.json        # TypeScript configuration
└── QWEN.md             # This file
```

## Building and Running

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```
Starts dev server at `http://localhost:3000` with hot reload.

### Production Build

```bash
pnpm build      # Build for production
pnpm preview    # Preview production build locally
```

### Other Commands

```bash
pnpm generate   # Generate static site (SSG)
pnpm postinstall # Run nuxt prepare (auto-run after install)
```

## Configuration Highlights

### Nuxt Config (`nuxt.config.ts`)

- **Compatibility Date**: 2025-07-15
- **Devtools**: Enabled
- **CSS**: Uses `~/assets/main.css` for global styles
- **App Title**: "Mattrika"
- **Icon Mode**: CSS-based icons with `base` layer
- **Image Optimization**: 
  - Provider: `ipx`
  - Format: WebP
  - Quality: 75%
  - Densities: 1x, 2x
  - Cache: 1 year

### Tailwind CSS v4

Uses the new Vite plugin approach:
```ts
import tailwindcss from "@tailwindcss/vite"
// Added to vite.plugins
```

### Global Styles (`app/assets/main.css`)

```css
@import "tailwindcss";
@import "@nuxt/ui";
```

## Development Conventions

### File Structure

- **Pages**: File-based routing in `app/pages/` (e.g., `index.vue`, `about.vue`)
- **Components**: Place reusable components in `app/components/`
- **Composables**: Place composables in `app/composables/`
- **Assets**: Static assets in `app/assets/`
- **Public**: Public static files in `public/`

### TypeScript

- Uses Nuxt's auto-generated TypeScript configs
- Configured via `tsconfig.json` referencing `.nuxt/tsconfig.*.json`
- Components use `<script setup lang="ts">`

### Component Pattern

```vue
<script setup lang="ts">
// TypeScript setup script
</script>

<template>
  <UApp>
    <!-- Nuxt UI components -->
    <UButton label="Click me" color="primary" />
  </UApp>
</template>
```

## Nuxt UI Resources

- **Quick Reference**: https://ui.nuxt.com/llms.txt
- **Full LLM Docs**: https://ui.nuxt.com/llms-full.txt
- **Official Docs**: https://ui.nuxt.com

> Use these links for complete Nuxt UI documentation and guidelines.

### Available MCP Tools

| Tool | Description |
|------|-------------|
| `mcp__nuxt-ui__list-components` | List all available components |
| `mcp__nuxt-ui__get-component` | Get component documentation |
| `mcp__nuxt-ui__get-component-metadata` | Get detailed component metadata |
| `mcp__nuxt-ui__get-example` | Get specific UI example code |
| `mcp__nuxt-ui__search-components-by-category` | Search components by category |

## Environment Variables

- `.env` files are git-ignored
- Use `.env.example` for documenting required env vars
- Access via `useRuntimeConfig()` in Nuxt

## Git Ignore Patterns

- Build outputs (`.output`, `.nuxt`, `dist`)
- Dependencies (`node_modules`)
- Logs
- IDE files (`.idea`, `.fleet`)
- Environment files (`.env`, `.env.*`)
- `figma.json`
