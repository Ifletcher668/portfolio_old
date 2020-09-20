import React from 'react'
import Image from 'gatsby-image'
import Layout from '../components/layout/layout'
import Content from '../components/content/writtenContent'
import {useImageQuery} from '../graphql/queries/images'
import {useStrapiContent} from '../graphql/queries/strapi'

import SEO from '../components/SEO/SEO'
import config from '../../config/website'
import {Header} from '../components/titles/titles'

export default () => {
    const {
        allStrapiBlogs: {blogs},
        allStrapiPoems: {poems},
    } = useStrapiContent()

    const {coverImage} = useImageQuery()

    return (
        <Layout id="index-page" className="hero">
            <SEO
                title={config.metaDescriptions.homepage.title}
                descFor={config.metaDescriptions.homepage.description}
            />
            <div className="hero-center gutter">
                <Image
                    fluid={coverImage.childImageSharp.fluid}
                    className="hero-img"
                />
                <article className="hero-info ">
                    <h1>I am Isiah</h1>
                    <h4>I'm:</h4>
                    <h4>
                        <span>A drummer.</span> A timekeeper. A lyricist. The
                        co-founder of a band, Aterrima. An amateur audio
                        engineer. A poet. A content writer. A software
                        connoisseur. A software developer. A gamer. A hiker. A
                        bicyclist. A kayaker. A reader. A
                        somewhere-between-a-taoist-and-buddhist. A learner. A
                        graduate of the University of Idaho. A graduate of the
                        Coding Dojo. On Instagram
                        <a
                            className="text-link"
                            href="https://www.instagram.com/fletchmydrumsticks/?hl=en"
                            target="_blank"
                        >
                            {' '}
                            here.
                        </a>{' '}
                        On Facebook{' '}
                        <a
                            className="text-link"
                            href="https://www.facebook.com/fletchmydrumsticks"
                            target="_blank"
                        >
                            here.
                        </a>{' '}
                        On Github{' '}
                        <a
                            className="text-link"
                            href="https://github.com/Ifletcher668?tab=repositories"
                            target="_blank"
                        >
                            {' '}
                            here.
                        </a>{' '}
                        Lives in Boise, Idaho.
                    </h4>
                </article>
            </div>

            <Header title={`Recent Blogs`} center={true} value={2} major />
            <Content blogs={blogs} showLink={true} />
            <Header title={`Recent Poems`} center={true} value={2} major />
            <Content poetry={poems} showLink={true} />
        </Layout>
    )
}
