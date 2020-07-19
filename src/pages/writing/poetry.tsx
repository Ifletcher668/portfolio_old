import React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import Content from '../../components/writtenContent';

export default ({ data }: { [key: string]: any }) => {
    const {
        allPoetry: { poems },
    }: { allPoetry: { [key: string]: Poem[] } } = data;

    return (
        <Layout>
            <section className='blog-page'>
                <Content poetry={poems} title='poetry' showLink={false} />
            </section>
        </Layout>
    );
};

export const query = graphql`
    {
        allPoetry: allStrapiPoems {
            poems: nodes {
                title
                body
                author
                published
                tags {
                    tag
                }
                slug
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
