/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: "User1",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: null,
    infoLink: "https://www.facebook.com",
    pinned: true
  }
];

const siteConfig = {
  title: "tyler" /* title for your website */,
  tagline:
    "An opinionated React.js component creation tool for your everyday needs",
  url: "https://zishan-ali.github.io" /* your website url */,
  baseUrl: "/tyler/" /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "tyler",
  organizationName: "zishan-ali",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "Conception", label: "Docs" },
    { page: "help", label: "Help" },
    { blog: true, label: "Blog" }
  ],

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: "img/paint-board-and-brush_white.svg",
  footerIcon: "img/paint-board-and-brush_white.svg",
  favicon: "img/paint-board-and-brush.svg",

  /* colors for website */
  colors: {
    primaryColor: "#201ba3",
    secondaryColor: "#3b3bf9"
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: "Copyright © " + new Date().getFullYear() + " Zishan Ali",

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ["https://buttons.github.io/buttons.js"],

  /* On page navigation for the current documentation page */
  onPageNav: "separate",

  /* Open Graph and Twitter card images */
  twitterImage: null,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/zishan-ali/tyler"
};

module.exports = siteConfig;
