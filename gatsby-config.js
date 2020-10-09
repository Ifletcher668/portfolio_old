const path = require('path')
const config = require('./config/site')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: 'Isiahfletcher.com',
        description:
            'Drummer. Web Developer. Poet. Isiah Fletcher lives in Boise, Idaho',
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
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'isiahfletcher.com',
                short_name: 'Isiah Fletcher',
                start_url: '/',
                icon: './static/images/logo.png',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets/`,
            },
        },
        {
            resolve: 'gatsby-source-graphql',
            options: {
                typeName: 'STRAPI',
                fieldName: 'strapi',
                url: `${
                    process.env.NODE_ENV === 'development'
                        ? 'http://localhost:1337/graphql'
                        : 'https://isiahfletcheradmin.herokuapp.com'
                }`,
                refetchInterval: 1000, // refetches Strapi data every 10 minutes
            },
        },
        // TODO: ensure everything works properly, then delete commented code
        // {
        //     resolve: `gatsby-source-strapi`,
        //     options: {
        //         apiURL: `${
        //             process.env.NODE_ENV === 'development'
        //                 ? 'http://localhost:1337'
        //                 : 'https://isiahfletcheradmin.herokuapp.com'
        //         }`,
        //         queryLimit: 1000,
        //         //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        //         contentTypes: [`projects`, `blogs`, `poems`],
        //         singleTypes: [`portfolio`],
        //     },
        // },
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
}
