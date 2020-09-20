import React from 'react'
import {Link} from 'gatsby'
import {FaSortDown} from 'react-icons/fa'
import config from '../../../config/website'

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
        url: `${config.routes.music}`,
        subMenu: [
            {
                text: 'aterrima',
                url: `${config.routes.aterrima}`,
            },
            {
                text: 'Weald and Woe',
                url: `${config.routes.wealdAndWoe}`,
            },
            {
                text: 'transcripts',
                url: `${config.routes.transcripts}`,
            },
        ],
    },
    {
        text: 'writing',
        url: `${config.routes.writing}`,
        subMenu: [
            {
                text: 'poetry',
                url: `${config.routes.poetry}`,
            },
            {
                text: 'Journal',
                url: `${config.routes.journal}`,
            },
        ],
    },
    {
        text: 'Web Developer',
        url: `${config.routes.portfolio}`,
    },
    {
        text: 'contact',
        url: `${config.routes.contact}`,
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
        <ul className={`sub-menu`}>
            {subMenu.map((link, idx) => {
                const {url, text} = link
                return (
                    <li key={idx}>
                        <Link key={idx} to={url}>
                            {text}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

const Menu = ({className}: IProps) => {
    return (
        <ul className={`page-links ${className ? className : ''}`}>
            {data.map((link, idx) => {
                const {subMenu, url, text} = link
                return (
                    <li
                        key={idx}
                        className={`nav-link ${subMenu ? 'strip-bottom' : ''}`}
                    >
                        <Link key={text} to={url}>
                            {text}
                            {subMenu &&
                            !className?.includes('sidebar-links') ? (
                                <FaSortDown />
                            ) : (
                                ''
                            )}
                        </Link>
                        {subMenu ? <SubMenu subMenu={subMenu} /> : null}
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu
