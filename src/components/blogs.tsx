import React from 'react';
import Title from './title';
import Blog from './blog';
import { Link } from 'gatsby';

export const Blogs: React.FC<IBlogsPage> = (props: IBlogsPage) => {
    const { posts, title, showLink } = props;

    return (
        <section className='section blogs'>
            <Title title={title} />
            <div className='section-center blogs-center'>
                {posts.map((blog, idx) => (
                    <Blog key={idx} {...blog} />
                ))}
            </div>
            {showLink && (
                <Link to='/blogs' className='btn center-btn'>
                    All Blogs
                </Link>
            )}
        </section>
    );
};
export default Blogs;
