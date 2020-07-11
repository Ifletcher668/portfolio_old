import React, { useState, createContext } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

type SidebarContext = {
    isSidebarOpen: boolean;
    toggleSidebar: Function;
};
const blankCtxObj: SidebarContext = {
    isSidebarOpen: false,
    toggleSidebar: () => {},
};

export const sidebarContext = createContext(blankCtxObj);

const Layout: React.FC<IProps> = (props: IProps) => {
    const { children } = props;
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const contextValue: SidebarContext = {
        isSidebarOpen,
        toggleSidebar,
    };

    return (
        <>
            {children}
            <sidebarContext.Provider value={contextValue}>
                <Navbar />
                <Sidebar />
            </sidebarContext.Provider>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
