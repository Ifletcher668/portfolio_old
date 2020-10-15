import React from 'react'
import Blog from './Content/blog'
import Poem from './Content/poem'
import {Link} from 'gatsby'
import {Header} from '../Titles'
import config from '../../../config/website'

interface IWrittenContent extends IProps {
    blogs?: Blog[]
    poetry?: Poem[]
    showLink: boolean
    showRecentPosts?: boolean
}

const mapPoetry = (poetry: Poem[]) =>
    poetry.map(poem => <Poem key={poem.title} {...poem} />)

const mapBlogs = (blogs: Blog[]) =>
    blogs.map(blog => <Blog key={blog.title} {...blog} />)

export const Blogs: React.FC<IWrittenContent> = (props: IWrittenContent) => {
    const {blogs, poetry, title, showLink} = props

    const displayContent = () => {
        if (blogs && !poetry) return mapBlogs(blogs)
        else if (poetry && !blogs) return mapPoetry(poetry)
        else if (poetry && blogs) return mapBlogs(blogs) && mapPoetry(poetry)
        else return ''
    }

    return (
        <section>
            {title && <Header value={1} center major title={title} />}
            <div className="section-center">{displayContent()}</div>
            {showLink && (
                <Link
                    to={`${
                        blogs ? config.routes.journal : config.routes.poetry
                    }`}
                    className="btn center-btn"
                >
                    {blogs ? 'All Journal Entries' : 'All Poetry'}
                </Link>
            )}
        </section>
    )
}

export default Blogs
