import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import './index.css'
import NavBar from "./NavBar"
import Footer from "./Footer"
import Home from "./Home"
import About from "./About"

import PortfolioContext from "../component/PortfolioContext"
import Portfolio from "./Portfolio"
import Project from './Project'

function MainPage() {
    const item = [
        {title:'Casino App', category: 'mobile app', description:'A mobile game application that simulates poker slot machines at a real casino.', link:'', img:''},
        {title:'Bookify', category: 'web dev', description:'A web application that helps connect consumers with businesses through minimal contact and precise bookings.', link:'', img:''}, 
        {title:'Dice Pizzeria', category: 'web dev', description:'A full service restaurant management and online ordering system.', link:'', img:''}, 
        {title:'nutShell', category: 'web dev', description:'A mobile first web application that aims to consolidate the digital organizational tools we employ on a daily basis into one space.', link:'', img:''},
        {title:'Google Books', category: 'web dev', description:'React app that allows to search books and save it using Google Books API.', link:'', img:''},
        {title:'Employee Directory', category: 'web dev', description:'Employee directory web application, where the user can search by first name, last name, city, province and/or any combination.', link:'', img:''},
        {title:'Budget Tracker', category: 'web dev', description:'A budget app that allows inputting and tracking all transactions in either online or offline mode.', link:'', img:''},
        {title:'Eat-Da-Burger', category: 'web dev', description:'A web application that allows you to add burgers of your choices and devour it.', link:'', img:''},
        {title:'Employee Summary', category: 'web dev', description:'A command line application that generates information about the software engineering team onto a website.', link:'', img:''},
        {title:'Weather Dashboard', category: 'web dev', description:'A web application that gets current weather and a 5-day forecast from anywhere in the world.', link:'', img:''},
        {title:'Rock Paper Scissors', category: 'web dev', description:'A Rock-Paper-Scissors web applicaiton game.', link:'', img:''},
    ]

    return (
      <Router>
        <div className="MainPage">
            <NavBar/>
            <div style={{marginTop:'3.875em'}}>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>

                <PortfolioContext.Provider value={item}>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route path="/portfolio/:project" component={Project}/>
                </PortfolioContext.Provider>
                <Footer/>
            </div>
        </div>
      </Router>
    )
}

export default MainPage;