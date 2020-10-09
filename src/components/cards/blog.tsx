import React from 'react'
import Image from 'gatsby-image'
import {Link} from 'gatsby'
import {Header} from '../titles/titles'
import config from '../../../config/website'

const Blog: React.FC<IBlogLinks> = (props: IBlogLinks) => {
    const {title, author, preview, published, slug, image, tags} = props

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
                        title={title}
                        center={false}
                        major={false}
                    />
                    <Header
                        value={5}
                        title={author}
                        center={false}
                        major={false}
                    />
                    <p>{preview}</p>
                    <div className="card-footer">
                        {tags.map(({tag}, idx) => {
                            // TODO: Add a check to only allow, say, 5 tags?
                            return <p key={idx}>{tag}</p>
                        })}
                        <p>{published}</p>
                    </div>
                </div>
            </article>
        </Link>
    )
}

export default Blog
