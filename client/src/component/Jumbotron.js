import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import './Jumbotron.css'

function Jumbotron({info:{title,p,h1,quotes,link,footer,btn}}){
    const [ background, setBackground ] = useState()

    useEffect(()=>{
        orientationChange()
        window.addEventListener('resize', orientationChange)
        window.addEventListener('orientationchange', orientationChange)
    },[])

    const orientationChange = () =>{
        const {width,height} = window.screen
        const orientation = width < height? 'portrait' : 'landscape'    
        setBackground(`./assets/img/${title}BG-${orientation}.jpg`)
    }

    return(
        <div className={`${title}-bg jumbotron`} style={{backgroundImage:`url(${background})`}}>
            <div className='container-fluid' style={{height: '100%'}}>
                <blockquote className="ml-md-2 ml-lg-5">
                    <h1 className='dosis'>{h1}</h1>
                    <p className={quotes? 'quotes' : ''} dangerouslySetInnerHTML={{ __html: p}}></p>
                    <footer>{footer}</footer>
                    {btn? <Link to={link} className="btn btn-secondary btn-sm" target='_blank'>{btn}</Link> : ''}
                </blockquote>
            </div>
        </div>
    )
}

export default Jumbotron