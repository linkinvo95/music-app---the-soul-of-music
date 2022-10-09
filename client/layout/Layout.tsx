import React, { FC } from 'react';
import { LayoutProps } from './Layout.props';
import Sidebar from './../components/header/Sidebar';
import AdminNavbar from '../components/Navbars/AdminNavbar';



const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Sidebar />
            <div className='relative md:ml-64'>
                {/* <AdminNavbar/> */}
                <div className='px-4 md:px-10 mx-auto w-full -m-24'>
                {children}
                </div>
            </div>


        </>

    );
};

export default Layout;