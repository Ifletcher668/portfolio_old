import React from 'react';
import { Link } from 'gatsby';

const data = [
    // {
    //     text: 'about',
    //     url: '/about/',
    // },
    {
        text: 'music',
        url: `${process.env.GATSBY_BASE_MUSIC_ROUTE}`,
        subMenu: [
            {
                text: 'aterrima',
                url: `${process.env.GATSBY_BASE_ATERRIMA_ROUTE}`,
            },
            {
                text: 'transcripts',
                url: `${process.env.GATSBY_BASE_TRANSCRIPTS_ROUTE}`,
            },
        ],
    },
    {
        text: 'writing',
        url: `${process.env.GATSBY_BASE_WRITING_ROUTE}`,
        subMenu: [
            {
                text: 'poetry',
                url: `${process.env.GATSBY_BASE_POETRY_ROUTE}`,
            },
            {
                text: 'blogs',
                url: `${process.env.GATSBY_BASE_BLOG_ROUTE}`,
            },
        ],
    },
    {
        text: 'Web Developer',
        url: '/portfolio',
    },
    {
        text: 'contact',
        url: '/contact',
    },
    {
        text: 'extras',
        url: '/extras/',
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
