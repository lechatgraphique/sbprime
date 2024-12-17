import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { providePrimeNG } from "primeng/config";

import Aura from '@primeng/themes/aura';
import { definePreset } from "@primeng/themes";

const MyPreset = definePreset(Aura, {
  semantic: {

    colorScheme: {
      light: {
        primary: {
          50: '{yellow.50}',
          100: '{yellow.100}',
          200: '{yellow.200}',
          300: '{yellow.300}',
          400: '{yellow.400}',
          500: '{yellow.500}',
          600: '{yellow.600}',
          700: '{yellow.700}',
          800: '{yellow.800}',
          900: '{yellow.900}',
          950: '{yellow.950}'
        },
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}'
        }
      },
      dark: {
        primary: {
          50: '{amber.50}',
          100: '{amber.100}',
          200: '{amber.200}',
          300: '{amber.300}',
          400: '{amber.400}',
          500: '{amber.500}',
          600: '{amber.600}',
          700: '{amber.700}',
          800: '{amber.800}',
          900: '{amber.900}',
          950: '{amber.950}'
        },
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        }
      }
    }
  },
  css: ({ dt }: { dt: any }) => `
    h1, h2, h3, h4, h5, h6 {
      color: ${dt('{primary.500}')};
    }
  `
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: false ,
          cssLayer: true
        }
      }
    })
  ]
};
