import React from 'react'
import {Link} from 'gatsby'

const data = [
    {
        text: 'music',
        url: `/music/`,
        subMenu: [
            {
                text: 'aterrima',
                url: `/music/aterrima/`,
            },
            {
                text: 'Weald and Woe',
                url: `/music/weald-and-woe/`,
            },
            {
                text: 'transcripts',
                url: `/music/transcripts/`,
            },
        ],
    },
    {
        text: 'writing',
        url: `/writing/`,
        subMenu: [
            {
                text: 'poetry',
                url: `/writing/poetry/`,
            },
            {
                text: 'blogs',
                url: `/writing/blogs/`,
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
    // TODO: Add this back!
    // {
    //     text: 'extras',
    //     url: '/extras/',
    // },
]

const primaryLinks = data.map((link, idx) => {
    return (
        <li
            key={idx}
            className={`nav-link${link.subMenu ? ' strip-bottom' : ''}`}
        >
            <Link to={link.url}>{link.text}</Link>
            {link.subMenu ? (
                <ul className="sub-menu">
                    {link.subMenu.map((link, idx) => {
                        return (
                            <Link key={idx} to={link.url}>
                                <li>{link.text}</li>
                            </Link>
                        )
                    })}
                </ul>
            ) : null}
        </li>
    )
})

export default (props: IProps) => {
    return (
        <ul className={`page-links ${props.className ? props.className : ''}`}>
            {primaryLinks}
        </ul>
    )
}
