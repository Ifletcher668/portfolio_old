import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'
import config from '../../../config/website'
interface ISEOProps {
    title: string
    htmlAttributes?: {[key: string]: string}
    descFor?: string
    // meta: any[]
}

const SEO: React.FC<ISEOProps> = ({
    title,
    htmlAttributes,
    descFor,
}: // meta,
ISEOProps) => {
    return (
        <Helmet
            title={title}
            titleTemplate={`%s | ${config.siteTitle}`}
            htmlAttributes={{
                lang: `${config.lang}`,
                ...(htmlAttributes || ''),
            }}
            meta={[
                {
                    name: `description`,
                    content: descFor || config.siteDescription,
                },
                {
                    name: `charSet`,
                    content: 'utf-8',
                },
                {
                    property: `og:title`,
                    content: `${config.siteTitle}: ${config.siteTitleAlt}`,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
            ]}
        >
            {/* <meta charSet="utf-8" /> */}
            {/* <meta name="description" content={descFor || siteDescription} /> */}
        </Helmet>
    )
}

export default SEO
