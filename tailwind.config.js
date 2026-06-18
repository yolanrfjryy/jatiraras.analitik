/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      // ── Brand colours ────────────────────────────────────────────────────
      // Swap these hex values to match the Jatiraras Sawarga visual identity
      colors: {
        brand: {
          50:  '#fff8f1',
          100: '#ffecd6',
          200: '#ffd4a8',
          300: '#ffb570',
          400: '#ff8c38',
          500: '#f97316', // primary accent
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Platform identity colours — used in badges, icons, charts
        platform: {
          tiktok:    '#010101',
          instagram: '#c13584',
          youtube:   '#ff0000',
        },
        // Neutral surface tokens
        surface: {
          DEFAULT: '#ffffff',
          muted:   '#f8fafc',
          border:  '#e2e8f0',
          hover:   '#f1f5f9',
        },
      },

      // ── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },

      // ── Spacing & shape ──────────────────────────────────────────────────
      borderRadius: {
        card: '0.75rem',
      },
      boxShadow: {
        card:       '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)',
        'card-md':  '0 4px 12px 0 rgb(0 0 0 / 0.09)',
        'card-lg':  '0 8px 24px 0 rgb(0 0 0 / 0.10)',
      },

      // ── Sidebar width tokens ─────────────────────────────────────────────
      width: {
        sidebar:          '240px',
        'sidebar-collapsed': '64px',
      },
    },
  },
  plugins: [],
}
