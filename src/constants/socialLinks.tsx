import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';

const data = [
    {
        id: 1,
        icon: <FaFacebookSquare className='social-icon'></FaFacebookSquare>,
        url: 'https://www.facebook.com/fletchmydrumsticks',
    },
    {
        id: 2,
        icon: <FaInstagramSquare className='social-icon'></FaInstagramSquare>,
        url: 'https://www.instagram.com/fletchmydrumsticks/?hl=en',
    },
    {
        id: 3,
        icon: <FaGithubSquare className='social-icon'></FaGithubSquare>,
        url: 'https://github.com/Ifletcher668?tab=repositories',
    },
    {
        id: 4,
        icon: <FaLinkedin className='social-icon'></FaLinkedin>,
        url: 'https://www.linkedin.com/in/isiah-fletcher-074060159/',
    },
];
const links = data.map((link) => {
    return (
        <li key={link.id}>
            <a href={link.url} className='social-link' target='_blank'>
                {link.icon}
            </a>
        </li>
    );
});

export default (props: IProps) => {
    const { className } = props;
    return <ul className={`social-links ${className ? className : ''}`}>{links}</ul>;
};
