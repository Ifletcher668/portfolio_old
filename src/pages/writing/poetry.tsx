import React from 'react'
import Layout from '../../components/Layout'
import Content from '../../components/Cards/index'
import SEO from '../../components/SEO/SEO'
import {useStrapiContent} from '../../graphql/queries/strapi'
import config from '../../../config/website'

export default () => {
    const {
        strapi: {poetry},
    } = useStrapiContent()

    return (
        <Layout>
            <SEO
                title={config.metaDescriptions.poetry.title}
                descFor={config.metaDescriptions.poetry.description}
            />
            <Content poetry={poetry} title="poetry" showLink={false} />
        </Layout>
    )
}
