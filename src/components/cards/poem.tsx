import React from 'react'
import {Link} from 'gatsby'
import {Header} from '../titles/titles'
import config from '../../../config/website'

const Poem: React.FC<IPoetryLinks> = (props: IPoetryLinks) => {
    const {title, author, published, slug, tags} = props

    let maxLen = 30
    let sizedTitle = ''

    if (title.length > maxLen) {
        for (let i = 0; i < maxLen; i++) {
            if (i === maxLen - 1) {
                sizedTitle += '...'
                break
            }
            sizedTitle += title[i] as string
        }
    } else sizedTitle = title

    return (
        <Link
            to={`${config.routes.poetry}${slug}`}
            key={title}
            className="card-wrapper"
        >
            <article className="card">
                <Header
                    value={3}
                    title={sizedTitle}
                    center={false}
                    major={false}
                />
                <h4>by {author}</h4>
                <div className="card-footer">
                    {tags.map(({tag}, idx) => {
                        return <p key={idx}>{tag}</p>
                    })}
                </div>
                <p>{published}</p>
            </article>
        </Link>
    )
}

export default Poem
