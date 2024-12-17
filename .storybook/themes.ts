import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';


export const theme1 = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: '{red.50}',
          100: '{red.100}',
          200: '{red.200}',
          300: '{red.300}',
          400: '{red.400}',
          500: '{red.500}',
        },
      },
      dark: {
        primary: {
          50: '{green.50}',
          100: '{green.100}',
          200: '{green.200}',
          300: '{green.300}',
          400: '{green.400}',
          500: '{green.500}',
        },
      },
    },
    fontFamily: {
      base: 'sans-serif', // Utilisation explicite de sans-serif
    },
    css: () => `
      /* Global CSS pour forcer la typographie */
      html, body, .p-component {
          font-family: sans-serif !important; /* Force sans-serif */
      }
    `,
  },
});
export const theme2 = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: '{blue.50}',
          100: '{blue.100}',
          200: '{blue.200}',
          300: '{blue.300}',
          400: '{blue.400}',
          500: '{blue.500}',
        },
      },
      dark: {
        primary: {
          50: '{yellow.50}',
          100: '{yellow.100}',
          200: '{yellow.200}',
          300: '{yellow.300}',
          400: '{yellow.400}',
          500: '{yellow.500}',
        },
      },
    },
    fontFamily: {
      base: 'sans-serif', // Utilisation explicite de sans-serif
    },
    css: () => `
      /* Global CSS pour forcer la typographie */
      html, body, .p-component {
          font-family: sans-serif !important; /* Force sans-serif */
      }
    `,
  },
});
