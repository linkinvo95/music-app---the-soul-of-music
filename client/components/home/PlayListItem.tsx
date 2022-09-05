import React, { FC } from 'react';
import { ITrack } from '../../types/track';
import TrackItem from './TrackItem';

interface TrackListProps {
    tracks: ITrack[]
}

const PlayListItem: FC<TrackListProps> = ({ tracks }) => {
    console.log('gg',tracks);
    
    return (
        <div>
            <div className=" text-gray-300 min-h-screen p-10">
                {tracks.map(track =>
                    <TrackItem key={track._id} track={track}/>
                )
                }
            </div>
        </div>
    );
};

export default PlayListItem;