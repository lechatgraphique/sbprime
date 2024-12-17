import { APP_INITIALIZER, Injector } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, Preview } from '@storybook/angular';
import { providePrimeNG, PrimeNG } from 'primeng/config';
import { theme1, theme2 } from './themes';
import { addons } from '@storybook/preview-api';
import '!style-loader!css-loader!postcss-loader!../src/styles.css';

let globalInjector: Injector | null = null;
let currentTheme = 'theme1';

function switchTheme(primeng: PrimeNG, theme: string, mode: string = 'light') {
  const preset = theme === 'theme1' ? theme1 : theme2;

  primeng.theme.set({
    preset: preset,
    colorScheme: mode,
    cssLayer: true,
  });

  console.log(`Applied theme: ${theme}, mode: ${mode}`);
}

function applyInitialTheme() {
  if (globalInjector) {
    const primeng = globalInjector.get(PrimeNG);
    switchTheme(primeng, currentTheme, 'light'); // Mode clair par défaut
  } else {
    console.warn('Injector not yet initialized for initial theme application.');
  }
}

function setupGlobalThemeListener() {
  addons.getChannel().on('globalsChanged', (globals) => {
    if (globalInjector) {
      const primeng = globalInjector.get(PrimeNG);
      const newTheme = globals.globals.theme || 'theme1';
      switchTheme(primeng, newTheme, 'light');
      currentTheme = newTheme;
    }
  });
}

function setupStoryChangedListener() {
  addons.getChannel().on('storyChanged', () => {
    applyInitialTheme();
  });
}

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true,
    },
  },
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        providePrimeNG(),
        {
          provide: APP_INITIALIZER,
          useFactory: (injector: Injector) => () => {
            globalInjector = injector;
            setupGlobalThemeListener();
            setupStoryChangedListener();
            applyInitialTheme();
          },
          deps: [Injector],
          multi: true,
        },
      ],
    }),
    (story, context) => {
      if (globalInjector) {
        const primeng = globalInjector.get(PrimeNG);
        const theme = context.globals['theme'] || currentTheme;
        switchTheme(primeng, theme, 'light');
        currentTheme = theme;
      }
      return story();
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Select the PrimeNG theme',
      defaultValue: 'theme1',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'theme1', title: 'theme1' },
          { value: 'theme2', title: 'theme2' },
        ],
      },
    },
  },
};

export default preview;
