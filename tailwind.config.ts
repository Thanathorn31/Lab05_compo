import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow:{
        'sp': '0 3px 12px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
} satisfies Config

