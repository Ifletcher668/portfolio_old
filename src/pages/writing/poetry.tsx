import React from 'react';
import Layout from '../../components/layout/layout';
import { graphql } from 'gatsby';
import Content from '../../components/content/writtenContent';
import SEO from '../../components/SEO/SEO';

export const query = graphql`
    {
        allPoetry: allStrapiPoems {
            poems: nodes {
                title
                body
                author
                published
                tags {
                    tag
                }
                slug
            }
        }
    }
`;

export default ({ data }: { [key: string]: any }) => {
    const {
        allPoetry: { poems },
    }: { allPoetry: { [key: string]: Poem[] } } = data;

    return (
        <Layout>
            <SEO title='Poetry' descFor='poetryPage' />
            <section className='blog-page'>
                <Content poetry={poems} title='poetry' showLink={false} />
            </section>
        </Layout>
    );
};
