import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import { Title, SubTitle } from '../components/titles/titles';
import SEO from '../components/SEO/SEO';
import Jobs from '../components/jobs/jobs';

type Paragraph = {
    subTitle: string;
    body: string;
};

type Stack = {
    tag: string;
};

type Portfolio = {
    title: string;
    subTitle: string;
    paragraph: Paragraph[];
    stack: Stack[];
};

export const query = graphql`
    {
        portfolio: allStrapiPortfolio {
            content: nodes {
                title
                subTitle: sub_title
                paragraph {
                    subTitle: sub_title
                    body
                }
                stack {
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

    const { title, subTitle, paragraph, stack } = content[0];

    return (
        <Layout>
            <SEO title='Software Portfolio' />
            <div className='content-page gutter'>
                <article className='portfolio'>
                    <Jobs />
                    {paragraph.map(({ subTitle, body }, idx) => {
                        return (
                            <Fragment key={idx}>
                                <SubTitle title={subTitle} />
                                <div className='section'>{body}</div>
                            </Fragment>
                        );
                    })}
                </article>
                <aside className='portfolio-tags'>
                    {stack.map(({ tag }, idx) => {
                        return (
                            <Fragment key={idx}>
                                <span>{tag}</span>
                            </Fragment>
                        );
                    })}
                </aside>
            </div>
        </Layout>
    );
};
