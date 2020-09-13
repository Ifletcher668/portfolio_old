import React from 'react'
import Services from '../../components/services/services'
import Layout from '../../components/layout/layout'
import SEO from '../../components/SEO/SEO'
import {useImageQuery} from '../../graphql/queries/images'
import Image from 'gatsby-image'
import ContentCard from '../../components/content/content'
import {Header} from '../../components/titles/titles'
import config from '../../../config/website'

export default (props: IProps) => {
    const {drummingCloseupImage} = useImageQuery()
    return (
        <Layout>
            <SEO
                title="Music Resources"
                descFor={config.metaDescriptions.musicPage}
            />
            <Services type="music" title={`My Music`}>
                <ContentCard>
                    <>
                        <Header
                            value={3}
                            center
                            title="Drummer | Lyricist"
                            major
                        />
                        <Image
                            fluid={drummingCloseupImage.childImageSharp.fluid}
                            style={{width: '600px', height: '450px'}}
                            className="center"
                        />
                    </>
                </ContentCard>
            </Services>
        </Layout>
    )
}
