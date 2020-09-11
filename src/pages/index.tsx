import React from 'react';
import Image from 'gatsby-image';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';
import Content from '../components/content/writtenContent';
import { useCoverPhoto } from '../graphql/queries/images';

import SEO from '../components/SEO/SEO';
import { Header } from '../components/titles/titles';

export const query = graphql`
    {
        allStrapiBlogs {
            blogs: nodes {
                title
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                body
                author
                published(formatString: "DD MMM, YYYY")
                slug
                tags {
                    tag
                }
                preview
                createdAt
                updatedAt
            }
        }

        allStrapiPoems {
            poems: nodes {
                title
                body
                author
                published
                tags {
                    tag
                }
                slug
                createdAt
                updatedAt
            }
        }
    }
`;

export default ({ data }: { [key: string]: any }) => {
    const {
        allStrapiBlogs: { blogs },
        allStrapiPoems: { poems },
    }: { allStrapiBlogs: { [key: string]: Blog[] }; allStrapiPoems: { [key: string]: Poem[] } } = data;

    const { coverImage } = useCoverPhoto();

    return (
        <Layout id='index-page' className='hero'>
            <SEO title='Home' descFor='homepage' />
            <div className='hero-center gutter'>
                <Image fluid={coverImage.childImageSharp.fluid} className='hero-img' />
                <article className='hero-info card no-hover no-placement'>
                    <h1>I am Isiah</h1>
                    <h4>I'm:</h4>
                    <h4>
                        <span>A drummer.</span> A timekeeper. A lyricist. The co-founder of a band, Aterrima. An amateur audio engineer. A poet. A
                        content writer. A software connoisseur. A web developer. A software engineer. A gamer. A hiker. A bicyclist. A kayaker. A
                        reader. A somewhere-between-a-taoist-and-buddhist. A learner. A graduate of the University of Idaho. A graduate of the Coding
                        Dojo. On Instagram
                        <a className='text-link' href='https://www.instagram.com/fletchmydrumsticks/?hl=en' target='_blank'>
                            {' '}
                            here.
                        </a>{' '}
                        On Facebook{' '}
                        <a className='text-link' href='https://www.facebook.com/fletchmydrumsticks' target='_blank'>
                            here.
                        </a>{' '}
                        On Github{' '}
                        <a className='text-link' href='https://github.com/Ifletcher668?tab=repositories' target='_blank'>
                            {' '}
                            here.
                        </a>{' '}
                    </h4>
                </article>
            </div>

            <Header title={`Recent Blogs`} center={true} value={2} />
            <Content blogs={blogs} showLink={true} />
            <Header title={`Recent Poems`} center={true} value={2} />
            <Content poetry={poems} showLink={true} />
        </Layout>
    );
};
