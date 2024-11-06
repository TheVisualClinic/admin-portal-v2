/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  prefix: 'c-',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#726658',
          foreground: '#ffffff',
        },
      },
      container: {
        center: true,
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
};
