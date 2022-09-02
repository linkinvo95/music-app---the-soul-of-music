import React from 'react';
import  Image  from 'next/image';
import Sidebar from './Sidebar';
import Search from './Search';

const Header = () => {
    return (
        <>
          
                <label>
                    <Sidebar/>
                    <Search/>
                    {/* <input type="text" placeholder='looking for music here' /> */}
                    {/* <Image className='3xl' src="img/search.svg" alt="search" /> */}
                </label>
   
        </>
    );
};

export default Header;