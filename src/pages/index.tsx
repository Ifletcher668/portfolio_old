import React from 'react';
import Image from 'gatsby-image';
import Layout from '../components/layout/layout';
import { graphql, useStaticQuery, Link } from 'gatsby';

import SocialLinks from '../components/social_links/socialLinks';

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
            <>
                <div className='hero-center gutter'>
                    <Image fluid={fluid} className='hero-img' />
                    <article className='hero-info card no-hover no-placement'>
                        <h1>I'm Isiah</h1>
                        <h4>I'm:</h4>
                        <h4>
                            <span>A drummer.</span> A timekeeper. A poet. A lyricist. The co-founder
                            of a band, Aterrima. A software connoisseur. An amateur audio engineer.
                            A gamer. A hiker. A bicyclist. A
                            somewhere-between-a-taoist-and-buddhist. A graduate of the University of
                            Idaho. A graduate of the Coding Dojo. A web developer. On Instagram
                            <a
                                href='https://www.instagram.com/fletchmydrumsticks/?hl=en'
                                target='_blank'>
                                {' '}
                                here.
                            </a>{' '}
                            On Facebook{' '}
                            <a href='https://www.facebook.com/fletchmydrumsticks' target='_blank'>
                                here.
                            </a>{' '}
                            On Github{' '}
                            <a
                                href='https://github.com/Ifletcher668?tab=repositories'
                                target='_blank'>
                                {' '}
                                here.
                            </a>{' '}
                        </h4>
                        <Link to='/contact' className='btn'>
                            Get in touch!
                        </Link>
                        <SocialLinks />
                    </article>
                </div>
            </>
        </Layout>
    );
};
