import React from 'react'
import Services from '../../components/services/services'
import Layout from '../../components/layout/layout'
import SEO from '../../components/SEO/SEO'
import Image from 'gatsby-image'
import {useImageQuery} from '../../graphql/queries/images'
import ContentCard from '../../components/content/content'
import config from '../../../config/website'

export default (props: IProps) => {
    const {teaImage} = useImageQuery()

    return (
        <Layout>
            <SEO
                title={config.metaDescriptions.writing.title}
                descFor={config.metaDescriptions.writing.description}
            />

            <Services type="writing" title={`My Writing`}>
                <ContentCard background>
                    <>
                        <Image
                            fluid={teaImage.childImageSharp.fluid}
                            style={{height: '450px'}}
                        />
                        <p>
                            When you steep the silence between what was and what
                            aught to be, you find only the immediacy of the
                            present. Each moment is, in essence, a combination
                            of past exhalations and little breaths of the
                            future. When a moment lives and ages, matures and
                            dies, it leaves only memory behind; in memory, new
                            seeds grow into new moments and new revelations.
                        </p>
                        <p>
                            When I began writing in 2013, I had only seedling
                            interest, watered by spontaneous decisions and
                            sticking to them. I was a sophomore in college,
                            yearning to understand myself. Poetry began as a
                            sort of self-discipline, but shifted into
                            self-expression. Through writing I explored the
                            experiences that perplexed or haunted or brought me
                            joy.
                        </p>
                        <p>
                            Here is a collection of self-expressions. Like tea
                            each piece is bitter, strong, earthy, sweet,
                            unique—yet a synthesis of all the knowledge I glean
                            from the wonderful others around whom I surround
                            myself. I write to delve into the depths of
                            philosophy, spirituality, technology, and, most of
                            all, myself. 
                        </p>
                    </>
                </ContentCard>
            </Services>
        </Layout>
    )
}
