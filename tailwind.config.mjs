/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: '#00D9FF',
          indigo: '#1A2F5A',
          cream: '#F8F6F1',
        },
        accent: {
          gold: '#FFB81C',
          magenta: '#E91E8C',
          copper: '#B87333',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Space Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      animation: {
        'unlock': 'unlock 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'radiate': 'radiate 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
    },
  },
  plugins: [],
};
