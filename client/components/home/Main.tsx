import Link from 'next/link';
import React, { FC } from 'react';

import DashboardArtist from './DashboardArtist';
import PlayListItem from './PlayListItem';

export const artist = [
    {
        id: 1, name: 'Ягнёнок', kg: 230, description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620, img: 'img/myy 1.png'
    }, {
        id: 2, name: 'Индейка', kg: 225, description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 450, img: 'img/turkey.png'
    }, {
        id: 3, name: 'Гусь', kg: 225, description: 'Фаршированный яблоком',
        price: 7900, img: 'img/Gys.png'
    }, {
        id: 4, name: 'Утка', kg: 225, description: 'Фаршированная рисом, курагой и айвой',
        price: 3230, img: 'img/duck.png'
    }, {
        id: 5, name: 'Дич', kg: 225, description: 'Супер вкусная дич ',
        price: 777, img: 'img/myy 1.png'
    },
    {
        id: 6, name: 'Дич', kg: 225, description: 'Супер вкусная дич ',
        price: 777, img: 'img/myy 1.png'
    },
    {
        id: 7, name: 'Дич', kg: 225, description: 'Супер вкусная дич ',
        price: 777, img: 'img/myy 1.png'
    },

];

const Main: FC= () => {
    return (
        <>
            <div className=" ml-[250px] mt-[170px] w-[1320px] h-[2810px]">
            <div className="h4_line">
                <h4 className=' text-[#868d94] text-[20px] w-[108px] pt-6'>Best artist</h4>  
                <div className='text-white border-double  border-b-4  border-[#868d94] w-full m-10'></div>
                <Link href='/'>
                <a className=' text-[#868d94] text-[20px] hover:text-red-600 w-[114px] pt-6'>Show more </a>
                </Link> 
            </div>
            <div className='flex flex-wrap h-[330px] w-[97%] space-x-48 > * + *'>

             {artist.map(() => {
                 return (
                     <DashboardArtist/>
                     
                     )
                    })
                }
                </div>
<div className="h4_line mt-[111px]">

                <h4 className=' text-[#868d94] text-[20px] w-[190px] pt-6 '>Today's Top Picks</h4>  
                <div className='text-white border-double  border-b-4  border-[#868d94] w-full m-10'></div>
                <Link href='/'>
                <a className=' text-[#868d94] text-[19px] hover:text-red-600 w-[114px] pt-6'>View More</a>
                </Link>
</div>
<PlayListItem/>
            </div>
        </>
    );
};

export default Main;

