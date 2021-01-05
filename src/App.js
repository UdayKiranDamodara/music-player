import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import  CurrentSongContextProvider from './contexts/CurrentSong'
import SearchContextProvider from './contexts/SearchContext'
import IsLoggedInContextProvider from './contexts/isLoggedIn'

import Admin from './components/Admin/Admin'
import AddSong from './components/AddSong/AddSong'
import Home from "./components/Home/Home";
import Player from './components/Player/Player'
import Album from './components/Admin/Admin'
import Artist from './components/Artist/Artist'

const App = () => {

    return(
        <IsLoggedInContextProvider>
        <CurrentSongContextProvider>
        <SearchContextProvider>
            <Router >
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/home' exact render={()=>(<Redirect to='/' />)}/>
                    <Route path='/search' exact render={()=>(<Redirect to='/' />)}/>
                    <Route path='/album/:id' exact component={Album}/>
                    <Route path='/artist/:id' exact component={Artist} />
                    <Route path='/admin' exact component={Admin}/>
                    <Route path='/admin/add-song' exact component={AddSong} />

                    {/* <Route path='/' render={()=>(<Redirect to='/' />)}/> */}
                </Switch>
                <Player />
            </Router>
        </SearchContextProvider>
        </CurrentSongContextProvider>
        </IsLoggedInContextProvider>
    )
}

export default App;