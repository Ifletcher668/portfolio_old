import React, { ReactChild } from 'react';

interface IContentProps extends IProps {
    children: ReactChild;
}

//
const Content: React.FC<IContentProps> = (props: IContentProps) => {
    return (
        <>
            <section className='content '>
                <div className='content-inner'>{props.children}</div>
            </section>
        </>
    );
};

export default Content;
