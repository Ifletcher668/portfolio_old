import React from 'react'
import {
    BodyTextField,
    SliderField,
    SingleQuoteField,
    SingleMediaField,
    TextWithImageField,
} from './dynamicZoneComponents'

interface IDynamicZone {
    components: any[]
}

const DynamicZone: React.FC<IDynamicZone> = ({components}: IDynamicZone) => {
    return components.map((component, idx) => {
        switch (component.__typename) {
            case 'STRAPI_ComponentContentText':
                return <BodyTextField key={idx} data={component.rich_text} />
            case 'STRAPI_ComponentContentSlider':
                return <SliderField key={idx} data={component.slide} />
            case 'STRAPI_ComponentContentQuote':
                return <SingleQuoteField key={idx} data={component.quote} />
            case 'STRAPI_ComponentContentMedia':
                return <SingleMediaField key={idx} data={component.media} />
            case 'STRAPI_ComponentContentTextWithImage':
                return (
                    <TextWithImageField
                        key={idx}
                        data={{
                            header: component.header,
                            body: component.body,
                            position_left: component.position_left,
                            media: component.media,
                        }}
                    />
                )
            default:
                return null
        }
    })
}

export default DynamicZone
