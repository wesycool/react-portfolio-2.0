import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route} from "react-router-dom"
import axios from "axios"

import "./index.css"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

import HeadContext from "../component/HeadContext"
import PortfolioContext from "../component/PortfolioContext"
import Portfolio from "./Portfolio"
import Project from "./Project"

function MainPage() {
    const [projects, setProjects] = useState([])
    const [headTitle, setHeadTitle] = useState()
    const [headDescription, setHeadDescription] = useState()

    useEffect( () => axios.get("/api/project-list").then( ({data}) => setProjects([...data].reverse())),[])
    useEffect( () => {document.title = `Edmund Wong${!headTitle? '' : ` | ${headTitle}`}`}, [headTitle])

    return (
      <Router>
        <div className="MainPage">
            <NavBar/>
            <div style={{marginTop:"3.875em"}}>
                <div className="body">
                    <HeadContext.Provider value={[setHeadTitle,setHeadDescription]}>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                        
                        <PortfolioContext.Provider value={projects}>
                            <Route exact path="/portfolio" component={Portfolio}/>
                            <Route path="/portfolio/:project" component={Project}/>
                        </PortfolioContext.Provider>
                    </HeadContext.Provider>
                </div>

                <Footer/>
            </div>
        </div>
      </Router>
    )
}

export default MainPage;