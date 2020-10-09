import React from 'react'
import {BodyText, Slider, Quote, Media} from './dynamicZoneComponents'

interface IDynamicZone {
    components: any[]
}

const DynamicZone: React.FC<IDynamicZone> = ({components}: IDynamicZone) => {
    return components.map((component, idx) => {
        switch (component.__typename) {
            case 'STRAPI_ComponentContentBodyText':
                return <BodyText key={idx} rich_text={component.rich_text} />
            case 'STRAPI_ComponentContentSlider':
                return <Slider key={idx} slide={component.slide} />
            case 'STRAPI_ComponentContentQuote':
                return <Quote key={idx} quote={component.quote} />
            case 'STRAPI_ComponentContentMedia':
                return <Media key={idx} media={component.media} />
            default:
                return null
        }
    })
}

export default DynamicZone
