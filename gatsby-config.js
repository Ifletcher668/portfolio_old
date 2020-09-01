/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Isiahfletcher.com',
        description: 'Drummer. Web Developer. Poet. Isiah Fletcher lives in Boise, Idaho',
        author: 'Isiah Fletcher',
        siteUrl: 'https://isiahfletcher.netlify.app',
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-sass`,
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
                // apiURL: `${
                //     process.env.NODE_ENV === 'production'
                //      ? 'https://isiahfletcheradmin.herokuapp.com' : 'localhost:1337'
                // }`,
                apiURL: `https://isiahfletcheradmin.herokuapp.com`,
                queryLimit: 1000,
                //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
                contentTypes: [`projects`, `blogs`, `poems`],
                singleTypes: [`portfolio`],
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
    ],
};
