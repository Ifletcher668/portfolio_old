import React from 'react'
import {graphql} from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout/layout'
import {Header} from '../components/titles/titles'
import SEO from '../components/SEO/SEO'
import Tags from '../components/tags/tags'
import ContentCard from '../components/content/content'
import DynamicZone from '../components/dynamic_zone_components/dynamicZone'
import moment from 'moment'

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
                    imageFile {
                        ...FluidImage
                    }
                }
                quote {
                    quote
                }
                content {
                    __typename
                    ... on STRAPI_ComponentContentBody {
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
                    ... on STRAPI_ComponentContentSlider {
                        slide {
                            image {
                                url
                                imageFile {
                                    ...FluidImage
                                }
                            }
                            caption
                        }
                    }
                    ... on STRAPI_ComponentContentQuote {
                        quote
                    }
                    ... on STRAPI_ComponentContentTextWithImage {
                        header
                        body
                        media {
                            media {
                                url
                                imageFile {
                                    ...FluidImage
                                }
                            }
                        }
                        position_left
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

const BlogTemplate: React.FC = ({data}: {[key: string]: any}) => {
    const {
        strapi: {
            blog: {
                title,
                authors,
                content,
                tags,
                quote,
                cover_image: {imageFile},
                updatedAt,
            },
        },
    }: {[key: string]: {[key: string]: Blog}} = data

    // front-end verification in case no quote is added in strapi
    let headerQuote = ''
    if (quote[0]) {
        headerQuote = quote[0].quote
    }

    // maps and formats string of authors
    const mapAuthors = () => {
        if (authors.length === 0) return 'anonymous'
        else
            return authors
                .map((author, idx) => {
                    if (authors.length === 1) return author.username
                    if (idx === authors.length - 1 && authors.length !== 1)
                        return ` and ${author.username}`
                    else return ` ${author.username}, `
                })
                .join('')
    }

    return (
        <Layout>
            <SEO title={`${title} by ${mapAuthors()} `} />
            <ContentCard background={false}>
                <>
                    <Header
                        title={title}
                        major={false}
                        center={false}
                        value={1}
                    />
                    {headerQuote !== '' ? (
                        <Header
                            title={headerQuote}
                            major={false}
                            center={false}
                            value={6}
                        />
                    ) : (
                        ''
                    )}
                    {imageFile && (
                        <Image fluid={imageFile.childImageSharp.fluid} />
                    )}
                    <DynamicZone components={content} />
                    <Tags data={tags} />
                    <Header
                        title={`by ${mapAuthors()}. Last updated ${moment(
                            updatedAt,
                        ).format('DD MMM, YYYY')}`}
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
