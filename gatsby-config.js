const regexExclude404 = /^(?!\/(dev-404-page|404)).*$/;

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
    shareImage: "https://k-create.com/images/about/shakey-0.gif",
    siteName: "k-create.com"
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-postcss-sass",
    "gatsby-transformer-javascript-static-exports",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Kristoffer Hedstrom",
        short_name: "Kristoffer Hedstrom",
        icons: [
          {
            src: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png"
          },
          {
            src: "/favicon-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/favicon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          }
        ],
        start_url: "/",
        background_color: "white",
        theme_color: "white",
        display: "minimal-ui"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          site {
            siteMetadata {
              url
            }
          }

          allSitePage(
            filter: {
              path: {
                regex: "${regexExclude404}"
              }
            }
          )  {
            edges {
              node {
                path
              }
            }
          }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.url + edge.node.path,
              changefreq: "daily",
              priority: 0.7
            };
          })
      }
    }
  ]
};
