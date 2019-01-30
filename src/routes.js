import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import User from './pages/userProfile'
import Home from './pages/Home'

export default function MainRouter () {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/user" component={User}/>
            </div>
        </Router>
    )
}