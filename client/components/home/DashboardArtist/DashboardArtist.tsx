import React from 'react';
import  './DashboardArtist.module.css';
const DashboardArtist = () => {
    return (
        <>
            <div className=" hover:containerC ">
                <img className='rounded-full w-[153.72px] h-[153.72px] 
                img_artist  hover:bg-[url("/img/images.png")]  ' src="/img/artist-icon.jpg" alt="" />
                <p className='text-white ml-10 mt-3 text-lg  '>Billie Eilish</p>
            </div> 

        </>
    );
};

export default DashboardArtist;