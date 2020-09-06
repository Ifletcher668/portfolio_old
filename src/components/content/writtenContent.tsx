import React from 'react';
import Blog from '../blog/blog';
import Poem from '../poem/poem';
import { Link } from 'gatsby';

export const Blogs: React.FC<IWrittenContent> = (props: IWrittenContent) => {
    const { blogs, poetry, title, showLink } = props;

    const pastMonth = new Date().getMonth() - 1;

    const handleContentType = () => {
        if (blogs && !poetry) return blogs.map((blog, idx) => <Blog key={idx} {...blog} />);
        else if (poetry && !blogs) return poetry.map((poem, idx) => <Poem key={idx} {...poem} />);
        else if (poetry && blogs) {
            // all recent posts
            return (
                <>
                    {blogs.map((blog, idx) => (
                        // blog.createdAt >
                        <Blog key={idx} {...blog} />
                    ))}
                    {poetry.map((poem, idx) => (
                        <Poem key={idx} {...poem} />
                    ))}
                </>
            );
        }
    };

    return (
        <section className=' section gutter'>
            <h1>{title}</h1>
            <div className='section-center'>{handleContentType()}</div>
            {showLink && (
                <Link to={`${blogs ? '/writing/blogs' : '/writing/poetry'}`} className='btn center-btn'>
                    {blogs ? 'All Blogs' : 'All Poetry'}
                </Link>
            )}
        </section>
    );
};
export default Blogs;
