import React from 'react'
import {Link} from 'gatsby'
import {Header} from '../../Titles'
import config from '../../../../config/website'

import {formatDateOnSlug} from '../../../utils/formattedDates.js'
import mapAuthors from '../../../utils/mapAuthors'

const Blog: React.FC<IBlogLinks> = (props: IBlogLinks) => {
    const {title, authors, preview, published, slug} = props

    let maxLenTitle = 30
    let clippedTitle = ''

    if (title.length > maxLenTitle) {
        for (let i = 0; i < maxLenTitle; i++) {
            if (title[i] === undefined) break
            if (i === maxLenTitle - 1) {
                clippedTitle += '...'
                break
            }
            clippedTitle += title[i]
        }
    } else clippedTitle = title

    return (
        <Link
            to={`${config.routes.journal}${formatDateOnSlug(
                published,
            )}/${slug}`}
            key={title}
            className="card-wrapper"
        >
            <article>
                {/* <Image
                    fluid={image.childImageSharp.fluid}
                    className="card-img"
                /> */}
                <div className="card">
                    <Header
                        value={3}
                        title={clippedTitle}
                        center={false}
                        major={false}
                    />
                    <Header
                        value={5}
                        title={mapAuthors(authors, true)}
                        center={false}
                        major={false}
                    />
                    <p>{preview}</p>
                </div>
            </article>
        </Link>
    )
}

export default Blog
