import React from 'react';

export const Title: React.FC<IProps> = (props: IProps) => {
    const { title } = props;

    return (
        <div className='section-title'>
            <h2>{title || 'default'}</h2>
            <div className='underline'></div>
        </div>
    );
};

export const SubTitle: React.FC<IProps> = (props: IProps) => {
    const { title } = props;

    return (
        <div className='section-title'>
            <h4>{title || 'default'}</h4>
            <div className='underline'></div>
        </div>
    );
};
