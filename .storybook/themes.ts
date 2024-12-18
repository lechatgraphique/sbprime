import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import Lara from '@primeng/themes/lara';

export const theme1 = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: { primary: { 500: '{red.500}' } },
    },
  },
});

export const theme2 = definePreset(Lara, {
  semantic: {
    colorScheme: {
      light: { primary: { 500: '{blue.500}' } },
    },
  },
});
