import React from "react";
import Services from "../../components/services/services";
import Layout from "../../components/layout/layout";
import SEO from "../../components/SEO/SEO";
import { useTeaPhoto } from "../../graphql/queries/images";
import Image from "gatsby-image";

export default (props: IProps) => {
    const image = useTeaPhoto();

    return (
        <Layout>
            <SEO title="Writing Resources" descFor="writingPage" />
            {/* <Image /> */}
            <Services type="writing" title={`My Writing`} />
        </Layout>
    );
};
