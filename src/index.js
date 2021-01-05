import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Switch, Route} from 'react-router-dom'

import IsLoggedInContextProvider from './contexts/isLoggedIn'

import App from './App'
import Admin from './components/Admin/Admin'
import AddSong from './components/AddSong/AddSong'

import './index.css'

ReactDom.render(
    <IsLoggedInContextProvider>
    <Router>
        <Switch>
            <Route path='/admin' exact component={Admin}/>
            <Route path='/admin/add-song' exact component={AddSong} />
            <Route path='/' component={App}/>
        </Switch>
    </Router>
    </IsLoggedInContextProvider>

, document.getElementById('root'))