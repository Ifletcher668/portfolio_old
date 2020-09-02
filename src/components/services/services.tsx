import React from 'react';
import { Title } from '../titles/titles';
import services from '../../constants/services';
import { Link } from 'gatsby';

interface IServices extends IProps {
    type: string;
}

const Services: React.FC<IServices> = (props: IServices) => {
    const { type, title } = props;

    return (
        <>
            <h1>{title || 'services'}</h1>
            <section className='section-center services-center'>
                {services
                    .filter((service) => service.type === type)
                    .map((service, idx) => {
                        const { icon, title, text, url } = service;
                        return (
                            <Link to={`${type === 'writing' ? /writing/ : /music/}${url}`}>
                                <article key={idx} className='card'>
                                    {icon}
                                    <h4>{title}</h4>
                                    <div className='underline'></div>
                                    <p>{text}</p>
                                </article>
                            </Link>
                        );
                    })}
            </section>
        </>
    );
};

export default Services;
