import React, { useState, createContext, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';
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
    const { id, className, children } = props;

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
            <sidebarContext.Provider value={contextValue}>
                <Navbar />
                <Sidebar />
            </sidebarContext.Provider>
            <main className={`main${className ? ' ' + className : ''}`}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
