import React from 'react'
import Layout from '../../components/layout/layout'
import Content from '../../components/content/writtenContent'
import SEO from '../../components/SEO/SEO'
import {useStrapiContent} from '../../graphql/queries/strapi'
import config from '../../../config/website'

export default () => {
    const {
        allStrapiPoems: {poems},
    } = useStrapiContent()

    return (
        <Layout>
            <SEO
                title={config.metaDescriptions.poetry.title}
                descFor={config.metaDescriptions.poetry.description}
            />
            <Content poetry={poems} title="poetry" showLink={false} />
        </Layout>
    )
}
