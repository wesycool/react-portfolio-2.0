import React from "react"
import Jumbotron from "../component/Jumbotron"
import './About.css'

function About(){
    const info = {
        title : 'about',
        h1: 'EDMUND WONG.',
        p : 'LEAN PROCESS CONSULTANT.',
        btn: 'DOWNLOAD RESUME'
    }

    return(
        <Jumbotron page={info} />
    )
}

export default About