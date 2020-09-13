import { graphql, useStaticQuery } from 'gatsby';

export const useStrapiContent = () => {
    const data = useStaticQuery(graphql`
        {
            allStrapiBlogs {
                blogs: nodes {
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
                    createdAt
                    updatedAt
                }
            }

            allStrapiPoems {
                poems: nodes {
                    title
                    body
                    author
                    published
                    tags {
                        tag
                    }
                    slug
                    createdAt
                    updatedAt
                }
            }
        }
    `);
    return data;
};
