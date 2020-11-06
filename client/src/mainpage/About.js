import React, { useEffect, useContext } from "react"
import HeadContext from "../component/HeadContext"
import Jumbotron from "../component/Jumbotron"
import './About.css'


function About(){
    const [setHeadTitle,setHeadDescription,mainHeadDescription] = useContext(HeadContext)
    useEffect(()=> {
        setHeadTitle('About Me')
        setHeadDescription(mainHeadDescription)
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