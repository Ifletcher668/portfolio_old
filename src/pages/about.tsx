import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import Title from '../components/Title';
import Image from 'gatsby-image';
// ...GatsbyImageSharpFluid

const query = graphql`
    query {
        about: allStrapiAbout {
            nodes {
                title
                body
                stacks {
                    tag
                }
            }
        }
    }
`;
type Stack = {
    tag: string;
};

type Content = {
    title: string;
    body: string;
    stacks: Stack[];
};

const About: React.FC<IProps> = (props: IProps) => {
    const data = useStaticQuery(query);
    const {
        about: { nodes: content },
    }: { about: { [key: string]: Content[] } } = data;

    const { title, body, stacks } = content[0];

    return (
        <Layout>
            <section className='about-page'>
                <div className='section-center about-center'>
                    <article className='about-text'>
                        <Title title={title} />
                        <p>{body}</p>
                        <div className='about-stack'>
                            {stacks.map((stack, idx) => {
                                return <span key={idx}>{stack.tag}</span>;
                            })}
                        </div>
                    </article>
                </div>
            </section>
        </Layout>
    );
};

export default About;
