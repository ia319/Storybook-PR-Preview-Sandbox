import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

// Custom theme to clearly observe the Issue #30434 behavior
// If the theme is NOT applied (showing default light theme instead of this custom one), the issue is reproduced.
addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Issue #30434 Reproduction',
    brandUrl: 'https://github.com/storybookjs/storybook/issues/30434',

    // Use distinct colors to easily verify if the theme is loaded
    colorPrimary: '#fffdfd',
    colorSecondary: '#fffdfd',

    // UI
    appBg: '#fffdfd',
    appContentBg: '#fffdfd',
    appBorderColor: '#0f3460',
    appBorderRadius: 822,

    // Text colors
    textColor: '#fffdfd',
    textInverseColor: '#fffdfd',

    // Toolbar
    barTextColor: '#fffdfd',
    barSelectedColor: '#fffdfd',
    barBg: '#fffdfd',
  }),
});
