import React, {CSSProperties} from 'react'
import MarkdownField from 'react-markdown'
import Img from 'gatsby-image'
import {Header} from '../titles/titles'

interface IBodyText {
    data: any
}
export const BodyTextField: React.FC<IBodyText> = ({data}: IBodyText) => {
    return <MarkdownField source={data} />
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
    data: Slide[]
}

// TODO: Needs much, much work
export const SliderField: React.FC<ISlider> = ({data}: ISlider) => {
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
                    {data.map(({image, caption}) => {
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
    data: string
}
export const SingleQuoteField: React.FC<IQuote> = ({data}: IQuote) => {
    return <>{data}</>
}

interface IMedia {
    data: any
}
export const SingleMediaField: React.FC<IMedia> = ({data}: IMedia) => {
    const {imageFile} = data

    return <Img fluid={imageFile.childImageSharp.fluid} />
}

// TODO:
// type TextWithImage = {
//     media: any
//     header: string
//     body: string
//     position_left: boolean
// }

// interface ITextWithImage {
//     data: TextWithImage
// }

// export const TextWithImageField: React.FC<ITextWithImage> = ({
//     data,
// }: ITextWithImage) => {
//     const {media, header, body, position_left} = data

//     return (
//         <>
//             <section>
//                 {position_left ? ( // image displayed to the left of text
//                     <>
//                         {' '}
//                         <Img
//                             fluid={media.media.imageFile.childImageSharp.fluid}
//                         />
//                         <div className="text">
//                             <h3>{header}</h3>
//                             <MarkdownField source={body} />
//                         </div>
//                     </>
//                 ) : (
//                     // image displayed to the right of text
//                     <>
//                         {' '}
//                         <div className="text">
//                             <h3>{header}</h3>
//                             <MarkdownField source={body} />
//                         </div>
//                         <Img
//                             fluid={media.media.imageFile.childImageSharp.fluid}
//                         />
//                     </>
//                 )}
//             </section>
//         </>
//     )
// }
