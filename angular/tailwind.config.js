/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
      "./src/**/*.{html,ts}",
    ],
  
  theme: {
    fontSize: {
      sm: '0.875rem',
      base: '1.3rem',
      xl: '1.5rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem'
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        default: {
          primary: '#fef08a',
          secondary: '#d97706',
          accent: '#65a30d',
        }
      }
    ]
  },

  base: true,
  styled: true,
  utils: true,
  prefix: '',
  logs: true,
  themeRoot: ':root',

  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

