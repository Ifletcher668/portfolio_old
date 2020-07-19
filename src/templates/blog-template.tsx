import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout';
import { Title, SubTitle } from '../components/titles';

const BlogTemplate: React.FC = ({ data }: { [key: string]: any }) => {
    const {
        blog: { title, body, author, tag, date, image },
    }: { [key: string]: Blog } = data;

    return (
        <Layout>
            <section className='blog-template'>
                <div className='section-center'>
                    <Title title={title} />
                    <SubTitle title={`by ${author}, ${date}`} />
                    <Image fluid={image.childImageSharp.fluid} /> <br />
                    <article className='blog-content'>{body}</article>
                    {tag.map(({ tag }, idx) => {
                        return <span key={idx}>{tag} </span>;
                    })}
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query GetSingleBlog($slug: String) {
        blog: strapiBlogs(slug: { eq: $slug }) {
            title
            body
            author
            tags {
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
        }
    }
`;

export default BlogTemplate;
