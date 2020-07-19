import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';

const data = [
    {
        icon: <FaFacebookSquare className='social-icon'></FaFacebookSquare>,
        url: `${process.env.GATSBY_FACEBOOK}`,
    },
    {
        icon: <FaInstagramSquare className='social-icon'></FaInstagramSquare>,
        url: `${process.env.GATSBY_INSTAGRAM}`,
    },
    {
        icon: <FaGithubSquare className='social-icon'></FaGithubSquare>,
        url: `${process.env.GATSBY_GITHUB}`,
    },
    {
        icon: <FaLinkedin className='social-icon'></FaLinkedin>,
        url: `${process.env.GATSBY_LINKEDIN}`,
    },
];
const links = data.map(({ url, icon }, idx) => {
    return (
        <li key={idx}>
            <a href={url} className='social-link' target='_blank'>
                {icon}
            </a>
        </li>
    );
});

export default (props: IProps) => {
    const { className } = props;
    return <ul className={`social-links ${className ? className : ''}`}>{links}</ul>;
};
