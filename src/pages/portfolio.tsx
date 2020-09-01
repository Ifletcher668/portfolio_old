import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import { Title, SubTitle } from '../components/titles/titles';
import SEO from '../components/SEO/SEO';
import Jobs from '../components/jobs/jobs';

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
            <SEO title='Software Portfolio' />
            <div className='content-page gutter'>
                <article>
                    <Jobs />
                    {section.map(({ title, body }, idx) => {
                        return (
                            <Fragment key={idx}>
                                <SubTitle title={title} />
                                <div className='section'>{body}</div>
                            </Fragment>
                        );
                    })}
                </article>
                <hr className='mb-small' />
                <aside className='tags'>
                    {tags.map(({ tag }, idx) => {
                        return (
                            <Fragment key={idx}>
                                <span>{tag}</span>
                            </Fragment>
                        );
                    })}
                </aside>
                <hr className='mb-small' />
            </div>
        </Layout>
    );
};
