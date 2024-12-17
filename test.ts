import { applicationConfig, Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { provideZoneChangeDetection } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { providePrimeNG } from "primeng/config";

import Aura from '@primeng/themes/aura';
import { definePreset } from "@primeng/themes";

// Charger la documentation
setCompodocJson(docJson);

// Définir les thèmes PrimeNG
const theme1 = definePreset(Aura, {
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
    },
  },
});

const theme2 = definePreset(Aura, {
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
    },
  },
});

// Fonction pour appliquer dynamiquement un thème via variables CSS
const applyTheme = (theme: any) => {
  const root = document.documentElement;

  // Appliquer les variables CSS définies dans le thème
  Object.entries(theme.semantic.colorScheme.light).forEach(([key, value]) => {
    if (typeof value === 'object' && value) {
      Object.entries(value).forEach(([innerKey, innerValue]) => {
        root.style.setProperty(`--${key}-${innerKey}`, innerValue as string);
      });
    } else if (value) {
      root.style.setProperty(`--${key}`, value as string);
    }
  });

  console.log("Theme applied:", theme); // Debugging
};

// Configuration de Storybook
const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideAnimationsAsync(),
      ],
    }),
    (Story, context) => {
      const theme = context.globals['theme']; // Récupère le thème sélectionné
      const themeMode = context.globals['themeMode']; // Récupère le mode clair/sombre
      console.log(theme, themeMode);
      // Appliquer le thème dynamiquement
      applyTheme(theme === 'theme1' ? theme1 : theme2);

      // Ajouter l'attribut pour le mode sombre ou clair
      document.body.setAttribute('data-prime-theme-mode', themeMode);

      return Story(); // Retourne la story avec le thème appliqué
    },
  ],
  parameters: {
    docs: {
      toc: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
  },
};

// Configuration globale pour les thèmes
export const globalTypes = {
  theme: {
    name: 'Theme',
    defaultValue: 'theme1',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'theme1', title: 'Theme 1' },
        { value: 'theme2', title: 'Theme 2' },
      ],
    },
  },
  themeMode: {
    name: 'Theme Mode',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
};

export default preview;
