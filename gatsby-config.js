require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Hashir Baig`,
    siteTitleAlt: `Hashir Baig - Mobile Apps | Web | AWS Cloud`,
    siteHeadline: `Hashir Baig - Freelancer | iOS & Android Developer | AWS Cloud Solutions`,
    siteDescription: `Welcome to my Portfolio website. I have expertise in Native Android Development, React Native, Flutter, Desktop Apps and a lot more. I can help you in developing and designing a solution for your project using AWS Cloud solutions.`,
    siteLanguage: `en`,
    siteUrl: `http://www.meethashir.com`,
    siteImage: `/banner.png`,
    author: `Hashir Baig`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hashir Baig - Mobile Apps | Web | AWS Cloud`,
        short_name: `Hashir Baig`,
        description: `Hashir Baig - Freelancer | iOS & Android Developer | AWS Cloud Solutions`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        // icons: [
        //   {
        //     src: `/android-chrome-192x192.png`,
        //     sizes: `192x192`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `/android-chrome-512x512.png`,
        //     sizes: `512x512`,
        //     type: `image/png`,
        //   },
        // ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img/`,
      },
    },
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
