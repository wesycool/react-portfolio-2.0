import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import './index.css'
import NavBar from "./NavBar"
import Footer from "./Footer"
import Home from "./Home"
import About from "./About"


function MainPage() {
    return (
      <Router>
        <div className="MainPage">
            <NavBar/>
            <div style={{marginTop:'3.875em'}}>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Footer/>
            </div>
        </div>
      </Router>
    )
}

export default MainPage;