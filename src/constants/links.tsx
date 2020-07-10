import React from 'react';
import { Link } from 'gatsby';

const data = [
    {
        id: 1,
        text: 'home',
        url: '/',
    },
    {
        id: 2,
        text: 'about',
        url: '/about/',
    },
    {
        id: 3,
        text: 'projects',
        url: '/projects/',
    },
    {
        id: 4,
        text: 'blogs',
        url: '/blogs/',
    },
    {
        id: 5,
        text: 'contact',
        url: '/contact/',
    },
];

const tempLinks = data.map((link) => {
    return (
        <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
        </li>
    );
});

export default (props: IProps) => {
    const { className } = props;

    return <ul className={`page-links ${className ? className : ''}`}>{tempLinks}</ul>;
};
