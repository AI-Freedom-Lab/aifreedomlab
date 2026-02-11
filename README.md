# AI Freedom Lab Website

The digital home for the AI Freedom Lab movement - a sovereignty-first, performance-optimized website built with Astro.

## Tech Stack

- **Framework:** Astro 4.x with React islands
- **Styling:** Tailwind CSS 3.x
- **Animations:** GSAP, D3.js
- **Content:** Keystatic (Git-backed CMS)
- **Hosting:** Self-hosted VPS with Docker

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── components/   # Astro & React components
│   ├── content/      # Markdown/MDX content
│   ├── layouts/      # Page layouts
│   ├── pages/        # File-based routing
│   ├── styles/       # Global CSS
│   └── lib/          # Utilities
└── package.json
```

## Key Principles

- Self-custodial infrastructure (no vendor lock-in)
- Privacy-first (no tracking, self-hosted analytics)
- Performance-first (Lighthouse >90)
- Accessibility-first (WCAG 2.1 AA)

## License

MIT
