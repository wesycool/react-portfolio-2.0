import React, {useContext, useState, useEffect} from "react"
import {HeadContext} from "../component/Context"
import Orientation from "../component/Orientation"
import './Home.css'
import '../component/Jumbotron.css'

function Home(){
    const [ setHeadTitle, setHeadDescription, mainHeadDescription ] = useContext(HeadContext)
    const [ background, setBackground ] = useState(Orientation())
    useEffect(() => setHeadTitle(),[])
    useEffect(() => setHeadDescription(mainHeadDescription),[])
    useEffect(() => window.addEventListener('resize', () => setBackground(Orientation())),[])

    return(
        <div className='main-bg jumbotron' style={{backgroundImage:`url(./assets/img/mainBG-${background}.jpg)`}}>
            <div className='container-fluid' style={{height: '100%'}}>
                <blockquote className="ml-md-2 ml-lg-5">
                    <p className='quotes' dangerouslySetInnerHTML={{ __html:'To improve is to change;<br/>to be perfect is to change often'}}></p>
                    <footer>~ Winston Churchill ~</footer>
                </blockquote>
            </div>
        </div>
    )
}

export default Home