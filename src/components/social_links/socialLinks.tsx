import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';

const data = [
    {
        icon: <FaFacebookSquare className='social-icon'></FaFacebookSquare>,
        url: `https://www.facebook.com/fletchmydrumsticks`,
    },
    {
        icon: <FaInstagramSquare className='social-icon'></FaInstagramSquare>,
        url: `https://www.instagram.com/fletchmydrumsticks/?hl=en`,
    },
    {
        icon: <FaGithubSquare className='social-icon'></FaGithubSquare>,
        url: `https://github.com/Ifletcher668?tab=repositories`,
    },
    {
        icon: <FaLinkedin className='social-icon'></FaLinkedin>,
        url: `https://www.linkedin.com/in/isiah-fletcher-074060159/`,
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
