import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO/SEO'
import config from '../../config/website'

export default (props: any) => {
    return (
        <Layout>
            <SEO
                title={config.metaDescriptions.extrasPage.title}
                descFor={config.metaDescriptions.extrasPage.description}
            />
            <h1>poem tree</h1>
            <h2>book recommendations</h2>
            <h3>favorite albums</h3>
            <h5>affiliate links</h5>
        </Layout>
    )
}
