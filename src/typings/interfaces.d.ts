interface IProps {
    id?: string
    className?: string
    title?: string
    children?: React.ReactNode
}

interface ITab extends IProps {
    title?: string
    ref?: any
}

interface ITabs extends IProps {
    direction: string
    activePanel: any
    onActivePanelChange: Function
}

interface IBlogsPage extends IProps {
    posts: Blog[]
    showLink: boolean
}

interface IPoetryPage extends IProps {
    posts: Poem[]
    showLink: boolean
}

interface IBlogLinks extends IProps {
    slug: string
    authors: Author[]
    title: string
    cover_image: PostImage
    content: any
    link_to_biography: string
    quote: Quote
    preview: string
    tags: Tags[]
    published: string
    createdAt: string
    updatedAt: string
}

interface IPoetryLinks extends IProps {
    title: string
    body: string
    test_body: any
    author: string
    published: string
    tags: Tags[]
    slug: string
    createdAt: string
    updatedAt: string
}

interface IPoemNode {
    poem: haiku
}
