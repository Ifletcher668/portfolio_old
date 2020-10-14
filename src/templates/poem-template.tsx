import React, {useState} from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/layout'
import BackButton from '../components/back_button/backButton'
import SEO from '../components/SEO/SEO'
import MarkdownField from 'react-markdown'
import ContentCard from '../components/content/content'
import {Header} from '../components/titles/titles'
import {formatDatePublished} from '../utils/formattedDates.js'

export const query = graphql`
    query GET_POEM($id: ID!) {
        strapi {
            poem(id: $id) {
                title
                body
                author
                published
                tags {
                    tag
                }
            }
        }
    }
`

export default ({data}: {[key: string]: any}) => {
    const {
        strapi: {
            poem: {title, body, author, published, tags},
        },
    }: {[key: string]: {[key: string]: Poem}} = data

    return (
        <Layout>
            <SEO title={`${title}, by ${author}`} />
            <ContentCard background>
                <>
                    <Header value={2} center={false} title={title} major />
                    <article className="poem-text">
                        <MarkdownField source={body} />
                    </article>
                    <Header
                        value={4}
                        center={false}
                        title={`By ${author}, ${formatDatePublished(
                            published,
                        )}`}
                        major
                    />
                    <Header
                        value={6}
                        center={false}
                        title={`tags`}
                        major={false}
                    />
                    <section className="tags">
                        {tags.map(({tag}, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <span className="tag">{tag} </span>
                                </React.Fragment>
                            )
                        })}
                    </section>
                </>
            </ContentCard>
        </Layout>
    )
}
