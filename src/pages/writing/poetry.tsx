import React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';

export default ({ data }: { [key: string]: any }) => {
    const {
        poetry: { content },
    }: { poetry: { [key: string]: Poem[] } } = data;

    return (
        <Layout>
            <h1>Poetry</h1>
        </Layout>
    );
};

export const query = graphql`
    {
        poetry: allStrapiPoems {
            content: nodes {
                title
                body
                author
                published
                tags {
                    tag
                }
            }
        }
    }
`;

// const Blog: React.FC<IProps> = ({ data }: { [key: string]: any }) => {
//     const {
//         allStrapiBlogs: { nodes: blogs },
//     }: { allStrapiBlogs: { [key: string]: Blog[] } } = data;

//     return (
//         <Layout>
//             <section className='blog-page'>
//                 <Blogs posts={blogs} title='blog' showLink={false} />
//             </section>
//         </Layout>
//     );
// };

// export default Blog;
