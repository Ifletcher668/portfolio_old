import React from 'react';
import { Link } from 'gatsby';

const data = [
    {
        text: 'about',
        url: '/about/',
    },
    {
        text: 'music',
        url: '/music/',
        subMenu: [
            {
                text: 'aterrima',
                url: '/aterrima',
            },
            {
                text: 'transcripts',
                url: '/transcripts/',
            },
        ],
    },
    {
        text: 'writing',
        url: '/writing/',
        subMenu: [
            {
                text: 'poetry',
                url: '/poetry/',
            },
            {
                text: 'blogs',
                url: '/blogs/',
            },
        ],
    },
    {
        text: 'portfolio',
        url: '/portfolio',
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

const primaryLinks = data.map((link, idx) => {
    return (
        <li key={idx} className='nav-link'>
            <Link to={link.url}>{link.text}</Link>
            {link.subMenu ? (
                <ul className='sub-menu'>
                    {link.subMenu.map((link, idx) => {
                        return (
                            <li key={idx}>
                                {' '}
                                <Link to={link.url}>{link.text}</Link>{' '}
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </li>
    );
});

export default (props: IProps) => {
    const { className } = props;

    return <ul className={`page-links ${className ? className : ''}`}>{primaryLinks}</ul>;
};
