import React, {useState, useContext, useEffect} from "react"
import {Link, useLocation} from "react-router-dom"
import PortfolioContext from "../component/PortfolioContext"
import './Project.css'

function Project() {
    const {pathname} = useLocation()
    const [getProject, setProject] = useState({})
    const context = useContext(PortfolioContext)

    useEffect( () => {
        const project = context.filter( ({title}) => {
            return title.split(' ').join('-').toLowerCase() === pathname.split('/')[2]
        })
        setProject(project[0])
    }, [])

    return(
        <div className='container'>
            <div className='shadow-sm projectBG' style={{backgroundImage:'url(https://www.splitpixel.co.uk/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/debtadviceheader1600-720x400.jpg.webp)'}}>
                <div className='colorBG text-center lh-sm'>
                    <div style={{color:'white', padding:'10%', paddingTop:'min(5vh,5vw)'}}>
                        <h2 className="dosis text-uppercase font-weight-bold">{getProject.title}</h2>
                        <hr className='bg-secondary' style={{height: '5px', opacity:'100%'}}/>
                        <p style={{fontSize:'min(3.25vw,3.25vh, 20px)',paddingLeft:'3%', paddingRight:'3%'}}>{getProject.description}</p>
                        <Link to={getProject.link} className="btn btn-secondary" style={{fontSize:'min(3.25vw,3.25vh, 15px)'}}>View Website</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project