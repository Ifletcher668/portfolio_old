import React from 'react'
import {Link} from 'gatsby'
import {FaSortDown} from 'react-icons/fa'

type SubMenuData = {
    text: string
    url: string
}

type Data = {
    text: string
    url: string
    subMenu?: SubMenuData[]
}

const data: Data[] = [
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

interface ISubMenuProps {
    subMenu: SubMenuData[]
}

const SubMenu: React.FC<ISubMenuProps> = ({subMenu}) => {
    return (
        <ul className="sub-menu">
            {subMenu.map((link, idx) => {
                const {url, text} = link
                return (
                    <Link key={idx} to={url}>
                        <li>{text}</li>
                    </Link>
                )
            })}
        </ul>
    )
}

const Menu = (props: IProps) => {
    return (
        <ul className={`page-links ${props.className ? props.className : ''}`}>
            {data.map((link, idx) => {
                const {subMenu, url, text} = link

                return (
                    <li
                        key={idx}
                        className={`nav-link${subMenu ? ' strip-bottom' : ''}`}
                    >
                        <Link key={text} to={url}>
                            {text}
                            {subMenu ? <FaSortDown /> : ''}
                        </Link>
                        {subMenu ? <SubMenu subMenu={subMenu} /> : null}
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu
