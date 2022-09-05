import Link from 'next/link';
import React from 'react';
import CardTrackItem from '../../components/home/CardTrackItem';
import { ITrack } from '../../types/track';

const TrackPage = () => {
    const track: ITrack = {
        _id: '1', name: "Трек1", artist: "Исполнитель",
        text: "Какойто текс", listens: 5,
        audio: "http://localhost:5000/audio/3dd0aef5-8b98-4231-bac0-195366fdb497.mp3",
        picture: "http://localhost:5000/image/da9f0adb-a6bf-443f-b3df-e5a1bc3f6867.png",
        comments: []
    }

    return (
        <div>
            <Link href='/tracks'>
                <button className='text-red-600 w-10 h-10 '>X</button>
            </Link>

            {/* <div className="">
                <img className='w-[300px] h-[190px]' src={track.picture} alt="track-img" />
                <h3>{track.artist}</h3>
                <p>{track.text}</p>
                <h2>Listen: {track.listens}</h2>
                <h3>Comment</h3>
                <input type="text" />
                <input type="text" />

                <div className="">
                    {track.comments.map(comment =>
                        <div>
                            <div>Autor- {comment.username}</div>
                            <div>comment- {comment.text}</div>

                        </div>
                    )}
                </div> */}


                {/* <audio
                    controls
                    src={track.audio}>
                    <code className='bg-red-500'>audio</code> element.
                </audio> */}
{/* 
                        <button>Submit</button>
            </div> */}

            <CardTrackItem/>
        </div>
    );
};

export default TrackPage;