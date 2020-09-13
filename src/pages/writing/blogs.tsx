import React from 'react';
import Layout from '../../components/layout/layout';
import Content from '../../components/content/writtenContent';
import SEO from '../../components/SEO/SEO';
import { useStrapiContent } from '../../graphql/queries/strapi';

export default () => {
    const {
        allStrapiBlogs: { blogs },
    } = useStrapiContent();

    return (
        <Layout>
            <SEO title='Blogs' />
            <section className='blog-page'>
                <Content blogs={blogs} title='blog' showLink={false} />
            </section>
        </Layout>
    );
};
