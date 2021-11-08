module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    

    {
      resolve: `gatsby-source-pokeapi`,
      options: {
        nbOfPokemons: 251,
      },
    },

    {

      resolve: "gatsby-source-filesystem",
      options: {
        name: `oldblog`,
        path: `${__dirname}/src/pages/oldblog.js`,
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `oldblog`,
        path: `${__dirname}/src/pages/oldblog.js`,
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
    
     {
      resolve: `gatsby-plugin-s3`,
      options: {
      bucketName: "my-website-bucket",
       },
      
      
  },



  ],
};