module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {

      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog.js`,
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog.js`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },

    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: 'https://csc496wordpress.tldr.dev/graphql',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: false
      }
    },

    /*
     {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `wpexample.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false
      }
    },
*/


  ],
};