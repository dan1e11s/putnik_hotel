import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2B4EAD',
          dark: '#1A3278',
          light: '#3D63C4',
        },
        accent: {
          DEFAULT: '#4A90D9',
          light: '#6AAEE8',
          dark: '#2F72B8',
        },
        background: '#F8F9FC',
        surface: '#FFFFFF',
        text: {
          primary: '#1C1C2E',
          secondary: '#6B7280',
        },
        border: '#E5E7EB',
        stone: '#8B8B8B',
        beige: '#F5F0E8',
        brand: {
          blue: '#2B4EAD',
          dark: '#1A3278',
          accent: '#4A90D9',
          bg: '#F8F9FC',
          surface: '#FFFFFF',
          textPrimary: '#1C1C2E',
          textSecondary: '#6B7280',
          border: '#E5E7EB',
          stone: '#8B8B8B',
          beige: '#F5F0E8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #2B4EAD 0%, #1A3278 100%)',
        'gradient-accent': 'linear-gradient(135deg, #4A90D9 0%, #2B4EAD 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(27, 50, 120, 0.7) 0%, rgba(27, 50, 120, 0.4) 100%)',
      },
      boxShadow: {
        card: '0 4px 24px rgba(43, 78, 173, 0.08)',
        'card-hover': '0 8px 40px rgba(43, 78, 173, 0.16)',
        button: '0 4px 16px rgba(43, 78, 173, 0.3)',
        soft: '0 2px 16px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
