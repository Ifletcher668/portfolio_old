import React from 'react';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';
import Blogs from '../../components/Blogs';
// ...GatsbyImageSharpFluid

const Blog: React.FC<IProps> = ({ data }: { [key: string]: any }) => {
    const {
        allStrapiBlogs: { nodes: blogs },
    }: { allStrapiBlogs: { [key: string]: Blog[] } } = data;

    return (
        <Layout>
            <section className='blog-page'>
                <Blogs posts={blogs} title='blog' showLink={false} />
            </section>
        </Layout>
    );
};

export default Blog;

export const query = graphql`
    {
        allStrapiBlogs {
            nodes {
                title
                author
                body
                slug
                tag {
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
