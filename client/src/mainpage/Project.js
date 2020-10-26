import React, {useState, useContext, useEffect} from "react"
import {useLocation} from "react-router-dom"
import PortfolioContext from "../component/PortfolioContext"
import './Project.css'

function Project() {
    const {pathname} = useLocation()
    const [getProject, setProject] = useState({description:[],tools:[]})
    const context = useContext(PortfolioContext)

    useEffect( () => {
        const project = context.filter( ({title}) => {
            return title.split(' ').join('-').toLowerCase() === pathname.split('/')[2]
        })
        setProject(project[0])
    }, [])

    return(
        <div className='container mb-5'>
            <div className='shadow-sm projectBG' style={{backgroundImage:`url(../assets/project/${pathname.split('/')[2]}.jpg)`}}>
                <div className='colorBG text-center lh-sm'>
                    <div style={{color:'white', padding:'10%', paddingTop:'min(5vh,5vw)'}}>
                        <h2 className="dosis text-uppercase" style={{fontSize:'max(5vw,5vh)'}}>{getProject.title}</h2>
                        <hr className="bg-info" style={{height: '3px', opacity:'100%'}}/>
                        <p style={{fontSize:'min(3.25vw,3.25vh, 20px)',fontWeight:'bold',paddingLeft:'3%', paddingRight:'3%'}}>{getProject.summary}</p>
                        <a href={getProject.github} target='blank' className="btn btn-info" style={{fontSize:'min(3.25vw,3.25vh, 15px)'}}>Visit Github</a>
                        { getProject.link? <a href={getProject.link[0].src} target='blank' className="btn btn-info" style={{fontSize:'min(3.25vw,3.25vh, 15px)',marginLeft:'10px'}}>View Website</a> : ''}
                        
                    </div>
                </div>
            </div>
                
            <div className='mt-4'>
                <h1 className="dosis">About {getProject.title}</h1>
                <hr className="bg-info" style={{height: '3px', opacity:'100%'}}/>
                { getProject.description.map( (value) => <p key={value}>{value}</p>) }
            </div>

            <div className='mt-4'>
                <h1 className="dosis">Tools & Technologies</h1>
                <hr className="bg-info" style={{height: '3px', opacity:'100%'}}/>
                <div className='row'>
                    { getProject.tools.map( (value) => 
                        <div className='col d-flex justify-content-center'>
                            <img src={`../../assets/icon/${value}.png`} alt={value} style={{height:'40px',margin:'10px'}}/>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Project