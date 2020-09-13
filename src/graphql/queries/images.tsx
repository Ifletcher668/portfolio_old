import { graphql, useStaticQuery } from 'gatsby';

export const ImageFragment = graphql`
    fragment FluidImage on File {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

// hero image
export const useImageQuery = () => {
    const data = useStaticQuery(graphql`
        query {
            coverImage: file(relativePath: { eq: "cover-photo.png" }) {
                ...FluidImage
            }

            teaImage: file(relativePath: { eq: "oriento-unsplash.jpg" }) {
                ...FluidImage
            }
        }
    `);
    return data;
};
