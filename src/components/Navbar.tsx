import React, { useContext } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'gatsby';
import { FaAlignJustify } from 'react-icons/fa';
import PageLinks from '../constants/links';
import { sidebarContext } from './Layout';

const Navbar: React.FC<INavbarProps> = (props: INavbarProps) => {
    const { toggleSidebar } = useContext(sidebarContext);
    const { placement } = props;

    return (
        <>
            <nav className={`navbar navbar-${placement}`}>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link to='/'>
                            <img src={logo} alt='logo' />
                        </Link>

                        <button
                            type='button'
                            className='toggle-btn'
                            onClick={() => toggleSidebar()}>
                            <FaAlignJustify />
                        </button>
                    </div>
                    <PageLinks className='nav-links' />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
