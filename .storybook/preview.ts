import { applicationConfig, Preview } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import { withPrimeNGTheme } from './withPrimeNGTheme.decorator';
import { theme1, theme2 } from './themes';

const storybookThemes = {
  'Theme 1': theme1,
  'Theme 2': theme2,
};

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        providePrimeNG({
          ripple: true,
          theme: {
            preset: theme1, // Thème par défaut
            options: { cssLayer: true, darkModeSelector: false },
          },
        }),
      ],
    }),
    withPrimeNGTheme({
      themes: storybookThemes,
      defaultTheme: 'Theme 1',
    }),
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Sélectionner un thème PrimeNG',
      defaultValue: 'Theme 1',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'Theme 1', title: 'Theme 1 (Red)' },
          { value: 'Theme 2', title: 'Theme 2 (Blue)' },
        ],
      },
    },
  },
};

export default preview;
