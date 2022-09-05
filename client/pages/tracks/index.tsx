import React from 'react';
import PlayListItem from '../../components/home/PlayListItem';
import { ITrack } from '../../types/track';


const Index = () => {
    const tracks: ITrack[] = [
        {_id: '1', name: "Трек1", artist: "Исполнитель",
         text:"Какойто текс", listens: 5, 
         audio: "http://localhost:5000/audio/3dd0aef5-8b98-4231-bac0-195366fdb497.mp3",
         picture: "http://localhost:5000/image/da9f0adb-a6bf-443f-b3df-e5a1bc3f6867.png",
         comments: []
        },
        {_id: '2', name: "Трек1", artist: "Исполнитель",
         text:"Какойто текс", listens: 5, 
         audio: "http://localhost:5000/audio/3dd0aef5-8b98-4231-bac0-195366fdb497.mp3",
         picture: "http://localhost:5000/image/da9f0adb-a6bf-443f-b3df-e5a1bc3f6867.png",
         comments: [] 
        },
    ]
    return (
        <>
           <h1> СПИСОК ТРЕКОВ</h1>
           
           <PlayListItem tracks={tracks} />
        </>
    );
};

export default Index;