module.exports = {
  title: 'RAPID Profile',
  tagline: 'Fastest way to build your RESTfull API',
  url: 'https://rapid.rocks',
  baseUrl: '/',
  favicon: 'img/rest.svg',
  organizationName: 'oasis-open', // Usually your GitHub org/user name.
  projectName: 'odata-rapid', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'RAPID Profile',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        }
      ],
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
              href: 'https://discord.gg/6n5T5r',
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
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
