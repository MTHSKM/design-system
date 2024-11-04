import type { Preview } from "@storybook/react";
import { darken, themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    docs: {
      themes: themes.dark
    }
  },
};

export default preview;
