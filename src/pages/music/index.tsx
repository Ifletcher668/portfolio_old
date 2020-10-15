import React from 'react'
import Services from '../../components/Services'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO/SEO'
import {useImageQuery} from '../../graphql/queries/images'
import Image from 'gatsby-image'
import ContentCard from '../../components/Content'
import {Header} from '../../components/Titles'
import config from '../../../config/website'
import {Link} from 'gatsby'

export default (props: IProps) => {
    const {drummingCloseupImage} = useImageQuery()

    const startedDrumming = 2007
    const today = new Date().getFullYear()
    const yearsSinceIStartedDrumming = today - startedDrumming

    return (
        <Layout>
            <SEO
                title={config.metaDescriptions.music.title}
                descFor={config.metaDescriptions.music.description}
            />
            <Services type="music" title={`My Music`}>
                <ContentCard background>
                    <>
                        <Header
                            value={3}
                            center
                            title="Drummer | Lyricist"
                            major
                        />
                        <Image
                            fluid={drummingCloseupImage.childImageSharp.fluid}
                        />
                        <p>
                            Music is an enrichment to my life, and throughout
                            the past {yearsSinceIStartedDrumming} years, I have
                            sought after the best methods to enhance the lives
                            of others with my music. I'm a drummer and play in
                            two metal bands: Aterrima and Weald & Woe.
                        </p>
                        <p>
                            Progress, to me, means the embracement and voracious
                            consumption of great works of the past, and the
                            synthesis of it all into future-looking pieces. We
                            may not always be able to innovate, but we strive to
                            be different, better, than we were in the past.
                        </p>
                        <p>
                            I listen a myriad of musical styles and work to
                            incorporate them into my playing. The result is a
                            blend of extreme metal and modern world drumming.
                            The drums have always been a signal, a primal
                            communicator, the original telephone. As both a
                            musician and{' '}
                            <Link to={config.routes.writing}>writer</Link>, I
                            value crafting a narrative. I believe that strong
                            narration, told through the drum set, is the best
                            way to bring value into this world.
                        </p>
                    </>
                </ContentCard>
            </Services>
        </Layout>
    )
}
