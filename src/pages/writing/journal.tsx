import React from 'react'
import Layout from '../../components/Layout'
import Content from '../../components/Cards/index'
import SEO from '../../components/SEO/SEO'
import {useStrapiContent} from '../../graphql/queries/strapi'
import config from '../../../config/website'

export default () => {
    const {
        strapi: {blogs},
    } = useStrapiContent()

    return (
        <Layout>
            <SEO
                title={config.metaDescriptions.journal.title}
                descFor={config.metaDescriptions.journal.description}
            />
            <Content blogs={blogs} title="Journal" showLink={false} />
        </Layout>
    )
}
