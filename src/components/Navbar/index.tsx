import React, {useContext} from 'react'
import {Link} from 'gatsby'
import {FaAlignJustify} from 'react-icons/fa'
import {sidebarContext} from '../Layout'
import {Title} from '../Titles'
import Links from '../Links/Components/siteLinks'

const Navbar: React.FC<IProps> = (props: IProps) => {
    const {toggleSidebar} = useContext(sidebarContext)

    return (
        <>
            <nav className={`navbar`}>
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <Title title="Isiah Fletcher" />
                        </Link>

                        <button
                            type="button"
                            className="toggle-btn"
                            onClick={() => toggleSidebar()}
                        >
                            <FaAlignJustify />
                        </button>
                    </div>
                    <Links className="nav-links" />
                </div>
            </nav>
        </>
    )
}

export default Navbar
