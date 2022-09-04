import Link from 'next/link';
import React, { FC } from 'react';
import Line from '../Line';

const Main: FC= () => {
    return (
        <>
            <div className=" ml-[250px] mt-[170px] w-[1320px] h-[2810px]">
            <div className="h4_line">
                <h4 className=' text-[#868d94] text-[20px]'>Best artist</h4>  
                <Link href='/'>
                <a className=' text-[#868d94] text-[20px] hover:text-red-600'>Show more </a>
                </Link> 
            </div>
                <Line/>

            </div>
        </>
    );
};

export default Main;