module.exports = {
  title: 'RAPID',
  tagline: 'Fastest way to build your RESTful API',
  url: 'https://rapid.rocks',
  baseUrl: '/',
  favicon: 'img/rest.svg',
  organizationName: 'oasis-open', // Usually your GitHub org/user name.
  projectName: 'odata-rapid', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/oceanicNext'),
    },
    navbar: {
      title: 'RAPID',
      logo: {
        alt: 'RAPID Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/samples/jetsons',
          label: 'Samples',
          position: 'left',
          activeBaseRegex: `docs/(samples/jetsons|tutorial/graphqlclient)`,
      },
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/w9YPQAp',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/rapidprofile',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/oasis-open/odata-rapid',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OASIS OPEN,`,
    },
  },
  scripts: [
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js"
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/oasis-open/odata-rapid/edit/main/docs/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
