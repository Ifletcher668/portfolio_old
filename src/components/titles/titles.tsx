import React, {CSSProperties} from 'react'

interface IHeaderProps extends IProps {
    center: boolean
    value: 1 | 2 | 3 | 4 | 5 | 6
    major: boolean
}

const headerStyling: CSSProperties = {
    textAlign: 'center',
}

export const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
    const {title, center, value, major} = props

    if (value === 1) {
        return (
            <h1
                className={`${center ? 'center ' : ''}${major ? 'major' : ''}`}
                style={headerStyling}
            >
                {title || 'Header'}
            </h1>
        )
    } else if (value === 2) {
        return (
            <h2
                className={`${center ? 'center ' : ''}${major ? 'major' : ''}`}
                style={headerStyling}
            >
                {title || 'Header'}
            </h2>
        )
    } else if (value === 3) {
        return (
            <h3
                className={`${center ? 'center ' : ''}${major ? 'major' : ''}`}
                style={headerStyling}
            >
                {title || 'Header'}
            </h3>
        )
    } else if (value === 4) {
        return (
            <h4
                className={`${center ? 'center ' : ''}${major ? 'major' : ''}`}
                style={headerStyling}
            >
                {title || 'Header'}
            </h4>
        )
    } else if (value === 5) {
        return (
            <h5
                className={`${center ? 'center ' : ''}${major ? 'major' : ''}`}
                style={headerStyling}
            >
                {title || 'Header'}
            </h5>
        )
    } else {
        // if (value === 6)
        return (
            <h6
                className={`${center ? 'center ' : ''}${major ? 'major' : ''}`}
                style={headerStyling}
            >
                {title || 'Header'}
            </h6>
        )
    }
}

export const Title: React.FC<IProps> = (props: IProps) => {
    const {title} = props

    return (
        <div className="title">
            <h2>{title || 'default'}</h2>
            <div className="underline"></div>
        </div>
    )
}

export const SubTitle: React.FC<IProps> = (props: IProps) => {
    const {title} = props

    return (
        <div className="title">
            <h4>{title || 'default'}</h4>
            <div className="underline"></div>
        </div>
    )
}
