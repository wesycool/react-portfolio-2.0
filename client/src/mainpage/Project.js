import React, {useState, useContext, useEffect} from "react"
import {useParams} from "react-router-dom"
import {HeadContext, PortfolioContext} from '../component/Context'
import ProjectLink from "../component/ProjectLink"
import './Project.css'

function Project() {
    const [setHeadTitle,setHeadDescription] = useContext(HeadContext)
    const context = useContext(PortfolioContext)
    const [getProject, setProject] = useState({description:[],tools:[],link:[]})
    const {title, summary, description, tools, github, link} = getProject
    const {project} = useParams()
    

    useEffect(() => window.scrollTo(0, 0),[])
    useEffect(() => setHeadTitle(title),[getProject])
    useEffect(() => setHeadDescription(summary),[getProject])
    useEffect(() => {
        const findProject = context.find(({title}) => title.toLowerCase().replace(' ','-') === project)
        setProject(!context.length? getProject : findProject)
    },[context])


    return(
        <div className='container mb-5'>
            <div className='shadow-sm projectBG' style={{backgroundImage:`url(../assets/project/main/${project}.jpg)`}}>
                <div className='colorBG text-center lh-sm'>
                    <div style={{color:'white', padding:'10%', paddingTop:'min(5vh,5vw)'}}>
                        <h2 className="dosis text-uppercase" style={{fontSize:'max(5vw,5vh)'}}>{title}</h2>
                        <hr className="bg-info" style={{height: '3px', opacity:'100%'}}/>
                        <p style={{fontSize:'min(3.25vw,3.25vh, 20px)',fontWeight:'bold',paddingLeft:'3%', paddingRight:'3%'}}>{summary}</p>
                        <a href={github} target='blank' className="btn btn-info" style={{fontSize:'min(3.25vw,3.25vh, 15px)'}}>Visit Github</a>
                        {!link.length? '' : <a href={link[0]} target='blank' className="btn btn-info" style={{fontSize:'min(3.25vw,3.25vh, 15px)',marginLeft:'10px'}}>View Website</a>}
                    </div>
                </div>
            </div>
                
            <div className='mt-4'>
                <h1 className="dosis">About {title}</h1>
                <hr className="bg-info" style={{height: '3px', opacity:'100%'}}/>
                {description.map((value,key) => <p key={key}>{value}</p>)}
            </div>

            <div className='mt-4 row'>
                {!link.length? <ProjectLink project={project} value={github} idx={''}/> 
                    : link.map((value, key) => <ProjectLink project={project} value={value} idx={key} key={key}/>)
                }
            </div>

            <div className='mt-4'>
                <h1 className="dosis">Tools & Technologies</h1>
                <hr className="bg-info" style={{height: '3px', opacity:'100%'}}/>
                <div className='row'>
                    {tools.map((value,key) => 
                        <div className='col d-flex justify-content-center' key={key}>
                            <img src={`../../assets/icon/${value}.png`} alt={value} title={value} style={{height:'40px',margin:'10px'}}/>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Project