import { graphql, useStaticQuery } from "gatsby";

export const ImageFragment = graphql`
    fragment FluidImage on File {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

export const MediumImageFragment = graphql`
    fragment MediumFluidImage on File {
        childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

// allow variable so there's only one hook

// hero image
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
