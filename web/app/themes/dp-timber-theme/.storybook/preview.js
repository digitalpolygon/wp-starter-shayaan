/** @type { import('@storybook/html').Preview } */
import { themes } from "@storybook/theming";

import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.js";

import '../components/style.scss';
// CSS for Storybook Only
import '../components/storybook/storybook.scss';

// Add viewports for our example device widths.
const deviceViewports = {
  phone: {
    name: 'Phone',
    styles: {
      width: '390px',
      height: '844px',
    },
  },
  phoneLarge: {
    name: 'Large Phone',
    styles: {
      width: '428px',
      height: '926px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  tabletLarge: {
    name: 'Large Tablet',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
  desktop: {
    name: 'Desktop 1200',
    styles: {
      width: '1200px',
      height: '1024px',
    },
  },
  desktopWide: {
    name: 'Desktop 1440',
    styles: {
      width: '1440px',
      height: '1024px',
    },
  },
  desktopUltraWide: {
    name: 'Desktop 1600',
    styles: {
      width: '1600px',
      height: '1024px',
    },
  },
};

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', 'Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages', '*'],
      },
    },
    viewport: {
      viewports: deviceViewports,
    },
    docs: {
      themes: themes.light,
    },
  },
};

export default preview;