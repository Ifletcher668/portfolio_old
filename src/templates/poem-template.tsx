import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import BackButton from '../components/back_button/backButton';

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
    const [center, setCenter] = useState<string>('center');

    const {
        poem: { title, test_body, body, author, published, tags },
    }: { [key: string]: Poem } = data;

    return (
        <Layout>
            <div className='content-page gutter'>
                <hr className='center mb-small' />
                <div className='title'>
                    <h2>{title}</h2>
                </div>
                <div className={`${center} mb-small`}>
                    <article
                        className='poem-body'
                        dangerouslySetInnerHTML={{ __html: test_body }}></article>
                </div>
                <div className='title'>
                    <h3>
                        By {author}, {published}
                    </h3>
                </div>
                <div>
                    <hr className='center mb-small' />
                </div>
                <div className='tags'>
                    {tags.map(({ tag }, idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <span className='tag'>{tag} </span>
                            </React.Fragment>
                        );
                    })}
                </div>
                <BackButton />
            </div>
        </Layout>
    );
};
