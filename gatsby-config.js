module.exports = {
  siteMetadata: {
    siteTitle: "Kristoffer Hedstrom",
    url: "https://k-create.com",
    name: "Kristoffer Hedstrom",
    email: "hello@k-create.com",
    segment: "KrpuBOMB62nTKrcoFBpMoZQEKKIJllxU",
    description:
      "Website for Kristoffer Hedstrom: Interactive designer and developer from Brooklyn, NY",
    twitter: "@_kris",
    shareImage: "https://k-create.com/images/about/shakey-0.gif"
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-postcss-sass",
    "gatsby-transformer-javascript-static-exports",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`
      }
    }
  ]
};
