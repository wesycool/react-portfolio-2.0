import React from "react"
import { Link, useRouteMatch } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow fixed-top">
            <div className="container-fluid">
                <div className="row">
                    <button className="navbar-toggler col-2 col-sm-1" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className='col-8 col-sm-10 col-md-1 ml-md-2 ml-lg-5 navbar-brand'>
                        <Link to="/" className="navbar-brand">E D M U N D</Link>
                    </div>


                    <div className="collapse navbar-collapse col-12 col-md mr-md-2 mr-lg-5 justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-md-0 mt-2">
                            <li className="nav-item text-uppercase">
                                <Link to='/' className={`nav-link ${useRouteMatch('/').isExact? "active" : ""}`}>Home</Link>
                            </li>
                            {/* <li className="nav-item text-uppercase">
                                <Link to='/service' className={`nav-link ${useRouteMatch('/service')? "active" : ""}`}>Service</Link>
                            </li> */}
                            <li className="nav-item text-uppercase">
                                <Link to='/portfolio' className={`nav-link ${useRouteMatch('/portfolio')? "active" : ""}`}>Portfolio</Link>
                            </li>
                            {/* <li className="nav-item text-uppercase">
                                <Link to='/blog' className={`nav-link ${useRouteMatch('/blog')? "active" : ""}`}>Blog</Link>
                            </li> */}
                            <li className="nav-item text-uppercase">
                                <Link to='/about' className={`nav-link ${useRouteMatch('/about')? "active" : ""}`}>About</Link>
                            </li>
                            <li className="nav-item text-uppercase">
                                <Link to='/contact' className={`nav-link ${useRouteMatch('/contact')? "active" : ""}`}>Contact</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default NavBar;