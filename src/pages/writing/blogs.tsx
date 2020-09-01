import React from 'react';
import Layout from '../../components/layout/layout';
import { graphql } from 'gatsby';
import Content from '../../components/content/writtenContent';
import SEO from '../../components/SEO/SEO';

export const query = graphql`
    {
        allStrapiBlogs {
            nodes {
                title
                author
                body
                slug
                tags {
                    tag
                }
                published(formatString: "DD MMM, YYYY")
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                preview
            }
        }
    }
`;

export default ({ data }: { [key: string]: any }) => {
    const {
        allStrapiBlogs: { nodes: blogs },
    }: { allStrapiBlogs: { [key: string]: Blog[] } } = data;

    return (
        <Layout>
            <SEO title='Blogs' />
            <section className='blog-page'>
                <Content blogs={blogs} title='blog' showLink={false} />
            </section>
        </Layout>
    );
};
