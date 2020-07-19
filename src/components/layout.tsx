import React, { useState, createContext } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';

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
    const { id, children } = props;

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const idxPageId: string = 'index-page';

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
                <Navbar placement={id === idxPageId ? 'bottom' : 'top'} />
                <Sidebar />
            </sidebarContext.Provider>
            <main className='main'>{children}</main>
            {id === idxPageId ? '' : <Footer />}
        </>
    );
};

export default Layout;
