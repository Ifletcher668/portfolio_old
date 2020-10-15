import {graphql, useStaticQuery} from 'gatsby'

export const ImageFragment = graphql`
    fragment FluidImage on File {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

// hero image
export const useImageQuery = () => {
    const data = useStaticQuery(graphql`
        query {
            coverImage: file(relativePath: {eq: "images/cover-photo.png"}) {
                ...FluidImage
            }

            teaImage: file(relativePath: {eq: "images/oriento-unsplash.jpg"}) {
                ...FluidImage
            }

            aterrimaOnStageImage: file(
                relativePath: {eq: "images/aterrima-on-stage.jpg"}
            ) {
                ...FluidImage
            }

            drummingCloseupImage: file(
                relativePath: {eq: "images/closeup-drumming.jpg"}
            ) {
                ...FluidImage
            }

            wealdAndWoeCoverImage: file(
                relativePath: {
                    eq: "images/weald-and-woe-the-fates-of-kings-and-men.jpg"
                }
            ) {
                ...FluidImage
            }
        }
    `)
    return data
}
