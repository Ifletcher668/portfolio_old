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

export const useCoverPhoto = () => {
    const ImageData = useStaticQuery(graphql`
        query {
            coverImage: file(relativePath: { eq: "cover-photo.png" }) {
                ...FluidImage
            }
        }
    `);

    return ImageData;
};
