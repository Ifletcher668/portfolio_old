import React, {useState} from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/layout'
import BackButton from '../components/back_button/backButton'
import SEO from '../components/SEO/SEO'
import MarkdownField from 'react-markdown'
import ContentCard from '../components/content/content'
import {Header} from '../components/titles/titles'

export const query = graphql`
    query GetSinglePoem($slug: String) {
        poem: strapiPoems(slug: {eq: $slug}) {
            title
            body
            author
            published(formatString: "DD MMMM, YYYY")
            tags {
                tag
            }
        }
    }
`

export default ({data}: {[key: string]: any}) => {
    const {
        poem: {title, body, author, published, tags},
    }: {[key: string]: Poem} = data

    return (
        <Layout>
            <SEO title={`${title}, by ${author}`} />
            <ContentCard>
                <>
                    <Header value={2} center={false} title={title} major />
                    <article className="poem-text">
                        <MarkdownField source={body} />
                    </article>
                    <Header
                        value={4}
                        center={false}
                        title={`By ${author}, ${published}`}
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
                    <BackButton />
                </>
            </ContentCard>
        </Layout>
    )
}
