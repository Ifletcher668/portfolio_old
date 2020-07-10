/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'WebDev Portfolio',
        description: 'This is WebDev Portfolio Site',
        author: '@webdev',
        twitterUsername: '@john_smilga',
        image: '/twitter-img.png',
        siteUrl: 'https://testing-strapi-gatsby-build.netlify.app',
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets/`,
            },
        },
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: `http://localhost:1337`,
                queryLimit: 1000, // Default to 100
                //   contentTypes : `poems`, `projects`, `blogs`,
                //   singleType : `about`
                //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
                contentTypes: [`projects`, `blogs`, `poems`], // These are my api endpoints
                singleTypes: [`portfolio`, `about`], // these are single content types
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Cormorant Garamond`,
                        variants: [`400`, `500`, `700`],
                    },
                    {
                        family: `Montserrat`,
                        variants: [`400`, `500`, `700`],
                    },
                ],
            },
        },
        `gatsby-plugin-sass`,
    ],
};
