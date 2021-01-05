import React, { useContext, useEffect } from 'react'
import { CurrentSongContext } from "../../contexts/CurrentSong";

import './Player.css'

const Player = () => {
    const [song, setSong] = useContext(CurrentSongContext)

    useEffect(()=>{
        console.log('in useEffect of Player')
        const audio = document.getElementById('audio')
        if(audio !== null){
            audio.load()
        }

    }, [song])
    return (
        <div className='player'>
            {(song[0] !== undefined) ? <audio id='audio' controls autoPlay>
                <source src={`https://docs.google.com/uc?export=download&id=${song[0]}`} type='audio/mpeg'></source>
            </audio> :<div />}
            <h4>{song[0]}</h4>
            <h4>{song[1]}</h4>
        </div>
    )
}

export default Player