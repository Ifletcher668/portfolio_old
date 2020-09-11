import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import { Header, Title } from '../components/titles/titles';
import SEO from '../components/SEO/SEO';
import Jobs from '../components/jobs/jobs';
import MarkdownField from 'react-markdown';

export const query = graphql`
    {
        portfolio: allStrapiPortfolio {
            content: nodes {
                section {
                    title
                    body
                }
                tags {
                    tag
                }
            }
        }
    }
`;

export default ({ data }: { [key: string]: any }) => {
    const {
        portfolio: { content },
    }: { [key: string]: { [key: string]: Portfolio[] } } = data;

    const { section, tags } = content[0];

    return (
        <Layout>
            <SEO title='Software Portfolio' descFor='portfolio' />
            <Header title='My Work' center={true} value={1} />
            <div className='content-page gutter'>
                <div className='content-page-inner'>
                    <article
                        style={{
                            display: 'flex',
                            flexFlow: 'column wrap',
                        }}>
                        {section.map(({ title, body }, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <Title title={title} />
                                    <MarkdownField source={body} />
                                </Fragment>
                            );
                        })}
                    </article>
                    <Jobs />
                    <hr className='mb-small' />
                    <section className='tags'>
                        {tags.map(({ tag }, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <span>{tag.toLowerCase()}</span>
                                </Fragment>
                            );
                        })}
                    </section>
                    <hr className='mb-small' />
                </div>
            </div>
        </Layout>
    );
};
