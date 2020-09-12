import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";

function Card({item}){

    return(
        <div className='col-12 col-md-4 mt-3 mb-3'>
            <div className="card shadow mb-3" style={{height:'100%'}}>
                <img src="https://www.splitpixel.co.uk/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/debtadviceheader1600-720x400.jpg.webp" className="card-img-top" alt="..."/>
                <div className="card-body ml-3 mr-3">
                    <h3 className="card-title text-uppercase dosis">{item.title}</h3>
                    <hr className='bg-secondary' style={{height: '5px', opacity:'100%'}}/>
                    <p className="card-text">{item.description}</p>
                    <Link to={`/portfolio/${item.title.toLowerCase().replaceAll(' ','-')}`} className="btn btn-secondary btn-sm">VIEW PROJECT</Link>
                </div>
            </div>
        </div>
    )
}

export default Card