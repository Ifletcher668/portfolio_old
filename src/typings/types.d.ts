// content types

type haiku = {
    line1: string;
    line2: string;
    line3: string;
};

type poemNodePositionStyles = {
    top: number;
    left: number;
};

// writing content
type Tags = {
    tag: string;
};

// blogs
type Blog = {
    title: string;
    author: string;
    body: string;
    preview: string;
    image: GatsbyImageSharp;
    published: string;
    tags: Tags[];
    slug: string;
    createdAt: string;
    updatedAt: string;
};

// poetry
type Poem = {
    title: string;
    body: string;
    test_body: any;
    author: string;
    published: string;
    tags: Tags[];
    slug: string;
    createdAt: string;
    updatedAt: string;
};

// portfolio
type Section = {
    title: string;
    body: string;
};

type Portfolio = {
    section: Section[];
    tags: Tags[];
};

// gatsby objects
type GatsbyImageSharp = {
    childImageSharp: ChildImageSharp;
};

type ChildImageSharp = {
    fluid: Fluid;
};

type Fluid = {
    aspectRatio: number;
    base64: string;
    sizes: string;
    src: string;
    srcSet: string;
};

// services

type Service = {
    icon: JSX.Element;
    title: string;
    text: string;
    type: string;
    url: string;
};
