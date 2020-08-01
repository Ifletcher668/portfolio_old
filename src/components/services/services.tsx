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
            <Title title={title || 'services'} />
            <section className='section-center services-center'>
                {services
                    .filter((service) => service.type === type)
                    .map((service, idx) => {
                        const { icon, title, text, url } = service;
                        return (
                            <Link
                                to={`${
                                    type === 'writing'
                                        ? process.env.GATSBY_BASE_WRITING_ROUTE
                                        : process.env.GATSBY_BASE_MUSIC_ROUTE
                                }${url}`}>
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
