import React from "react"

function ProjectLink({pathTitle,value,idx}){
    return(
        <div className='col d-flex justify-content-center'>
            <a href={value} target='blank' className='text-center small link-secondary'>
                <img src={`../assets/project/img/${pathTitle}${idx}.png`} style={{width:'auto', height:'auto', maxWidth:'90vw', maxHeight:'300px'}}/>
                <p>{value}</p>
            </a>
        </div>
    )
}

export default ProjectLink