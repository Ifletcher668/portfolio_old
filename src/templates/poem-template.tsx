import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import { Title, SubTitle } from '../components/titles/titles';

export const query = graphql`
    query GetSinglePoem($slug: String) {
        poem: strapiPoems(slug: { eq: $slug }) {
            title
            body
            test_body
            author
            published
            tags {
                tag
            }
        }
    }
`;

export default ({ data }: { [key: string]: any }) => {
    const {
        poem: { title, test_body, body, author, published, tags },
    }: { [key: string]: Poem } = data;

    console.log(test_body);

    return (
        <Layout>
            <Title title={title} />
            <div className='poem'>
                <article
                    className='align-left'
                    dangerouslySetInnerHTML={{ __html: test_body }}></article>
            </div>

            <hr />
            <div>
                <h3>
                    By {author}, {published}
                </h3>
            </div>
            <div className='tags'>
                <SubTitle title='tags' />
                {tags.map(({ tag }, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <span className='tag'>{tag} </span>
                        </React.Fragment>
                    );
                })}
            </div>
        </Layout>
    );
};
