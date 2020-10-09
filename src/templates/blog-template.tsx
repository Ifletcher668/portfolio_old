import React from 'react'
import {graphql} from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout/layout'
import {Header} from '../components/titles/titles'
import SEO from '../components/SEO/SEO'

import ContentCard from '../components/content/content'
import moment from 'moment'
import DynamicZone from '../components/dynamic_zone_components/dynamicZone'

export const query = graphql`
    query GET_BLOG($id: ID!) {
        strapi {
            blog(id: $id) {
                title
                authors {
                    username
                    email
                }
                cover_image {
                    url
                    imageFile {
                        ...FluidImage
                    }
                }
                content {
                    __typename
                    ... on STRAPI_ComponentContentBodyText {
                        rich_text
                    }
                    ... on STRAPI_ComponentContentMedia {
                        media {
                            url
                            imageFile {
                                ...FluidImage
                            }
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
                }
                link_to_biography
                tags {
                    tag
                }
                quote {
                    quote
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
    let headerQuote = ''

    if (quote[0]) {
        headerQuote = quote[0].quote
    }

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
                    <Image fluid={imageFile.childImageSharp.fluid} /> <br />
                    <DynamicZone components={content} />
                    {tags.map(({tag}, idx) => (
                        <span key={idx}>{tag} </span>
                    ))}
                    <Header
                        title={`by ${mapAuthors()}. Last updated ${moment(
                            updatedAt,
                        ).format('DD MMM, YYYY')}`}
                        major={false}
                        center={false}
                        value={3}
                    />
                </>
            </ContentCard>
        </Layout>
    )
}

export default BlogTemplate
