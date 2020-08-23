import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/SEO/SEO";

export default (props: IProps) => {
    return (
        <Layout>
            <SEO title="Drum Transcripts" descFor="transcriptsPage" />
            <div className="content-page gutter">
                <div className="title">
                    <h1>Currently Unavailable</h1>
                </div>
            </div>
        </Layout>
    );
};
