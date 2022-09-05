import Link from 'next/link';
import React from 'react';
import PlayListItem from '../../components/home/PlayListItem';

const Index = () => {
    return (
        <>
            <div className="flex flex-1">
                <h1> СПИСОК АЛЬБОМОВ</h1>
                <Link href='/tracks/create'>
                    <button className='btn_auth text-white 
                    ml-10 mt-10 rounded-full h-[40px] min-w-[120px] '>
                        Download
                    </button>
                </Link>
            </div>

            {/* <PlayListItem tracks={[]} /> */}
        </>
    );
};

export default Index;