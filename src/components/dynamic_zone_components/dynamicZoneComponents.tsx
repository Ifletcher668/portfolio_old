import React, {CSSProperties} from 'react'
import MarkdownField from 'react-markdown'
import Img from 'gatsby-image'
import {Header} from '../titles/titles'

interface IBodyText {
    rich_text: any
}
export const BodyText: React.FC<IBodyText> = ({rich_text}: IBodyText) => {
    return <MarkdownField source={rich_text} />
}

type Image = {
    url: string
    imageFile: GatsbyImageSharp
}

type Slide = {
    image: Image[]
    caption: string
}

interface ISlider {
    slide: Slide[]
}

// TODO: Needs much, much work
export const Slider: React.FC<ISlider> = ({slide}: ISlider) => {
    const styles: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'scroll',
        whiteSpace: 'nowrap',
        position: 'relative',
    }

    const slideStyles: CSSProperties = {
        width: '1000px',
    }

    return (
        <>
            <div className="test">
                <section style={styles} className="slider">
                    {slide.map(({image, caption}) => {
                        const imageFile = image[0].imageFile
                        console.log(caption)

                        return (
                            <div style={slideStyles} className="slider-image">
                                <Img fluid={imageFile.childImageSharp.fluid} />{' '}
                                <Header
                                    title={caption}
                                    value={6}
                                    center={false}
                                    major={false}
                                />
                            </div>
                        )
                    })}
                </section>
            </div>
        </>
    )
}

interface IQuote {
    quote: string
}
export const Quote: React.FC<IQuote> = ({quote}: IQuote) => {
    return <>{quote}</>
}

interface IMedia {
    media: any
}
export const Media: React.FC<IMedia> = ({media}: IMedia) => {
    const {imageFile} = media
    return <Img fluid={imageFile.childImageSharp.fluid} />
}
