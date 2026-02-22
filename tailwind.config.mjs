/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: '#00E5FF',
          black: '#171c1e',
          cream: '#f7f5f0',
        },
        accent: {
          orange: '#ff9974',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Hanken Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
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
