module.exports = {
  siteMetadata: {
    title: `Treighton Mauldin`,
    description: `The text on this site is meant to be read in the voice of Robert Downey jr. as Tony Stark a.k.a. Iron Man`,
    author: `@treighton1988`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPgraqhQL",
        fieldName: "wordpress",
        url: "https://tr8pi.helmstudio.co/graphql",
        refetchInterval: 60,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `llcooltr8-starter-default`,
        short_name: `llcooltr8`,
        start_url: `/`,
        background_color: `##111F51`,
        theme_color: `##111F51`,
        display: `minimal-ui`,
        icon: `src/images/tr8.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
