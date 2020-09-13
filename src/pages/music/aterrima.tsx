import React from 'react'
import Image from 'gatsby-image'
import Layout from '../../components/layout/layout'
import SEO from '../../components/SEO/SEO'
import ContentCard from '../../components/content/content'
import config from '../../../config/website'
import {Header} from '../../components/titles/titles'
import {useImageQuery} from '../../graphql/queries/images'

export default (props: IProps) => {
    const {aterrimaOnStageImage} = useImageQuery()
    return (
        <Layout>
            <SEO
                title="Aterrima"
                descFor={config.metaDescriptions.aterrimaPage}
            />
            <ContentCard>
                <>
                    <Header value={1} center title={`Aterrima`} major />
                    <Image fluid={aterrimaOnStageImage.childImageSharp.fluid} />
                    <article className="paragraph">
                        The word, Aterrima (pronounced A-terre-eh-mah),
                        references the darkest, coldest hue of black imaginable,
                        with which unparalleled affliction, sorrow, and pain is
                        frequently associated. Our world, our way of life,
                        cannot endure our current pace. But it is our goal that
                        our work as Earth’s stewards will reinvoke Nature’s
                        reign: Destabilize humanity's anthropocentric past to
                        ensure a universally connected future.
                    </article>

                    <article className="paragraph">
                        We believe that a new balance can be achieved, but that
                        it, like the art of playing music itself, requires
                        dynamic vigilance and effortless change. The themes
                        woven into Aterrima’s music are largely centered around
                        the imbalance between humankind and our natural world.
                        Drawing from Metal’s darkness and complexity, Aterrima’s
                        eclectic, experimental approach to music incorporates
                        near-endless influence and exploration to achieve that
                        balance. From Boise, Idaho, Aterrima formed in August,
                        2017. The band is backed by over a decade of music
                        performance, study and composition.
                    </article>
                </>
            </ContentCard>
        </Layout>
    )
}
