import React from 'react';
// import "../css/main.css"
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout: React.FC<IProps> = (props: IProps) => {
    const { children } = props;
    return (
        <>
            <h2>layout component</h2>
        </>
    );
};

export default Layout;
