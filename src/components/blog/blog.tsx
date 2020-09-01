import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const Blog: React.FC<IBlogLinks> = (props: IBlogLinks) => {
    const { title, author, preview, date, slug, image, tags } = props;

    return (
        <Link to={`/writing/blogs/${slug}`} key={title} className='blog'>
            <article>
                <Image fluid={image.childImageSharp.fluid} className='blog-img' />
                <div className='card content-card'>
                    <h4>{title}</h4>
                    <h5>{author}</h5>
                    <p>{preview}</p>
                    <div className='blog-footer'>
                        {tags.map(({ tag }, idx) => {
                            return <p key={idx}>{tag}</p>;
                        })}
                        <p>{date}</p>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default Blog;
