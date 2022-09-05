import Link from 'next/link';
import React from 'react';
import Logo from './../Logo';

const Sidebar = () => {
    return (
        <>
        <section className=" fixed top-0 
        z-40 flex 
        flex-col
        p-4 items-center
        sidebar_com w-56 h-[1900px]
 space-y-8">
            <Logo/>
            <h2>BROWSE MUSIC</h2>
            <nav>
                <ul className='mr-20'>
                    <li className='flex p-2'><img className='w-7 mr-7 icon' src="img/home.svg" alt="Home_icon" /><Link href='#'><a className=' hover:text-red-600 icon '>Family</a></Link></li>
                    <li className='flex p-2'><img className='w-6 mr-7 icon' src="img/microphone.svg" alt="microphone_icon" /><Link href='#'><a className='hover:text-red-600 icon'>Artist</a></Link></li>
                    <li className='flex p-2'><img className=' w-7 mr-6 icon' src="img/album.svg" alt="Album_icon" /><Link href='#'><a className='hover:text-red-600 icon'>Album</a></Link></li>
                    <li className='flex p-2'><img className=' w-6 ml-1 mr-7 icon' src="img/gender.svg" alt="gender_icon" /><Link href='#'><a className='hover:text-red-600 icon'>Gender</a></Link></li>
                    <li className='flex p-2'><img className=' w-6 ml-1 mr-7 icon' src="img/follow.svg" alt="follow_icon" /><Link href='#'><a className='hover:text-red-600 icon'>Follow</a></Link></li>
                </ul>
            </nav>
            <h2>YOUR MUSIC</h2>
            <nav>
                <ul className='mr-20'>
                    <li className='flex p-2'><img className='w-5 ml-1 mr-7 icon' src="img/love.svg" alt="love_icon" /><Link href='#'><a className='hover:text-red-600 icon'>Favorites</a></Link></li>
                    <li className='flex p-2'><img className='w-6 ml-1 mr-7 icon' src="img/history.svg" alt="history_icon" /><Link href='#'><a className='hover:text-red-600 icon'>History</a></Link></li>
                    <li className='flex p-2'><img className='w-5 ml-1 mr-7 icon' src="img/playlist.svg" alt="playlist_icon" /><Link href='#'><a className='hover:text-red-600 icon'>Playlist</a></Link></li>
                </ul>
            </nav>
        </section>
        </>
    );
};

export default Sidebar;