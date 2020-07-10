import React, { useContext } from 'react';
import logo from '../assets/logo.svg';
import { FaAlignJustify } from 'react-icons/fa';
import PageLinks from '../constants/links';
import { sidebarContext } from './Layout';

const Navbar: React.FC<IProps> = (props: IProps) => {
    const { toggleSidebar } = useContext(sidebarContext);

    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt='logo' />
                    <button type='button' className='toggle-btn' onClick={() => toggleSidebar()}>
                        <FaAlignJustify />
                    </button>
                </div>
                <PageLinks className='nav-links' />
            </div>
        </nav>
    );
};

export default Navbar;
