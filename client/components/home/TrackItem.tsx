import Link from 'next/link';
import React, { FC } from 'react';
import { ITrack } from '../../types/track';
import PauseIconBtn from './PauseIconBtn';
import PlayIconBtn from './PlayIconBtn';


interface TrackItemProps {
    track: ITrack;
    active?: boolean
}
const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
    console.log(track);

    return (
        <>
            <div className="mt-10">

                <div className="flex border-b-2 border-gray-800">
                    {!active
                        ? (
                            <PlayIconBtn />
                        )
                        :
                        (
                            <PauseIconBtn />
                        )
                    }
                    <div className="p-3 w-[100px]  flex-shrink-0">
                    <Link  href={`/tracks/${track._id}`}>
                        <img src={track.picture} alt="" />
                        </Link>

                    </div>
                    <div className="p-4 w-full">
                        <p>{track.name}</p>
                        <span className='text-xs text-[#868d94]'>{track.text}</span>
                    </div>
                   
                    <img className='h-4 mt-10' src="/img/love.svg" alt="" />
                    <div className="p-3 mt-6 w-12 flex-shrink-0 text-right">
                        {active && <div>02:42/ 03:22</div>}
                        <svg id="icon-bin" viewBox="0 0 32 32">
                            <path d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path>
                            <path d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path>
                        </svg>
                    </div>
                    <img className='w-6 h-6 mt-9 hover:fill-[#868d94]' src="/img/ellipsis-vertical.svg" alt="" />
                </div>
            </div>
        </>
    );
};

export default TrackItem;