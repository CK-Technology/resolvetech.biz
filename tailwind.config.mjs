/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'resolve-blue': '#1B75BC',
        'resolve-teal': '#0D9DBF',
        'resolve-gray': '#6D6E71',
        'resolve-dark': '#58595B',
        'resolve-bg': '#FFFFFF',
        'resolve-bg-soft': '#F8FAFC',
        'resolve-bg-alt': '#EFF6FF',
        'resolve-text': '#1F2937',
        'resolve-text-muted': '#6B7280',
        'resolve-border': '#D1D5DB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
