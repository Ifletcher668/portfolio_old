import React from 'react'
import {graphql} from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/Layout'
import {Header} from '../components/Titles'
import SEO from '../components/SEO/SEO'
import Tags from '../components/Tags'
import ContentCard from '../components/Content'
import DynamicZone from '../components/DynamicZone'
import {formatDatePublished} from '../utils/formattedDates.js'
import mapAuthors from '../utils/mapAuthors'
import ReadingProgressBar from '../components/ReadingProgressBar'

// always query url for images, else graphql will return null
export const query = graphql`
    query GET_BLOG($id: ID!) {
        strapi {
            blog(id: $id) {
                title
                authors {
                    username
                    email
                    link_to_user_biography
                }
                cover_image {
                    url
                    alternativeText
                    caption
                    imageFile {
                        ...FluidImage
                    }
                }
                quote {
                    quote
                }
                content {
                    __typename
                    ... on STRAPI_ComponentContentText {
                        rich_text
                    }
                    ... on STRAPI_ComponentContentMedia {
                        media {
                            url
                            imageFile {
                                ...FluidImage
                            }

                            caption
                        }
                    }
                    ... on STRAPI_ComponentContentQuote {
                        quote
                    }
                }

                tags {
                    tag
                }

                updatedAt
            }
        }
    }
`
// TODO: add back to graphql
// ... on STRAPI_ComponentContentTextWithImage {
//     header
//     body
//     media {
//         media {
//             url
//             imageFile {
//                 ...FluidImage
//             }
//         }
//     }
//     position_left
// }

const BlogTemplate: React.FC = ({data}: {[key: string]: any}) => {
    const {
        strapi: {
            blog: {
                title,
                authors,
                content,
                tags,
                quote,
                cover_image,
                updatedAt,
            },
        },
    }: {[key: string]: {[key: string]: Blog}} = data

    let headerQuote = null
    if (quote) headerQuote = quote.quote

    // front end validation in case no cover image is added
    const coverImageValidated: {[key: string]: any} = {}
    if (cover_image) {
        const {imageFile, alternativeText, caption} = cover_image
        coverImageValidated.imageFile = imageFile
        coverImageValidated.alternativeText = alternativeText
        coverImageValidated.caption = caption
    }

    return (
        <Layout>
            <SEO title={`${title} by ${mapAuthors(authors)} `} />
            <Header title={title} major={false} center={false} value={1} />
            <ContentCard background={false}>
                <>
                    {quote && (
                        <Header
                            className="quote"
                            title={`"${headerQuote}"`}
                            major={false}
                            center={false}
                            value={6}
                        />
                    )}
                    {cover_image && (
                        <section className="image-container">
                            <Image
                                fluid={
                                    coverImageValidated.imageFile
                                        .childImageSharp.fluid
                                }
                                alt={coverImageValidated.alternativeText}
                            />

                            {coverImageValidated.caption && (
                                <span>{coverImageValidated.caption}</span>
                            )}
                        </section>
                    )}
                    <DynamicZone components={content} />
                    <Tags data={tags} />
                    <Header
                        title={`by ${mapAuthors(
                            authors,
                        )}. Last updated ${formatDatePublished(updatedAt)}`}
                        major={false}
                        center={false}
                        value={4}
                    />
                </>
            </ContentCard>
        </Layout>
    )
}

export default BlogTemplate
