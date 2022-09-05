import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from './../Logo';

const Sidebar = () => {
    const router = useRouter()
    return (
        <>
            <section className=" fixed top-0 
        z-40 flex 
        flex-col
        p-4 items-center
        sidebar_com w-56 h-[1900px]
 space-y-8">
                <Logo />
                <h2>BROWSE MUSIC</h2>
                <nav>
                    <ul className='mr-20'>
                        <li className='flex p-2' ><img className='w-7 mr-7 icon' src="img/home.svg" alt="Home_icon" />
                            <Link href='/'><a className=' hover:text-red-600 icon '>Family</a></Link></li>
                        <li className='flex p-2'><img className='w-6 mr-7 icon' src="img/microphone.svg" alt="microphone_icon" />
                            <Link href='/tracks'><a className='hover:text-red-600 icon'>Artist</a></Link></li>
                        <li className='flex p-2'><img className=' w-7 mr-6 icon' src="img/album.svg" alt="Album_icon" />
                            <Link href='/albums'><a className='hover:text-red-600 icon'>Album</a></Link></li>
                        <li className='flex p-2'><img className=' w-6 ml-1 mr-7 icon' src="img/gender.svg" alt="gender_icon" /><Link href='#'><a className='hover:text-red-600 icon'>Gender</a></Link></li>
                        <li className='flex p-2'><img className=' w-6 ml-1 mr-7 icon' src="img/follow.svg" alt="follow_icon" /><Link href='#'><a className='hover:text-red-600 icon'>Follow</a></Link></li>
                    </ul>

                </nav>
                <h2>YOUR MUSIC</h2>
                <nav>
                    <ul className='mr-20'>
                        <li className='flex p-2'><img className='w-5 ml-1 mr-7 icon bg-red-400 hover:fill-slate-300' src="img/love.svg" alt="love_icon" /><Link href='#'><a className='hover:text-red-600 icon'>Favorites</a></Link></li>
                        <li className='flex p-2'><img className='w-6 ml-1 mr-7 icon' src="img/history.svg" alt="history_icon" /><Link href='#'><a className='hover:text-red-600 icon'>History</a></Link></li>
                        <li className='flex p-2'><img className='w-5 ml-1 mr-7 icon' src="img/playlist.svg" alt="playlist_icon" /><Link href='#'><a className='hover:text-red-600 icon'>Playlist</a></Link></li>
                        <li className='flex p-2'>
                            <svg 
                            className='w-5 ml-1 mr-7 icon fill-red-400 hover:fill-slate-300'
                            width="29.956px" height="29.956px" viewBox="0 -0.43 29.956 29.956" id="_10_-_Love"
                                data-name="10 - Love"
                                xmlns="http://www.w3.org/2000/svg">
                                <path id="_10_-_Love-2" data-name="10 - Love" d="M16,4.986A8.785,8.785,0,0,0,3.522,4.075c-3.2,3.038-3.395,9.113-.2,15.189,2.131,4.325,7.576,8.69,12.14,11.581a1,1,0,0,0,1.07,0c4.567-2.893,10.017-7.262,12.15-11.6,3.188-6.063,2.99-12.133-.207-15.169A8.785,8.785,0,0,0,16,4.986h0ZM15.154,7.2a1,1,0,0,0,1.692,0A6.792,6.792,0,0,1,27.1,5.525h0A6.408,6.408,0,0,1,28.92,9.452a15.475,15.475,0,0,1-2.015,8.882c0,.008-.009.017-.013.025C24.98,22.251,20.161,26.115,16,28.812c-4.161-2.7-8.98-6.561-10.892-10.453,0-.008-.008-.017-.013-.025A15.483,15.483,0,0,1,3.08,9.452,6.414,6.414,0,0,1,4.9,5.525,6.792,6.792,0,0,1,15.154,7.2Z" transform="translate(-1.023 -1.896)" fill-rule="evenodd" />
                            </svg>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    );
};

export default Sidebar;