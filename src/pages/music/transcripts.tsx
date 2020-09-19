import React from 'react'
import Layout from '../../components/layout/layout'
import SEO from '../../components/SEO/SEO'
import ContentCard from '../../components/content/content'
import config from '../../../config/website'
export default (props: IProps) => {
    return (
        <Layout>
            <SEO
                title="Drum Transcripts"
                descFor={config.metaDescriptions.transcriptsPage}
            />
            <ContentCard background>
                <>
                    <article className="title">
                        <h1>No Transcripts Available At This Time</h1>
                    </article>
                </>
            </ContentCard>
        </Layout>
    )
}
