import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentSongContext } from "../../contexts/CurrentSong";
import { backendURL } from "../../utils/backendUrl";
import './Album.css'

const Album = (props) => {
    const id = props.match.params.id
    const [song, setSong] = useContext(CurrentSongContext)
    const [songs, setSongs] = useState([])
    useEffect(() => {
        fetch(`${backendURL}/album/${id}`)
            .then(data => data.json())
            .then(data => {
                console.log(`songs of ${id} is `, data.data)
                setSongs(data.data)
            })
    }, [])

    return(
        <div>
            <nav className='album-nav'>
                <div className='album-nav-link' ><Link to={'/Home'} >Home</Link></div>
                <div className='album-nav-link' ><a href='http://localhost:3000/admin'>Admin Login</a></div>
                
                {/* <div className='album-nav-link'><div onClick={()=>{console.log('redirecting');window.location('http://localhost:3000/admin');}} >Admin Login</div></div> */}
            </nav>
            <div className='title-container'>
                <h1>{props.match.params.id}</h1>
            </div>
            {songs.map((element, index) => <div className='songContainer' key={index} onClick={event => {setSong([element.id, element.name])}}><h4>{element.name}</h4></div>)}
        </div>
    )
}

export default Album