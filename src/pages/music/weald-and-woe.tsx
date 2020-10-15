import React from 'react'
import Image from 'gatsby-image'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO/SEO'
import ContentCard from '../../components/Content'
import config from '../../../config/website'
import {Header} from '../../components/Titles'
import {useImageQuery} from '../../graphql/queries/images'
import BackButton from '../../components/BackButton'

export default (props: IProps) => {
    const {wealdAndWoeCoverImage} = useImageQuery()
    return (
        <Layout>
            <SEO
                title={config.metaDescriptions.wealdAndWoe.title}
                descFor={config.metaDescriptions.wealdAndWoe.description}
            />
            <ContentCard background>
                <>
                    <Header
                        value={1}
                        center={false}
                        title={`Weald and Woe`}
                        major
                    />
                    <Image
                        fluid={wealdAndWoeCoverImage.childImageSharp.fluid}
                    />
                    <p>
                        Weald and Woe is a one-man Black Metal project from
                        Boise, Idaho. I simply embody the music in a live
                        setting.{' '}
                        <a href="https://wealdandwoe.bandcamp.com/?fbclid=IwAR0Ckk0ZxCD1DUFm6UOOwUp-7gmxGgWiQRqFqZFQQBBbGbv3rp1xwq3hbk0">
                            Find the music on Bandcamp here
                        </a>{' '}
                        and connect on facebook{' '}
                        <a href="https://www.facebook.com/wealdandwoe/about/?ref=page_internal">
                            here!
                        </a>
                    </p>
                </>
            </ContentCard>
        </Layout>
    )
}
