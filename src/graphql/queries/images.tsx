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

// allow variable so there's only one hook
// export const useCoverPhoto = (imgUrl: string) => {
//     const ImageData = useStaticQuery(graphql`
//         query {
//             coverImage: file(relativePath: { eq: "cover-photo.png" }) {
//                 ...FluidImage
//             }
//         }
//     `);

//     return ImageData;
// };

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

// for base writing page
export const useTeaPhoto = () => {
    const ImageData = useStaticQuery(graphql`
        query {
            coverImage: file(relativePath: { eq: "oriento-unsplash.jpg" }) {
                ...FluidImage
            }
        }
    `);

    return ImageData;
};
