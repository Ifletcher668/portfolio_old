import React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import Blogs from '../../components/blogs';
// ...GatsbyImageSharpFluid

export default ({ data }: { [key: string]: any }) => {
    const {
        allStrapiBlogs: { nodes: blogs },
    }: { allStrapiBlogs: { [key: string]: Blog[] } } = data;

    return (
        <Layout>
            <section className='blog-page'>
                <Blogs blogs={blogs} title='blog' showLink={false} />
            </section>
        </Layout>
    );
};

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
                date(formatString: "DD MMM, YYYY")
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
