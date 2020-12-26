import React, { useState, useEffect }from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import axios from "axios"
import './App.css'

import NavBar from "./mainpage/NavBar"
import Footer from "./mainpage/Footer"
import Home from "./mainpage/Home"
import About from "./mainpage/About"
import Contact from "./mainpage/Contact"

import {HeadContext, PortfolioContext} from "./component/Context"
import Portfolio from "./mainpage/Portfolio"
import Project from "./mainpage/Project"

function App() {
  const [projects, setProjects] = useState([])
  const [headTitle, setHeadTitle] = useState()
  const mainHeadDescription = "Hi, I'm Edmund! I'm a Robotic Process Automation Business Analyst from Toronto."
  const [headDescription, setHeadDescription] = useState(mainHeadDescription)

  useEffect(() => axios.get("/api/project-list").then( ({data}) => setProjects([...data].reverse())),[])
  useEffect(() => {
      document.title = `Edmund Wong${!headTitle? '' : ` | ${headTitle}`}`
      document.querySelector('meta[name=description]').setAttribute('content',headDescription)
  }, [headTitle,headDescription])

  return (
    <Router>
      <div className="MainPage">
        <NavBar/>
        <div style={{marginTop:"3.875em"}}>
          <div className="body">
            <HeadContext.Provider value={[setHeadTitle,setHeadDescription,mainHeadDescription]}>
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

export default App;
