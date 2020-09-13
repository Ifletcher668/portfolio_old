import React from 'react';
import Layout from '../../components/layout/layout';
import Content from '../../components/content/writtenContent';
import SEO from '../../components/SEO/SEO';
import { useStrapiContent } from '../../graphql/queries/strapi';

export default () => {
    const {
        allStrapiPoems: { poems },
    } = useStrapiContent();

    return (
        <Layout>
            <SEO title='Poetry' descFor='poetryPage' />
            <section className='blog-page'>
                <Content poetry={poems} title='poetry' showLink={false} />
            </section>
        </Layout>
    );
};
