import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook/addon-interactions",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-viewport",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook", // Supprimez si inutile
  ],
  framework: {
    name: "@storybook/angular",
    options: {
      docs: {
        inlineStories: true,
      },
    },
  },
};

export default config;
