import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { CurrentSongContext } from "../../contexts/CurrentSong";


import './Card.css';

const Card = ({type, displayName}) => {
    const [song, setSong] = useContext(CurrentSongContext)

    return(
        <div className='card-container'>
            {(type !== 'song') 
                ?   <div className='Card'><Link to={`${type}/${displayName}`} ><div>                     
                            <img src='#' width='180px' height='180px'/>
                            <h6>{`${displayName}`}</h6></div>
                    </Link></div>
                :   <div className='Card' onClick={event =>{console.log('setting current song to:', displayName.name); setSong([displayName.id, displayName.name])}} >
                        <img src='#' width='180px' height='180px'/>
                        <h6>{`${displayName.name}`}</h6>
                    </div>
            }
        </div>
    )
}

export default Card