import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import { Title, SubTitle } from '../components/titles/titles';

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
            {/* <Title title={`${title}`} /> */}
            <div className='portfolio-page gutter'>
                {/* <SubTitle title={subTitle} /> */}
                <aside className='portfolio-tags'>
                    {stack.map(({ tag }, idx) => {
                        return (
                            <Fragment key={idx}>
                                <p>{tag}</p>
                            </Fragment>
                        );
                    })}
                </aside>
                <article className='portfolio'>
                    {paragraph.map(({ subTitle, body }, idx) => {
                        return (
                            <Fragment key={idx}>
                                <SubTitle title={subTitle} />
                                <div className='section'>{body}</div>
                            </Fragment>
                        );
                    })}
                </article>
            </div>
        </Layout>
    );
};
