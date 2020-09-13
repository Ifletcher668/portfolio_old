import React, {ReactChildren} from 'react'
import Blog from '../cards/blog'
import Poem from '../cards/poem'
import {Link} from 'gatsby'
import {Header} from '../titles/titles'

interface IWrittenContent extends IProps {
    blogs?: Blog[]
    poetry?: Poem[]
    showLink: boolean
    showRecentPosts?: boolean
}

const mapPoetry = (poetry: Poem[]) => {
    return poetry.map(poem => <Poem key={poem.title} {...poem} />)
}

const mapBlogs = (blogs: Blog[]) => {
    return blogs.map(blog => <Blog key={blog.title} {...blog} />)
}

export const Blogs: React.FC<IWrittenContent> = (props: IWrittenContent) => {
    const {blogs, poetry, title, showLink} = props

    // const pastMonth = new Date().getMonth() - 1;

    const handleContentType = () => {
        if (blogs && !poetry) return mapBlogs(blogs)
        else if (poetry && !blogs) return mapPoetry(poetry)
        else if (poetry && blogs) return mapBlogs(blogs) && mapPoetry(poetry)
        else return ''
    }

    return (
        <section className=" section gutter">
            {title && <Header value={1} center major title={title} />}
            <div className="section-center">{handleContentType()}</div>
            {showLink && (
                <Link
                    to={`${blogs ? '/writing/blogs' : '/writing/poetry'}`}
                    className="btn center-btn"
                >
                    {blogs ? 'All Blogs' : 'All Poetry'}
                </Link>
            )}
        </section>
    )
}
export default Blogs
