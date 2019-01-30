import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './pages/LoginForm'
import Home from './pages/Home'

export default function MainRouter () {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
            </div>
        </Router>
    )
}