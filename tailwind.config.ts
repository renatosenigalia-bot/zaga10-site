import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:     '#0E1B2D',
          electric: '#C8F000',
          graphite: '#3D4D5C',
          cloud:    '#B0BEC5',
          white:    '#FFFFFF',
          offwhite: '#F5F7FA',
        },
      },
      fontFamily: {
        display:  ['var(--font-bebas)', 'sans-serif'],
        subtitle: ['var(--font-barlow-sc)', 'sans-serif'],
        body:     ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.0', letterSpacing: '0.05em' }],
        'display':    ['56px', { lineHeight: '1.0', letterSpacing: '0.04em' }],
        'h2': ['38px', { lineHeight: '1.2', letterSpacing: '0.01em' }],
        'h3': ['30px', { lineHeight: '1.2', letterSpacing: '0.01em' }],
        'h4': ['24px', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'h5': ['20px', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'h6': ['16px', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body':    ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'caption': ['12px', { lineHeight: '1.4' }],
        'label':   ['12px', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      spacing: {
        'xs':  '4px',
        'sm':  '8px',
        'md':  '16px',
        'lg':  '24px',
        'xl':  '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      screens: {
        'sm':  '375px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1536px',
      },
      borderRadius: {
        'sm':  '4px',
        'md':  '8px',
        'lg':  '12px',
        'xl':  '16px',
      },
      boxShadow: {
        'card':      '0 2px 8px rgba(14, 27, 45, 0.08)',
        'card-hover':'0 8px 24px rgba(14, 27, 45, 0.16)',
        'nav':       '0 2px 16px rgba(14, 27, 45, 0.12)',
      },
      transitionDuration: {
        'fast':   '150ms',
        'normal': '300ms',
        'slow':   '500ms',
      },
    },
  },
  plugins: [],
}

export default config
