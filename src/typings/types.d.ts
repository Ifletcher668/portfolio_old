// content types

type haiku = {
    line1: string
    line2: string
    line3: string
}

type poemNodePositionStyles = {
    top: number
    left: number
}

// writing content
type Tags = {
    tag: string
}

// blogs
type PostImage = {
    imageFile
}
type Quote = {
    quote: string
}
type Author = {
    username: string
    email: string
}

type Blog = {
    slug: string
    authors: Author[]
    title: string
    cover_image: PostImage
    content: any
    link_to_biography: string
    quote: Quote[]
    preview: string
    image: GatsbyImageSharp
    tags: Tags[]
    published: string
    createdAt: string
    updatedAt: string
}

// poetry
type Poem = {
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

// portfolio
type Section = {
    title: string
    body: string
}

type Portfolio = {
    section: Section[]
    tags: Tags[]
}

// gatsby objects
type GatsbyImageSharp = {
    childImageSharp: ChildImageSharp
}

type ChildImageSharp = {
    fluid: Fluid
}

type Fluid = {
    aspectRatio: number
    base64: string
    sizes: string
    src: string
    srcSet: string
}

// services

type Service = {
    icon: JSX.Element
    title: string
    text: string
    type: string
    url: string
}
