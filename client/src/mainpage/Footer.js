import React from "react"
import { Link } from "react-router-dom";

function Footer(){

    return(
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid ml-md-2 ml-lg-5">
                <div className='row'>
                    <div className='col mt-1'>
                        <Link to="/" className="navbar-brand">E D M U N D</Link>
                    </div>

                    <div className='col-12 col-sm-6 col-md-7 col-xl-8 pt-2 mt-1 text-sm-right text-secondary'>
                        Stay Connected.
                    </div>

                    <nav className="nav col-12 col-sm justify-content-sm-center justify-content-md-end mr-md-2 mr-lg-5">
                        <Link to={{pathname:"https://github.com/wesycool"}} className="nav-link link-secondary" target='_blank'><i className="fab fa-github-square"></i></Link>
                        <Link to={{pathname:"https://www.linkedin.com/in/edwongca/"}} className="nav-link link-secondary" target='_blank'><i className="fab fa-linkedin"></i></Link>
                    </nav>

                    <div className='col-12 text-secondary' style={{fontSize:'x-small'}}>
                        Copyright © 2020 Edmund Wong. All rights reserved.
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Footer