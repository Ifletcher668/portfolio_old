import React, {ReactChild} from 'react'

interface IContentProps extends IProps {
    children: ReactChild
    background: boolean
}

//
const Content: React.FC<IContentProps> = ({
    children,
    background,
}: IContentProps) => {
    return (
        <>
            <section className={`content-card ${background ? '' : 'strip-bg'}`}>
                <div className="content-card-inner">{children}</div>
            </section>
        </>
    )
}

export default Content
