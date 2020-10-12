import React, {Fragment} from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/layout'
import {Header, Title} from '../components/titles/titles'
import SEO from '../components/SEO/SEO'
import Projects from '../components/projects/projects'
import Tags from '../components/tags/tags'
import MarkdownField from 'react-markdown'
import ContentCard from '../components/content/content'

import config from '../../config/website'

export const query = graphql`
    query GET_PORTFOLIO {
        strapi {
            portfolio {
                section {
                    title
                    body
                }
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
            portfolio: {section, tags},
        },
    }: {[key: string]: {[key: string]: Portfolio}} = data

    return (
        <Layout>
            <SEO
                title={config.metaDescriptions.portfolio.title}
                descFor={config.metaDescriptions.portfolio.description}
            />
            <Header title="My Work" center={true} value={1} major />
            <ContentCard background>
                <>
                    {section.map(({title, body}, idx) => {
                        return (
                            <Fragment key={idx}>
                                <Title title={title} />
                                <MarkdownField source={body} />
                            </Fragment>
                        )
                    })}
                    <Projects />
                    <hr className="mb-small" />
                    <Tags data={tags} />
                    <hr className="mb-small" />
                </>
            </ContentCard>
        </Layout>
    )
}
