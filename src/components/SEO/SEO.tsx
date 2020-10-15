import React from 'react'
import {Helmet} from 'react-helmet'
import config from '../../../config/config.js'

interface ISEOProps {
    title: string
    htmlAttributes?: {[key: string]: string}
    descFor?: string
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
        ></Helmet>
    )
}

export default SEO
