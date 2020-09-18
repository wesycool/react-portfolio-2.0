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
        {_id:'1', title:'Casino App', category: 'mobile app', summary:'A mobile game application that simulates poker slot machines at a real casino.', description:[], link:'', img:''},
        {_id:'2',title:'Bookify', category: 'web dev', summary:'A web application that helps connect consumers with businesses through minimal contact and precise bookings.',description:["Bookify is a convenient web application designed to allow users to research and discover the ideal venue for whatever they are looking for. Whether you're looking for top reviewed barbershops, the cheapest auto repair shop or the top new restaurant in town, Bookify will not only find it for you but book it for you as well.","Bookify is simple to use, just search for what you're interested in and all the information you need will populate. You will be given addresses, images, reviews and for the options presented; you will also be given a featured option on the business page for i.e. a restaurant that is trending near you. Once you've made a decision, Bookify will give you the option to book that service directly through the app."], link:'', img:''}, 
        {_id:'3',title:'Dice Pizzeria', category: 'web dev', summary:'A full service restaurant management and online ordering system.',description:["Dice Pizzeria is a full service restaurant management and online ordering system. This cloud-based platform was developed to simplify day-to-day operations from receiving and executing orders to managing staff.","With an easy to use UI for customers to place orders and a concise back end for receiving orders, Dice Pizzeria is capable of running their restaurant at optimal capability.","With the global pandemic impacting business all around the world some of the hardest hit have been in the restaurant industry. We wanted to help places we love to dine at by providing them with a solution to run their business more efficiently. The restaurant business is a very difficult and time consuming industry. A motivating factor was to create an all-in-one solution for restaurateurs to simplify day-to-day operations in one, concise platform. With technology and convenience being a motivating factor for choosing which app to order food from, we wanted to give business owners the opportunity to receive direct orders from their clients, bypassing the big apps which demand a significant portion of profits."], link:'', img:''}, 
        {_id:'4',title:'nutShell', category: 'web dev', summary:'A mobile first web application that aims to consolidate the digital organizational tools we employ on a daily basis into one space.', description:["nutShell is a mobile first web application that aims to consolidate the digital organizational tools we employ on a daily basis into one space. Users will be able to customize the platform to best satisfy their preferences, eliminating the need for multiple, independent applications.","As everyday mobile users ourselves, we aimed to develop a dashboard application that would help resolve the common issue of overcrowding; the need for multiple applications and the flood of irrelevant information we’re often bombarded with. In doing so, we hope to streamline these processes and make the task of organizing daily life more user friendly."], link:'', img:''},
        {_id:'5',title:'Google Books', category: 'web dev', summary:'React app that allows to search books and save it using Google Books API.', description:[],link:'', img:''},
        {_id:'6',title:'Employee Directory', category: 'web dev', summary:'Employee directory web application, where the user can search by first name, last name, city, province and/or any combination.', description:[],link:'', img:''}
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