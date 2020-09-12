import React from "react";
import Services from "../../components/services/services";
import Layout from "../../components/layout/layout";
import SEO from "../../components/SEO/SEO";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

// for base writing page
export const useTeaPhoto = () => {
    const ImageData = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "oriento-unsplash.jpg" }) {
                ...MediumFluidImage
            }
        }
    `);

    return ImageData;
};

export default (props: IProps) => {
    const { image } = useTeaPhoto();

    return (
        <Layout>
            <SEO title="Writing Resources" descFor="writingPage" />
            <Image
                fluid={image.childImageSharp.fluid}
                style={{ width: "400px", height: "450px" }}
                className="center"
            />
            <Services type="writing" title={`My Writing`} />
        </Layout>
    );
};
