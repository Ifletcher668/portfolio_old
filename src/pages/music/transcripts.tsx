import React from 'react'
import Layout from '../../components/layout/layout'
import SEO from '../../components/SEO/SEO'
import ContentCard from '../../components/content/content'
import config from '../../../config/website'
import {Header} from '../../components/titles/titles'
export default (props: IProps) => {
    return (
        <Layout>
            <SEO
                title={config.metaDescriptions.transcripts.title}
                descFor={config.metaDescriptions.transcripts.description}
            />
            <ContentCard background>
                <>
                    <Header
                        major={false}
                        center={false}
                        value={3}
                        title="no transcripts right now :("
                    />
                </>
            </ContentCard>
        </Layout>
    )
}
