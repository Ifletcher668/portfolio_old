import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';

const query = graphql`
    {
        allStrapiPortfolio {
            nodes {
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

const Portfolio: React.FC<IProps> = (props: IProps) => {
    const data = useStaticQuery(query);

    return (
        <Layout>
            <h1>Portfolio</h1>
        </Layout>
    );
};

export default Portfolio;
