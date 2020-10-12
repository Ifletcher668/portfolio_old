import {graphql, useStaticQuery} from 'gatsby'

export const useStrapiContent = () => {
    return useStaticQuery(graphql`
        query GET_STRAPI_CONTENT {
            strapi {
                poetry: poems {
                    title
                    body
                    author
                    published
                    tags {
                        tag
                    }
                    slug
                    createdAt
                    updatedAt
                }
                blogs {
                    title
                    cover_image {
                        name
                    }
                    authors {
                        username
                        email
                    }
                    published
                    slug
                    tags {
                        tag
                    }
                    preview
                }
            }
        }
    `)
}
