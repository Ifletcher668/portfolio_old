import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO/SEO'
import ContentCard from '../../components/Content'
import config from '../../../config/website'
import {Header} from '../../components/Titles'
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
