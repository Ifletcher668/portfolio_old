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
    title: string
    author: string
    preview: string
    published: string
    body: string
    slug: string
    image: GatsbyImageSharp
    tags: Tag[]
}

interface IPoetryLinks extends IProps {
    title: string
    author: string
    published: string
    body: string
    slug: string
    tags: Tag[]
}

interface IPoemNode {
    poem: haiku
}
