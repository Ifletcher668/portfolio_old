import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout/layout';
import { Title, SubTitle } from '../components/titles/titles';
import SEO from '../components/SEO/SEO';
import MarkdownField from 'react-markdown';

export const query = graphql`
    query GetSingleBlog($slug: String) {
        blog: strapiBlogs(slug: { eq: $slug }) {
            title
            body
            author
            tags {
                tag
            }
            published(formatString: "DD MMMM, YYYY")
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;

const BlogTemplate: React.FC = ({ data }: { [key: string]: any }) => {
    const {
        blog: { title, body, author, tags, published, image },
    }: { [key: string]: Blog } = data;

    return (
        <Layout>
            <SEO title={`${title}, by ${author}`} />
            <section className='blog-template gutter'>
                <Title title={title} />
                <SubTitle title={`by ${author}, ${published}`} />
                <Image fluid={image.childImageSharp.fluid} /> <br />
                <MarkdownField source={body} />
                {tags.map(({ tag }, idx) => {
                    return <span key={idx}>{tag} </span>;
                })}
            </section>
        </Layout>
    );
};

export default BlogTemplate;
