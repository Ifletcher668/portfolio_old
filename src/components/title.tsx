import React from 'react';

const Title: React.FC<IProps> = (props: IProps) => {
    const { title } = props;

    return (
        <div className='section-title'>
            <h2>{title || 'default'}</h2>
            <div className='underline'></div>
        </div>
    );
};

export default Title;
