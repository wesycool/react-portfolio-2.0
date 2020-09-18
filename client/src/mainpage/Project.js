import React, {useState, useContext, useEffect} from "react"
import {Link, useLocation} from "react-router-dom"
import PortfolioContext from "../component/PortfolioContext"
import './Project.css'

function Project() {
    const {pathname} = useLocation()
    const [getProject, setProject] = useState({description:[]})
    const context = useContext(PortfolioContext)

    useEffect( () => {
        const project = context.filter( ({title}) => {
            return title.split(' ').join('-').toLowerCase() === pathname.split('/')[2]
        })
        setProject(project[0])
    }, [])

    return(
        <div className='container'>
            <div className='shadow-sm projectBG' style={{backgroundImage:`url(../assets/project/${pathname.split('/')[2]}.jpg)`}}>
                <div className='colorBG text-center lh-sm'>
                    <div style={{color:'white', padding:'10%', paddingTop:'min(5vh,5vw)'}}>
                        <h2 className="dosis text-uppercase" style={{fontSize:'max(5vw,5vh)'}}>{getProject.title}</h2>
                        <hr className="bg-info" style={{height: '3px', opacity:'100%'}}/>
                        <p style={{fontSize:'min(3.25vw,3.25vh, 20px)',fontWeight:'bold',paddingLeft:'3%', paddingRight:'3%'}}>{getProject.summary}</p>
                        <Link to={getProject.link} className="btn btn-info" style={{fontSize:'min(3.25vw,3.25vh, 15px)'}}>View Website</Link>
                    </div>
                </div>
            </div>
                
            <div className='mt-4'>
                <h1 className="dosis">About {getProject.title}</h1>
                <hr className="bg-info" style={{height: '3px', opacity:'100%'}}/>
                { getProject.description.map( (value) => <p key={value}>{value}</p>) }
            </div>
        </div>
    )
}

export default Project