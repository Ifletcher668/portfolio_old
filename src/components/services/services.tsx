import React from 'react';
import { Header } from '../titles/titles';
import services from '../../constants/services';
import { Link } from 'gatsby';

interface IServices extends IProps {
    type: string;
    children: React.ReactNode;
}

const Services: React.FC<IServices> = (props: IServices) => {
    const { type, title, children } = props;

    return (
        <>
            <Header title={title || 'services'} center={true} value={1} />
            {children}
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
