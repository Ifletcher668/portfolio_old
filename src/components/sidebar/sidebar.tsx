import React, { useContext } from 'react';
import Links from '../../constants/links';
import SocialLinks from '../../constants/socialLinks';
import { FaTimes } from 'react-icons/fa';
import { sidebarContext } from '../layout/layout';

const Sidebar: React.FC<IProps> = () => {
    const { isSidebarOpen, toggleSidebar } = useContext(sidebarContext);

    return (
        <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
            <div className='sidebar-header'>
                <button className='close-btn' onClick={() => toggleSidebar()}>
                    <FaTimes />
                </button>
            </div>
            <div className='side-container'>
                <Links className={isSidebarOpen ? 'sidebar-links' : ''} />
                <SocialLinks className={isSidebarOpen ? 'sidebar-icons' : ''} />
            </div>
        </aside>
    );
};

export default Sidebar;
