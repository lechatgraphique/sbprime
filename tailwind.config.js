/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Analyse les fichiers Angular
    "./.storybook/**/*.{js,ts}", // Analyse les fichiers Storybook
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
