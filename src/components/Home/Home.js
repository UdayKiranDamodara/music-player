import React, { useEffect, useState, useContext } from "react";

import { SearchContext } from '../../contexts/SearchContext'
import Card from "../Card/Card";
import { backendURL } from "../../utils/backendUrl";

import './Home.css'

const Home = () => {

    //const [search, setSearch] = useState('')
    const [search, setSearch] = useContext(SearchContext)
    const [songs, setSongs] = useState([])
    const [artists, setArtists] = useState([])
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        if(search===''){ // Fetch All
            // fetch all songs
            fetch(backendURL)
                .then(res => res.json())
                .then(data => {
                    //console.log(data)
                    setSongs(data.data.songSearch)
                    setArtists(data.data.artistSearch)
                    setAlbums(data.data.albumSearch)
                    })
        }
        else {
            console.log('fetch', search)
            // fetch song
            fetch(`${URL}/search/${search}`)
                .then(res => res.json())
                .then(data => {
                    //console.log(data)
                    setSongs(data.data.songSearch)
                    setArtists(data.data.artistSearch)
                    setAlbums(data.data.albumSearch)
                    })
        }
        
    }, [search])

    useEffect(()=>{
        // console.log('songs', songs)
        // console.log('albums', albums)
        // console.log('artists', artists)
    }, [songs, artists, albums])

    return(
        <div className='home' style={{marginBottom: '10vh'}}>
            <div className='search-container'>
            <input 
                className='search'
                type='text' 
                placeholder='Search for Song or Album or Artist' 
                value={search}
                onChange={event => setSearch(event.target.value)} 
            />
            <a id='admin' href='/admin'>Admin Login</a>
            </div>
            <div className='songsList-container h1-pd20'>
            <h1>Songs</h1>
            <div className='list'>{(songs.length !== 0) ? songs.map((element, index) => <Card key={index} type='song' displayName={element} />) : <h4>No Songs found for "{search}"</h4>}</div>
            </div>
            <hr />
            <div className='artistsList-container h1-pd20'>
            <h1>Artists</h1>
            <div className='list'>{(artists.length !== 0) ? artists.map((element, index) => <Card key={index} type='artist' displayName={element.artist} />) : <h4>No Artists found for "{search}"</h4>}</div>
            </div>
            <hr />
            <div className='albumsList-container h1-pd20'>
            <h1>Albums</h1>
            <div className='list'>{(albums.length !== 0) ? albums.map((element, index) => <Card key={index} type='album' displayName={element.album} />) : <h4>No Albums found for "{search}"</h4>}</div>
            </div>
        </div>
    )
}

export default Home