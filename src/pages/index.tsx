import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import Tabs from '../components/tabs/index';

export default ({ data }: { [key: string]: any }) => {
    console.log(data);

    const {
        blogs: { nodes: blogs },
    }: { blogs: { [key: string]: Blog[] } } = data;

    return (
        <>
            <Layout>
                <Hero />
                {/* <Services />
            <Jobs />
            <Blogs posts={blogs} title='Latest Articles' showLink /> */}
            </Layout>
        </>
    );
};

export const query = graphql`
    {
        blogs: allStrapiBlogs(limit: 3, sort: { fields: date, order: DESC }) {
            nodes {
                title
                author
                body
                slug
                tag {
                    tag
                }
                date(formatString: "DD MMMM, YYYY")
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
