import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'XAFS Fitter Documentation',
  tagline: 'Complete guide to using the XAFS Fitter GUI/CLI applications.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://xafsfitter.github.io',
  trailingSlash: false,
  baseUrl: '/',

  organizationName: 'xafsfitter',
  projectName: 'xafsfitter.github.io',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/xafsfitter/xafsfitter.github.io/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'XAFS Fitter',
      logo: {
        alt: 'XAFS Fitter Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Installation', to: '/docs/getting-started/installation'},
            {label: 'Quick Start', to: '/docs/getting-started/quick-start'},
            {label: 'GUI Guide', to: '/docs/gui/overview'},
            {label: 'CLI Guide', to: '/docs/cli/overview'},
          ],
        },
        {
          title: 'Reference',
          items: [
            {label: 'Configuration', to: '/docs/configuration/config-format'},
            {label: 'CLI Reference', to: '/docs/reference/cli-reference'},
            {label: 'Output Files', to: '/docs/reference/output-files'},
            {label: 'Troubleshooting', to: '/docs/reference/troubleshooting'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XAFS Fitter. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
