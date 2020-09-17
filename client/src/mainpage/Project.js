import React, {useState, useContext, useEffect} from "react"
import {useLocation} from "react-router-dom"
import PortfolioContext from "../component/PortfolioContext"

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
            <div className='shadow-sm' style={{background:'url(../assets/img/portfolioBG.jpg) center', height:'150px', backgroundSize:'cover'}}>
                <h1 className="dosis text-uppercase font-weight-bold text-center pt-5">{getProject.title}</h1>
            </div>

        </div>
    )
}

export default Project