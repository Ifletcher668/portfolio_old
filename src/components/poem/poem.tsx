import React, { useEffect } from 'react';
import { Link } from 'gatsby';

const Poem: React.FC<IPoetryLinks> = (props: IPoetryLinks) => {
    const { title, author, published, slug, tags } = props;

    let maxLen = 20;
    let newTitle = '';

    if (title.length > maxLen) {
        for (let i = 0; i < maxLen; i++) {
            if (i === maxLen - 1) {
                newTitle += '...';
                break;
            }
            newTitle += title[i] as string;
        }
    } else newTitle = title;

    return (
        <Link to={`/writing/poetry/${slug}`} key={title} className='blog'>
            <article>
                <div className='card content-card'>
                    <h2>{newTitle}</h2>
                    <h4>by {author}</h4>
                    <div className='card-footer'>
                        {tags.map(({ tag }, idx) => {
                            return <p key={idx}>{tag}</p>;
                        })}
                    </div>
                    <p>{published}</p>
                </div>
            </article>
        </Link>
    );
};

export default Poem;
