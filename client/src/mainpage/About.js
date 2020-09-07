import React from "react"
import Jumbotron from "../component/Jumbotron"
import './About.css'

function About(){
    const info = {
        title : 'about',
        h1: 'EDMUND WONG.',
        p : 'LEAN PROCESS CONSULTANT.',
        quotes: false,
        btn: 'DOWNLOAD RESUME'
    }

    return(
        <div>
            <Jumbotron info={info} />
            <div>
            </div>
        </div>
    )
}

export default About