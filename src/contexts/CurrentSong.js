import React, { useState, createContext } from 'react'

export const CurrentSongContext = createContext();

const CurrentSongContextProvider = (props) => {

    const [song, setSong] = useState([])

    return(
        <CurrentSongContext.Provider value={[song, setSong]}>
            {props.children}
        </CurrentSongContext.Provider>
    )
}

export default CurrentSongContextProvider