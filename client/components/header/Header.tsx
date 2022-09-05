import React, { FC } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';

const Header: FC = () => {
    return (
        <>
                    <Search />
                <Sidebar/>

        </>
    );
};

export default Header;