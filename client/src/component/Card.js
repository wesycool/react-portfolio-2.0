import React from "react"
import { Link } from "react-router-dom";

function Card({item:{title,summary}}){
    const link = title.toLowerCase().replaceAll(' ','-')
    return(
        <div className='col-12 col-md-4 mt-3 mb-3'>
            <div className="card shadow mb-3" style={{height:'100%'}}>
                <img src={`./assets/project/main/${link}.jpg`} className="card-img-top" alt={title}/>
                <div className="card-body ml-3 mr-3">
                    <h3 className="card-title text-uppercase dosis">{title}</h3>
                    <hr className='bg-secondary' style={{height: '3px', opacity:'100%'}}/>
                    <p className="card-text">{summary}</p>
                    <Link to={`/portfolio/${link}`} className="btn btn-secondary btn-sm">VIEW PROJECT</Link>
                </div>
            </div>
        </div>
    )
}

export default Card