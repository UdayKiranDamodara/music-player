import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import  CurrentSongContextProvider from './contexts/CurrentSong'
import SearchContextProvider from './contexts/SearchContext'
// import IsLoggedInContextProvider from './contexts/isLoggedIn'

import Home from "./components/Home/Home";
import Player from './components/Player/Player'
import Album from './components/Album/Album'
import Artist from './components/Artist/Artist'

const App = () => {

    return(
        <CurrentSongContextProvider>
        <SearchContextProvider>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/home' exact render={()=>(<Redirect to='/' />)}/>
                    <Route path='/search' exact render={()=>(<Redirect to='/' />)}/>
                    <Route path='/album/:id' exact component={Album}/>
                    <Route path='/artist/:id' exact component={Artist} />

                    <Route path='/' render={()=>(<Redirect to='/' />)}/>
                </Switch>
                <Player />
            </Router>
        </SearchContextProvider>
        </CurrentSongContextProvider>
    )
}

export default App;