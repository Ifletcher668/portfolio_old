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

    const idxPageId: string = 'index-page';

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const contextValue: SidebarContext = {
        isSidebarOpen,
        toggleSidebar,
    };

    useEffect(() => {
        if (location.pathname === '/') document.body.classList.add('overflow-hidden');
        else document.body.classList.remove('overflow-hidden');
    }, []);

    return (
        <>
            <sidebarContext.Provider value={contextValue}>
                <Navbar placement={id === idxPageId ? 'bottom' : 'top'} />
                <Sidebar />
            </sidebarContext.Provider>
            <main className={`main${className ? ' ' + className : ''}`}>{children}</main>
            {id === idxPageId ? '' : <Footer />}
        </>
    );
};

export default Layout;
