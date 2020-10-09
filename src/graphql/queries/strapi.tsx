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

// export const useStrapiContent = () => {
//     const data = useStaticQuery(graphql`
//         {
//             allStrapiBlogs {
//                 blogs: nodes {
//                     title
//                     cover_image {
//                         childImageSharp {
//                             fluid {
//                                 ...GatsbyImageSharpFluid
//                             }
//                         }
//                     }
//                     content {
//                         text
//                     }
//                     link_to_biography
//                     published(formatString: "DD MMM, YYYY")
//                     slug
//                     tags {
//                         tag
//                     }
//                     updatedAt(formatString: "DD MMM, YYYY")
//                     createdAt(formatString: "DD MMM, YYYY")
//                     quote {
//                         quote
//                     }
//                     slider {
//                         slide {
//                             image {
//                                 caption
//                             }
//                             caption
//                         }
//                     }
//                 }
//             }

//             allStrapiPoems {
//                 poems: nodes {
//                     title
//                     body
//                     author
//                     published
//                     tags {
//                         tag
//                     }
//                     slug
//                     createdAt
//                     updatedAt
//                 }
//             }
//         }
//     `)
//     return data
// }
// allStrapiBlogs {
//     blogs: nodes {
//         title
//         image {
//             childImageSharp {
//                 fluid {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         body
//         author
//         published(formatString: "DD MMM, YYYY")
//         slug
//         tags {
//             tag
//         }
//         preview
//         createdAt
//         updatedAt
//     }
// }
