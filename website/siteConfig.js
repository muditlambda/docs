/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
// const users = [
//   {
//     caption: "User1",
//     // You will need to prepend the image path with your baseUrl
//     // if it is not '/', like: '/test-site/img/docusaurus.svg'.
//     image: "/img/docusaurus.svg",
//     infoLink: "https://www.facebook.com",
//     pinned: true
//   }
// ];

const siteConfig = {
  title: "Lambdatest", // Title for your website.
  tagline: "Cross-Browser Testing on Cloud",
  url: "https://www.lambdatest.com", // Your website URL
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "docs",
  organizationName: "LambdaTest",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  algolia: {
    apiKey: "957312d6202eb3faebada8955c72f0a3",
    indexName: "lambdadocs",
    algoliaOptions: {} // Optional, if provided by Algolia
  },
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { search: true }
    // { doc: "doc4", label: "API" },
    // { page: "help", label: "Help" },
    // { blog: true, label: "Blog" }
  ],
  gaTrackingId: "UA-101210471-1",

  // If you have users set above, you add it here:
  //users,

  /* path to images for header/footer */
  headerIcon: "img/footer.png",
  footerIcon: "img/footer.png",
  favicon: "img/favicon.png",

  /* Colors for website */
  colors: {
    primaryColor: "#105d82",
    secondaryColor: "#005ec7"
  },

  /* Custom fonts for website */
  fonts: {
    myFont: ["Times New Roman", "Serif"]
    /*  myOtherFont: ["-apple-system", "system-ui"]*/
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Lambdatest`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],
  facebookAppId: "1826921027426248",
  facebookComments: true,
  twitter: true,
  twitterUsername: "lambdatesting",
  // Open Graph and Twitter card images.
  ogImage: "img/footer.png",
  twitterImage: "img/footer.png",

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100
  }

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
