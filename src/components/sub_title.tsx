import React from 'react';

const SubTitle: React.FC<IProps> = (props: IProps) => {
    const { title } = props;

    return (
        <div className='section-title'>
            <h4>{title || 'default'}</h4>
            <div className='underline'></div>
        </div>
    );
};

export default SubTitle;
