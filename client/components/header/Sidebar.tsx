import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <section className="fixed top-0 
        z-40 flex 
        flex-col
        p-4 items-center
        sidebar_com w-56
        h-screen space-y-8">
            <h1>LOGO</h1>
            <h2>BROWSE MUSIC</h2>
            <nav>
                <ul className='mr-20'>
                    <li className='flex p-2'><img className='w-7 mr-7 icon' src="img/home.svg" alt="" /><Link href='#'><a className=' hover:text-red-400'>Family</a></Link></li>
                    <li className='flex p-2'><img className='w-6 mr-7 icon' src="img/microphone.svg" alt="" /><Link href='#'><a className='hover:text-red-400'>Artist</a></Link></li>
                    <li className='flex p-2'><img className=' w-7 mr-6 icon' src="img/album.svg" alt="" /><Link href='#'><a className='hover:text-red-400'>Album</a></Link></li>
                    <li className='flex p-2'><img className=' w-6 ml-1 mr-7 icon' src="img/gender.svg" alt="" /><Link href='#'><a className='hover:text-red-400'>Gender</a></Link></li>
                    <li className='flex p-2'><img className=' w-6 ml-1 mr-7 icon' src="img/follow.svg" alt="" /><Link href='#'><a className='hover:text-red-400'>Follow</a></Link></li>
                </ul>
            </nav>
            <h2>YOUR MUSIC</h2>
            <nav>
                <ul className='mr-20'>
                    <li className='flex p-2'><img className='w-5 ml-1 mr-7 icon' src="img/love.svg" alt="" /><Link href='#'><a className='hover:text-red-400'>Favorites</a></Link></li>
                    <li className='flex p-2'><img className='w-6 ml-1 mr-7 icon' src="img/history.svg" alt="" /><Link href='#'><a className='hover:text-red-400'>History</a></Link></li>
                    <li className='flex p-2'><img className='w-5 ml-1 mr-7 icon' src="img/playlist.svg" alt="" /><Link href='#'><a className='hover:text-red-400'>Playlist</a></Link></li>
                </ul>
            </nav>
        </section>
    );
};

export default Sidebar;