import React from 'react';
import { Link } from 'gatsby';

const Poem: React.FC<IPoetryLinks> = (props: IPoetryLinks) => {
    const { title, author, published, slug, tags } = props;

    return (
        <Link to={`/writing/poetry/${slug}`} key={title} className='blog'>
            <article>
                <div className='card content-card'>
                    <h4>{title}</h4>
                    <h5>by {author}</h5>
                    <div className='blog-footer'>
                        {tags.map(({ tag }, idx) => {
                            return <p key={idx}>{tag}</p>;
                        })}
                        <p>{published}</p>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default Poem;
