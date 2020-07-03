import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Marketplace from './marketplace/Marketplace'
import Landing from './landing/Landing'
import About from './about/About'
import Contact from './contact/Contact'
import '../styles/main.css';

export default class Main extends Component {
    render() {
        return (
            <main className="main-section">
                <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route path='/about' component={About}/>
                    <Route path='/marketplace' component={Marketplace}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </main>
        )
    }
}
