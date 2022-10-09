import Link from 'next/link';
import React, {FC} from 'react';
import Search from '../header/Search';

const AdminNavbar: FC = () => {
    return (
        <>
         {/* Navbar*/}
         <nav className='absolute top-0 left-0 w-full z-10 
         bg-transparent 
         md:flex-row 
         md:flex-nowrap 
         md:justify-start
         flex
         '>
            <div className='w-full mx-auto items-center flex justify-between
            md:flex-nowrap flex-wrap md:px-10 px-4'>
                {/* Brand */}
                <Link href='#pablo'>
                    <a className='text-white text-sm 
                    uppercase hidden 
                    lg:inline-block font-semibold'
                    onClick={(e) => e.preventDefault()}>
                        Dashboard
                    </a>
                </Link>
                {/* <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center
               text-blueGray-300  bg-transparent rounded text-base items-center
                justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white lg:bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form> */}
          <Search/>
            </div>
            </nav>   
        </>
    );
};

export default AdminNavbar;