# AI Freedom Lab - Quick Start Guide

Welcome! Your AI Freedom Lab website is ready to go. Here's everything you need to know to start using and customizing it.

## 🚀 Getting Started

### Development Server
```bash
cd /Users/jacklesser/aifreedomlab
npm run dev
```
Visit: http://localhost:4321

### Build & Preview
```bash
npm run build    # Build for production
npm run preview  # Preview the build locally
```

---

## 📝 Adding Content

### Add a Blog Post

Create a new file: `src/content/blog/your-post-slug.mdx`

```mdx
---
title: "Your Post Title"
description: "A brief description for SEO and previews"
pubDate: 2025-02-11
author: "Your Name"
tags: ["tag1", "tag2"]
draft: false
---

# Your Post Title

Your content here in Markdown/MDX format...
```

The post will automatically appear on `/blog` and have a detail page at `/blog/your-post-slug`.

### Add an Event

**Upcoming Event:** `src/content/events/upcoming/event-slug.mdx`

```mdx
---
title: "Event Name"
slug: "event-slug"
eventDate: 2025-03-20T18:00:00
eventEndDate: 2025-03-20T21:00:00
location: "Bitcoin Park, Nashville, TN"
registrationUrl: "https://lu.ma/your-event"
capacity: 50
status: "upcoming"
tags: ["workshop", "nashville"]
speakers:
  - name: "Speaker Name"
    bio: "Short bio"
    avatar: "/path/to/image.jpg"
---

# Event Description

Event details in Markdown...
```

**Past Event:** Move to `src/content/events/past/` and set `status: "past"`

---

## 🎨 Customization

### Colors

Edit `tailwind.config.mjs`:

```javascript
colors: {
  primary: {
    cyan: '#00D9FF',      // Change these!
    indigo: '#1A2F5A',
    cream: '#F8F6F1',
  },
  accent: {
    gold: '#FFB81C',
    magenta: '#E91E8C',
    copper: '#B87333',
  },
}
```

### Site Info

Edit `src/lib/constants.ts`:

```typescript
export const SITE_TITLE = 'AI Freedom Lab';
export const SITE_DESCRIPTION = 'Your description';
export const SITE_URL = 'https://aifreedomlab.org';

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/aifreedomlab',
  github: 'https://github.com/aifreedomlab',
  email: 'hello@aifreedomlab.org',
};
```

### Navigation

Edit `src/lib/constants.ts`:

```typescript
export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  // Add more links...
];
```

---

## 🖼️ Adding Images

1. Add images to `public/assets/images/`
2. Reference in content:

```mdx
![Alt text](/assets/images/your-image.jpg)
```

Or in frontmatter:
```yaml
featuredImage: "/assets/images/your-image.jpg"
```

---

## 📧 Newsletter Integration

The newsletter form is ready for integration. To connect it to Listmonk:

1. Deploy Listmonk (see deployment guide)
2. Update `src/components/ui/NewsletterForm.tsx`:

```typescript
const response = await fetch('https://newsletter.aifreedomlab.org/api/public/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email,
    list_ids: [1], // Your Listmonk list ID
  }),
});
```

---

## 📨 Contact Form Integration

The contact form uses Formspree. To activate:

1. Sign up at https://formspree.io
2. Update `src/pages/contact.astro`:

```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

---

## 🎬 Hero Animation

The geometric lock animation is in `src/components/home/HeroUnlockAnimation.tsx`.

To customize:
- Timing: Edit GSAP timeline durations
- Colors: Change stroke colors in SVG paths
- Disable: Remove `<HeroUnlock />` from `src/pages/index.astro`

---

## 📦 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Navigation
│   ├── home/            # Hero animation
│   ├── blog/            # Blog components
│   ├── events/          # Event components
│   └── ui/              # Reusable UI components
├── content/
│   ├── blog/            # Blog posts (MDX)
│   ├── events/          # Events (MDX)
│   └── config.ts        # Content schema
├── layouts/             # Page layouts
├── pages/               # Routes (file-based)
├── styles/              # Global CSS
└── lib/                 # Utilities
```

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

Output: `dist/` directory (static HTML/CSS/JS)

### Deploy Options

**Option 1: Vercel/Netlify** (Easiest)
- Connect GitHub repo
- Auto-deploys on push to main
- Zero configuration

**Option 2: Self-Hosted VPS** (Sovereignty-first)
See `DEPLOYMENT.md` for full guide (Docker + Caddy setup)

---

## 🔧 Common Tasks

### Add a New Page

1. Create `src/pages/new-page.astro`
2. Use a layout:

```astro
---
import PageLayout from '@layouts/PageLayout.astro';
---

<PageLayout title="Page Title">
  <p>Your content here</p>
</PageLayout>
```

### Change Fonts

Edit `src/layouts/BaseLayout.astro`:

```html
<!-- Replace Google Fonts link -->
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet" />
```

Update `tailwind.config.mjs`:

```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

### Add Analytics

When Plausible is deployed, add to `src/layouts/BaseLayout.astro`:

```html
<script defer data-domain="aifreedomlab.org" src="https://analytics.aifreedomlab.org/js/script.js"></script>
```

---

## 🐛 Troubleshooting

### Build Errors

```bash
npm run build
```

Check for:
- TypeScript errors (frontmatter validation)
- Missing images
- Invalid MDX syntax

### Content Not Showing

1. Check file is in correct directory (`src/content/blog/` or `src/content/events/`)
2. Verify frontmatter has `draft: false`
3. Restart dev server

### Styles Not Updating

1. Check Tailwind class names are correct
2. Restart dev server
3. Clear browser cache

---

## 📚 Learn More

- **Astro Docs:** https://docs.astro.build
- **Tailwind CSS:** https://tailwindcss.com/docs
- **GSAP Animation:** https://greensock.com/docs
- **Content Collections:** https://docs.astro.build/en/guides/content-collections/

---

## 🆘 Need Help?

- Check `IMPLEMENTATION_STATUS.md` for technical details
- Review example content in `src/content/blog/` and `src/content/events/`
- Astro Discord: https://astro.build/chat

---

## ✅ Next Steps

1. **Customize content** - Update About page, add your own blog posts
2. **Add images** - Replace placeholders with actual event photos
3. **Configure forms** - Set up Formspree and newsletter endpoints
4. **Deploy** - Choose hosting and go live!

**Ready to build intelligence freedom!** 🔓
