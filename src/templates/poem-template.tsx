import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import { Title } from '../components/titles';

export default ({ data }: { [key: string]: any }) => {
    const {
        poem: { title, body, author, published, tags },
    }: { [key: string]: Poem } = data;

    console.log(body);

    return (
        <Layout>
            <Title title={title} />
            {/* <div>{body}</div> */}
        </Layout>
    );
};

export const query = graphql`
    query GetSinglePoem($slug: String) {
        poem: strapiPoems(slug: { eq: $slug }) {
            title
            body
            author
            published
            tags {
                tag
            }
        }
    }
`;
