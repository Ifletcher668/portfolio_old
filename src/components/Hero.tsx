import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import SocialLinks from '../constants/socialLinks';
import Tabs from './tabs/index';
import About from './about';

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
            <main className='hero'>
                <div className='section-center hero-center'>
                    <Image fluid={fluid} className='hero-img' />
                    <article className='hero-info'>
                        <About />

                        <Link to='/contact' className='btn'>
                            Get in touch!
                        </Link>
                        <SocialLinks />
                    </article>
                </div>
            </main>
        </>
    );
};

export default Hero;
