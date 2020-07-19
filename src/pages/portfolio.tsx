import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Title, SubTitle } from '../components/titles';

type Paragraph = {
    sub_title: string;
    body: string;
};

type Stack = {
    tag: string;
};

type Portfolio = {
    title: string;
    sub_title: string;
    paragraph: Paragraph[];
    stack: Stack[];
};

export const query = graphql`
    {
        portfolio: allStrapiPortfolio {
            content: nodes {
                title
                sub_title
                paragraph {
                    sub_title
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

    const { title, sub_title, paragraph, stack } = content[0];

    return (
        <Layout>
            <Title title={title} />
            <SubTitle title={sub_title} />
            <div className='section-center'>
                {paragraph.map(({ sub_title, body }, idx) => {
                    return (
                        <Fragment key={idx}>
                            <SubTitle title={sub_title} />
                            <div className='section'>{body}</div>
                        </Fragment>
                    );
                })}
            </div>
            <div className='section-center'>
                {stack.map(({ tag }, idx) => {
                    return (
                        <div key={idx} className='portfolio-tags'>
                            <p>{tag}</p>
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
};
