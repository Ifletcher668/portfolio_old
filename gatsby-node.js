const {createRemoteFileNode} = require('gatsby-source-filesystem')
const {resolve} = require('path')
const path = require('path')
const moment = require('moment')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions
    const {error, data} = await graphql(
        `
            query {
                strapi {
                    blogs {
                        id
                        slug
                        published
                    }
                    poems {
                        id
                        slug
                        published
                    }
                }
            }
        `,
    )

    if (error)
        return reporter.panicOnBuild(`Error while running GraphQL query!`)

    data.strapi.blogs.forEach(({slug, id, published}) => {
        const formattedDatePublished = moment(published).format('DD MMM, YYYY')
        createPage({
            // path: `/writing/journal/${formattedDatePublished}/${slug}`,
            path: `/writing/journal/${slug}`,
            component: path.resolve(`./src/templates/blog-template.tsx`), // the template
            context: {
                id: id,
            },
        })
    })

    data.strapi.poems.forEach(({slug, id, published}) => {
        const formattedDatePublished = moment(published).format('DD MMM, YYYY')
        createPage({
            // path: `/writing/poetry/${formattedDatePublished}/${slug}`,
            path: `/writing/poetry/${slug}`,
            component: path.resolve(`./src/templates/poem-template.tsx`),
            context: {
                id: id,
            },
        })
    })
}

exports.createResolvers = async ({
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
}) => {
    const {createNode} = actions
    await createResolvers({
        STRAPI_UploadFile: {
            imageFile: {
                type: 'File',
                async resolve(source) {
                    // need to find source (I think it's the heroku )
                    return await createRemoteFileNode({
                        url: source.url,
                        store,
                        cache,
                        createNode,
                        createNodeId,
                        reporter,
                    })
                },
            },
        },
    })
}
