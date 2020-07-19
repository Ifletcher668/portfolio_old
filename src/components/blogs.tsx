import React from 'react';
import { Title } from './titles';
import Blog from './blog';
import { Link } from 'gatsby';

export const Blogs: React.FC<IWrittenContent> = (props: IWrittenContent) => {
    const { blogs, poetry, title, showLink } = props;

    const handleContentType = () => {
        if (blogs) {
            {
                blogs.map((blog, idx) => <Blog key={idx} {...blog} />);
            }
        }
        if (poetry) {
            {
                // poetry.map((poem, idx) => <Poem key={idx} {...poem} />)
            }
        }
    };
    return (
        <section className='section blogs'>
            <Title title={title} />
            <div className='section-center blogs-center'></div>
            {showLink && (
                <Link to='/blogs' className='btn center-btn'>
                    All Blogs
                </Link>
            )}
        </section>
    );
};
export default Blogs;
