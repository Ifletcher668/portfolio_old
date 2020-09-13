import React, {useState} from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/layout'
import BackButton from '../components/back_button/backButton'
import SEO from '../components/SEO/SEO'
import MarkdownField from 'react-markdown'
import ContentCard from '../components/content/content'

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
    const [center, setCenter] = useState<string>('center')

    const {
        poem: {title, body, author, published, tags},
    }: {[key: string]: Poem} = data

    return (
        <Layout>
            <SEO title={`${title}, by ${author}`} />
            <ContentCard>
                <>
                    <hr className="center mb-small" />
                    <div className="title">
                        <h2>{title}</h2>
                    </div>
                    <div className={`${center} mb-small`}>
                        <MarkdownField source={body} />
                    </div>
                    <div className="title">
                        <h3>
                            By {author}, {published}
                        </h3>
                    </div>
                    <div>
                        <hr className="center mb-small" />
                    </div>
                    <div className="tags">
                        {tags.map(({tag}, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <span className="tag">{tag} </span>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <BackButton />
                </>
            </ContentCard>
        </Layout>
    )
}
