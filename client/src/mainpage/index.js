import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import './index.css'
import NavBar from "./NavBar"

function MainPage() {
    return (
      <Router>
        <div className="MainPage">
            <NavBar/>
        </div>
      </Router>
    )
}

export default MainPage;