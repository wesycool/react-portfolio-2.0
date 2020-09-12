import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import './Jumbotron.css'

function Jumbotron({info}){
    const [ background, setBackground ] = useState()

    useEffect(() => {
        const handleResize = () => {
            const orientation = window.screen.orientation.type.split('-')
            setBackground(`./assets/img/${info.title}BG-${orientation[0]}.jpg`)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
    },[])

    return(
        <div className={`${info.title}-bg jumbotron`} style={{backgroundImage:`url(${background})`}}>
            <div className='container-fluid' style={{height: '100%'}}>
                <blockquote className="ml-md-2 ml-lg-5">
                    <h1 className='dosis'>{info.h1}</h1>
                    <p className={info.quotes? 'quotes' : ''} dangerouslySetInnerHTML={{ __html: info.p}}></p>
                    <footer>{info.footer}</footer>
                    {info.btn? <Link to={info.link} className="btn btn-secondary btn-sm" target='_blank'>{info.btn}</Link> : ''}
                </blockquote>
            </div>
        </div>
    )
}

export default Jumbotron