import React from 'react';
import Title from './Title';
import services from '../constants/services';

// page imports an array of services, stored locally in this project

const Services: React.FC<IProps> = (props: IProps) => {
    return (
        <>
            <Title title='services' />
            <div className='section-center services-center'>
                {services.map((service, idx) => {
                    const { icon, title, text } = service;
                    return (
                        <article key={idx} className='service'>
                            {icon}
                            <h4>{title}</h4>
                            <div className='underline'></div>
                            <p>{text}</p>
                        </article>
                    );
                })}
            </div>
        </>
    );
};

export default Services;
