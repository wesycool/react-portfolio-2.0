import React, { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom";
import {HeadContext} from "../component/Context"
import Orientation from "../component/Orientation"
import './About.css'
import '../component/Jumbotron.css'

function About(){
    const [ setHeadTitle, setHeadDescription, mainHeadDescription ] = useContext(HeadContext)
    const [ background, setBackground ] = useState(Orientation())
    useEffect(() => setHeadTitle('About Me'),[])
    useEffect(() => setHeadDescription(mainHeadDescription),[])
    useEffect(() => window.addEventListener('resize', () => setBackground(Orientation())),[])
    
    return(
        <div className='about-bg jumbotron' style={{backgroundImage:`url(./assets/img/aboutBG-${background}.jpg)`}}>
            <div className='container-fluid' style={{height: '100%'}}>
                <blockquote className="ml-md-2 ml-lg-5">
                    <h1 className='dosis'>EDMUND WONG.</h1>
                    <p>ROBOTIC PROCESS AUTOMATION BUSINESS ANALYST.</p>
                    <Link to='./assets/pdf/resume.pdf' className="btn btn-secondary btn-sm" target='_blank'>DOWNLOAD RESUME</Link>
                </blockquote>
            </div>
        </div>
    )
}

export default About