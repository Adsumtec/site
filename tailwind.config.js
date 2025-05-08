/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'squid-ink': '#152135',
        'orange-peel': '#FF9900',
        'rich-black': '#070D16',
        'white-smoke': '#F5F5F5',
        'royal-azure': '#0037A5',
        'deep-electric-blue': '#386FF4',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/header-background.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
