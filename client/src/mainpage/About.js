import React, { useEffect, useContext } from "react"
import HeadContext from "../component/HeadContext"
import Jumbotron from "../component/Jumbotron"
import './About.css'


function About(){
    const [setHeadTitle,setHeadDescription] = useContext(HeadContext)
    useEffect(()=> {
        setHeadTitle('About Me')
        setHeadDescription("Hi, I'm Edmund! I'm a Business Analyst and Process Consultant from Toronto.\nI enjoy understanding the thought process of how things works. I also love learning game-changing technology trends and I'm currently into mobile/web development and data science.")
    },[])

    const info = {
        title : 'about',
        h1: 'EDMUND WONG.',
        p : 'ROBOTIC PROCESS AUTOMATION BUSINESS ANALYST.',
        quotes: false,
        btn: 'DOWNLOAD RESUME',
        link: './assets/pdf/resume.pdf'
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