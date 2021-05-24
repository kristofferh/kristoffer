const regexExclude404 = /^(?!\/(dev-404-page|404)).*$/;

module.exports = {
  siteMetadata: {
    siteTitle: "Kristoffer Hedstrom",
    siteUrl: "https://k-create.com",
    url: "https://k-create.com",
    name: "Kristoffer Hedstrom",
    email: "hello@k-create.com",
    segment: "KrpuBOMB62nTKrcoFBpMoZQEKKIJllxU",
    description:
      "Website for Kristoffer Hedstrom: Swedish Interactive designer and developer currently in Switzerland.",
    twitter: "@_kris",
    shareImage: "https://k-create.com/images/about/shakey-0.gif",
    siteName: "k-create.com",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
    "gatsby-transformer-javascript-frontmatter",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
      },
    },
  ],
};
