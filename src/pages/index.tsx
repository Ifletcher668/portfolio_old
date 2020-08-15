import React from 'react';
import Image from 'gatsby-image';
import Layout from '../components/layout/layout';
import { graphql, useStaticQuery, Link } from 'gatsby';

import SocialLinks from '../components/social_links/socialLinks';
import SEO from '../components/SEO/SEO';

const query = graphql`
    {
        file(relativePath: { eq: "cover-photo.png" }) {
            image: childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default () => {
    const {
        file: {
            image: { fluid },
        },
    } = useStaticQuery(query);

    return (
        <Layout id='index-page' className='hero'>
            <SEO title='Home' descFor='homepage' />
            <div className='hero-center gutter'>
                <Image fluid={fluid} className='hero-img' />
                <article className='hero-info card no-hover no-placement'>
                    <h1>I'm Isiah</h1>
                    <h4>I am:</h4>
                    <h4>
                        <span>A drummer.</span> A timekeeper. A lyricist. The co-founder of a band,
                        Aterrima. An amateur audio engineer. A poet. A content writer. A software
                        connoisseur. A web developer. A software engineer. A gamer. A hiker. A
                        bicyclist. A kayaker. A reader. A somewhere-between-a-taoist-and-buddhist. A
                        learner. A graduate of the University of Idaho. A graduate of the Coding
                        Dojo. On Instagram
                        <a
                            className='text-link'
                            href='https://www.instagram.com/fletchmydrumsticks/?hl=en'
                            target='_blank'>
                            {' '}
                            here.
                        </a>{' '}
                        On Facebook{' '}
                        <a
                            className='text-link'
                            href='https://www.facebook.com/fletchmydrumsticks'
                            target='_blank'>
                            here.
                        </a>{' '}
                        On Github{' '}
                        <a
                            className='text-link'
                            href='https://github.com/Ifletcher668?tab=repositories'
                            target='_blank'>
                            {' '}
                            here.
                        </a>{' '}
                    </h4>
                    {/* <Link to='/contact' className='btn'>
                        Get in touch!
                    </Link>
                    <SocialLinks /> */}
                </article>
            </div>
        </Layout>
    );
};
