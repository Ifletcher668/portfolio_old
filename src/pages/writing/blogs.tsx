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
