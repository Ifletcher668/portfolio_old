import React from 'react'
import Image from 'gatsby-image'
import Layout from '../../components/layout/layout'
import SEO from '../../components/SEO/SEO'
import ContentCard from '../../components/content/content'
import config from '../../../config/website'
import {Header} from '../../components/titles/titles'
import {useImageQuery} from '../../graphql/queries/images'

export default (props: IProps) => {
    const {wealdAndWoeCoverImage} = useImageQuery()
    return (
        <Layout>
            <SEO
                title="Aterrima"
                descFor={config.metaDescriptions.aterrimaPage}
            />
            <ContentCard>
                <>
                    <Header value={1} center title={`Weald and Woe`} />
                    <Image
                        fluid={wealdAndWoeCoverImage.childImageSharp.fluid}
                    />
                    <article className="paragraph">
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
                    </article>
                </>
            </ContentCard>
        </Layout>
    )
}
