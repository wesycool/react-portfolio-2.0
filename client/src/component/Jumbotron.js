import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";

function Jumbotron({page}){
    const [ background, setBackground ] = useState()

    useEffect(() => {
        const handleResize = () => {
            const orientation = window.screen.orientation.type.split('-')
            setBackground(`./assets/img/${page.title}BG-${orientation[0]}.jpg`)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
    },[])

    return(
        <div className={`${page.title}-bg`} style={{backgroundImage:`url(${background})`}}>
            <div className='container-fluid'>
                <blockquote className="ml-md-2 ml-lg-5">
                    <h1>{page.h1}</h1>
                    <p dangerouslySetInnerHTML={{ __html: page.p}}></p>
                    <footer>{page.footer}</footer>
                    {page.btn? <Link to="/" className="btn btn-secondary btn-sm">{page.btn}</Link> : ''}
                </blockquote>
            </div>
        </div>
    )
}

export default Jumbotron