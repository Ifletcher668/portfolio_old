import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import SocialLinks from '../../constants/socialLinks';

const query = graphql`
    {
        file(relativePath: { eq: "cover-photo.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const Hero: React.FC<IProps> = (props: IProps) => {
    const {
        file: {
            childImageSharp: { fluid },
        },
    } = useStaticQuery(query);

    return (
        <>
            <div className='hero-center gutter'>
                <Image fluid={fluid} className='hero-img' />
                <article className='hero-info card no-hover no-placement'>
                    <h1>I'm Isiah</h1>
                    <h4>I'm:</h4>
                    <h4>
                        <span>A drummer.</span> A timekeeper. A poet. A lyricist. The co-founder of
                        a band, Aterrima. A software connoisseur. An amateur audio engineer. A
                        gamer. A hiker. A bicyclist. A somewhere-between-a-taoist-and-buddhist. A
                        graduate of the University of Idaho. A graduate of the Coding Dojo. A web
                        developer. On Instagram
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
                        <a href='https://github.com/Ifletcher668?tab=repositories' target='_blank'>
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
    );
};

export default Hero;
