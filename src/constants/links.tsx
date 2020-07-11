import React from 'react';
import { Link } from 'gatsby';

const data = [
    {
        text: 'home',
        url: '/',
    },
    {
        text: 'about',
        url: '/about/',
    },
    {
        text: 'projects',
        url: '/projects/',
    },
    {
        text: 'blogs',
        url: '/blogs/',
    },
    {
        text: 'contact',
        url: '/contact',
    },
    {
        text: 'extras',
        url: '/extras',
    },
];

const tempLinks = data.map((link, idx) => {
    return (
        <li key={idx}>
            <Link to={link.url}>{link.text}</Link>
        </li>
    );
});

export default (props: IProps) => {
    const { className } = props;

    return <ul className={`page-links ${className ? className : ''}`}>{tempLinks}</ul>;
};
