import React, {useEffect} from 'react'
import Image from 'gatsby-image'
import {Link} from 'gatsby'
import {Header} from '../titles/titles'
import config from '../../../config/website'

const Blog: React.FC<IBlogLinks> = (props: IBlogLinks) => {
    const {title, author, preview, published, slug, image, tags} = props

    let clippedPreview = ''

    for (let i = 0; i < 200; i++) {
        if (preview[i] === undefined) break
        clippedPreview += preview[i]
    }
    clippedPreview += '...'

    let maxLenTitle = 30
    let clippedTitle = ''

    if (title.length > maxLenTitle) {
        for (let i = 0; i < maxLenTitle; i++) {
            if (title[i] === undefined) break
            if (i === maxLenTitle - 1) {
                clippedTitle += '...'
                break
            }
            clippedTitle += title[i] as string
        }
    } else clippedTitle = title

    return (
        <Link
            to={`${config.routes.journal}${slug}`}
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
                        title={
                            typeof author === 'undefined'
                                ? "by 'anonymous'"
                                : author
                        }
                        center={false}
                        major={false}
                    />
                    <p>{clippedPreview}</p>
                </div>
            </article>
        </Link>
    )
}

export default Blog
