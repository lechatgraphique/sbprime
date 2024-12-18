import { DecoratorHelpers } from '@storybook/addon-themes';
import { inject } from '@angular/core';
import { PrimeNG } from 'primeng/config';

const { initializeThemeState, pluckThemeFromContext } = DecoratorHelpers;

export const withPrimeNGTheme = ({
                                   themes,
                                   defaultTheme,
                                 }: {
  themes: Record<string, any>;
  defaultTheme: string;
}) => {
  initializeThemeState(Object.keys(themes), defaultTheme);

  return (storyFn: any, context: any) => {
    const primeng = inject(PrimeNG);
    const selectedTheme = pluckThemeFromContext(context) || defaultTheme;

    if (themes[selectedTheme]) {
      primeng.theme.set({ preset: themes[selectedTheme] });
    }

    return storyFn();
  };
};
