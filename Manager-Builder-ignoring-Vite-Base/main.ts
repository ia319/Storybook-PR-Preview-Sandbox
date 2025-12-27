import { defineMain } from '@storybook/react-vite/node';

export default defineMain({
  stories: [
    // '../src/**/*.mdx',
    '../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)',
    // {
    //   directory: '../template-stories/core',
    //   titlePrefix: 'core',
    //   files: '**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))',
    // },
    // {
    //   directory: '../template-stories/addons/vitest',
    //   titlePrefix: 'addons/vitest',
    //   files: '**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))',
    // },
    // {
    //   directory: '../template-stories/addons/vitest',
    //   titlePrefix: 'addons/vitest',
    //   files: '**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))',
    // },
    // {
    //   directory: '../template-stories/addons/a11y',
    //   titlePrefix: 'addons/a11y',
    //   files: '**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))',
    // },
    // {
    //   directory: '../template-stories/addons/docs',
    //   titlePrefix: 'addons/docs',
    //   files: '**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))',
    // },
  ],

  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],

  framework: '@storybook/react-vite',

  previewAnnotations: [
    './src/stories/components',
    './src/stories/renderers/react/preview.ts',
    './template-stories/core/preview.ts',
  ],

  features: {
    developmentModeForBuild: true,
    experimentalTestSyntax: true,
  },

  core: {
    disableWhatsNewNotifications: true,
  },

  previewHead: (head) => `
    ${head}
    
    <style>
      /* explicitly set monospace font stack to workaround inconsistent fonts in Chromatic */
      pre, code, kbd, samp {
        font-family:
          ui-monospace,
          Menlo,
          Monaco,
          "Cascadia Mono",
          "Segoe UI Mono",
          "Roboto Mono",
          "Oxygen Mono",
          "Ubuntu Monospace",
          "Source Code Pro",
          "Fira Mono",
          "Droid Sans Mono",
          "Courier New",
          monospace;
      }
    </style>
  `,

  viteFinal: (config) => ({
    ...config,
    // Reproduction for Issue #30434: Custom base path to test manager builder support
    base: '/design-system/',
    optimizeDeps: { ...config.optimizeDeps, force: true },
    server: {
      ...config.server,
      fs: {
        ...config.server?.fs,
        allow: [
          'stories',
          'src',
          'template-stories',
          'node_modules',
          ...(config.server?.fs?.allow || []),
        ],
      },
    },
  }),
});
