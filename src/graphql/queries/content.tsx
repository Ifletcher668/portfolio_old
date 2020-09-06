import { graphql } from 'gatsby';

export const useStrapiPoems = () => {
    const data = graphql`
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
        }
    `;
    return data;
};
