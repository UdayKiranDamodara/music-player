import React, { useState, useContext, useEffect } from 'react'
import { isLoggedInContext } from "../../contexts/isLoggedIn";
import { backendURL } from "../../utils/backendUrl";

import '../Admin/Admin.css'

const AddSong = () => {
    const [link, setLink] = useState('')
    const [songName, setSongName] = useState('')
    const [album, setAlbum] = useState('')
    const [artist, setArtist] = useState('')
    // const [genre, setGenre] = useState('')

    const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedInContext)

    useEffect(()=>{
        console.log('isLoggedIn', isLoggedIn)
    },[isLoggedIn])

    const submit = (event) => {
        event.preventDefault()
        //console.log(link, songName, album, artist, genre)
        fetch(`${backendURL}/add-song`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                link, songName, album, artist
            })
        }).then(res=>res.json()).then(data=>console.log(data))
    }

    return (
        <div>
            {(isLoggedIn === true)
                ?   <form className='form' onSubmit={event => submit(event)}>
                        <input className='form-element' type='text' value={`${link}`} onChange={event => setLink(event.target.value)} placeholder='Google Drive Link' name='driveLink' />
                        <input className='form-element' type='text' value={`${songName}`} onChange={event => setSongName(event.target.value)} placeholder='Song Name' name='songName' />
                        <input className='form-element' type='text' value={`${album}`} onChange={event => setAlbum(event.target.value)} placeholder='Album' name='album' />
                        <input className='form-element' type='text' value={`${artist}`} onChange={event => setArtist(event.target.value)} placeholder='Artist' name='artist' />
                        {/* <input type='text' value={`${genre}`} onChange={event => setGenre(event.target.value)} placeholder='Genre' name='genre' /> */}
                        <button className='form-element' type='submit'>Submit</button>
                        {/* <button className='form-element' type='reset'>Reset</button> */}
                    </form> 
                : <h1>Wrong Password</h1>
            }
        </div>
    )
}

export default AddSong