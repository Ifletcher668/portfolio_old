import React, { ReactChild } from 'react';

interface IContentProps extends IProps {
    children: ReactChild;
}

//
const Content: React.FC<IContentProps> = (props: IContentProps) => {
    const { children } = props;
    return (
        <>
            <section className='content-card'>
                <div className='content-card-inner'>{children}</div>
            </section>
        </>
    );
};

export default Content;
