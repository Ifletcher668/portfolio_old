import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import metaDescription from '../../constants/metaDescriptions';
interface ISEOProps {
    title: string;
    htmlAttributes?: { [key: string]: string };
    descFor?: string;
    // title: string;
    // title: string;
}

const query = graphql`
    {
        site {
            siteMetadata {
                siteAuthor: author
                siteDescription: description
                siteUrl
                siteTitle: title
            }
        }
    }
`;

const SEO: React.FC<ISEOProps> = (props: ISEOProps) => {
    const { title, htmlAttributes, descFor } = props;
    const {
        site: { siteMetadata },
    } = useStaticQuery(query);

    const { siteAuthor, siteDescription, siteUrl, siteTitle } = siteMetadata;

    return (
        <Helmet
            title={`${title} | ${siteTitle}`}
            htmlAttributes={{ lang: 'en', ...(htmlAttributes || '') }}>
            <meta name='description' content={metaDescription[descFor!] || siteDescription} />
        </Helmet>
    );
};

export default SEO;
