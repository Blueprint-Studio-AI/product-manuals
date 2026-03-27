# IDVisor 3 Product Manual

A modern, responsive web-based product manual for the TokenWorks IDVisor 3 ID Scanner.

## Overview

This project provides an interactive digital manual for the IDVisor 3, TokenWorks' fully-featured Android-based age verification ID Scanner. The manual is built as a single-page application with a clean, professional design optimized for both desktop and mobile viewing.

## Features

- **Responsive Design** — Optimized for desktop, tablet, and mobile devices
- **Interactive Table of Contents** — Collapsible sidebar navigation with scroll-spy highlighting
- **Full-Text Search** — Quickly find relevant sections across all content
- **Markdoc-Powered** — Content authored in Markdown with custom components
- **Modern UI** — Clean typography, smooth animations, and intuitive navigation

## Tech Stack

- **Vue 3** — Progressive JavaScript framework with Composition API
- **TypeScript** — Type-safe development
- **Vite** — Fast build tool and development server
- **Markdoc** — Markdown-based authoring with custom tags
- **SCSS** — Styled with CSS custom properties for theming

## Project Structure

```
├── content/              # Markdown content files
│   ├── chapters/         # Chapter content (hardware, usage, settings)
│   └── idvisor3.md       # Main spine file
├── public/               # Static assets (images, logos)
├── src/
│   ├── components/       # Vue components
│   ├── composables/      # Vue composables (search, scroll-spy)
│   ├── markdoc/          # Markdoc schema and renderer
│   ├── pages/            # Page components
│   └── styles/           # Global styles and theme
└── index.html
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Authoring

Content is written in Markdown with Markdoc extensions. Custom tags available:

- `{% cover %}` — Cover page with hero image
- `{% chapter %}` — Chapter header with background image
- `{% split %}` — Two-column layout with image
- `{% callout %}` — Note, important, or warning callouts
- `{% toc-entry %}` — Table of contents entry

## License

Proprietary — TokenWorks, Inc. All rights reserved.
