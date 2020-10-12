import React, {Fragment} from 'react'

type Tag = {
    tag: string
}
interface ITags {
    data: Tag[]
}

const Tags: React.FC<ITags> = ({data}: ITags) => {
    return (
        <>
            <section className="tags">
                {data.map(({tag}, idx) => {
                    return (
                        <Fragment key={idx}>
                            <span>{tag.toLowerCase()}</span>
                        </Fragment>
                    )
                })}
            </section>
        </>
    )
}

export default Tags
