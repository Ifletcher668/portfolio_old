import React from 'react';
import { Title } from './titles';
import services from '../constants/services';

interface IServices extends IProps {
    type: string;
}

const Services: React.FC<IServices> = (props: IServices) => {
    const { type, title } = props;

    return (
        <>
            <Title title={title || 'services'} />
            <section className='section-center services-center'>
                {services
                    .filter((service) => service.type === type)
                    .map((service, idx) => {
                        const { icon, title, text } = service;
                        return (
                            <article key={idx} className='card'>
                                {icon}
                                <h4>{title}</h4>
                                <div className='underline'></div>
                                <p>{text}</p>
                            </article>
                        );
                    })}
            </section>
        </>
    );
};

export default Services;
