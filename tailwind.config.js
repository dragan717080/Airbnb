const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    theme: {
      fontSize: {
        sm: ['4px', '16px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }
    }
  },
  plugins: [
    require('./named-colors'),
    require('@tailwindcss/forms')({strategy: 'class'}),
    require('tailwind-scrollbar-hide')
  ]
}
