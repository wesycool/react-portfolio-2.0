import React from "react"
import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const {pathname} = useLocation()
    const navItem = [
        { 'name': 'HOME', 'link': '/' },
        { 'name': 'SERVICE', 'link': '/service' },
        { 'name': 'PORTFOLIO', 'link': '/portfolio' },
        { 'name': 'BLOG', 'link': '/blog' },
        { 'name': 'ABOUT', 'link': '/about' },
        { 'name': 'CONTACT', 'link': '/contact' }
    ]

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

                            {navItem.map(({name,link}) => {
                                return(
                                    <li className="nav-item" key={name.toLowerCase()}>
                                        <Link to={link} className={`nav-link ${pathname === link ? "active" : ""}`}>
                                            {name}
                                        </Link>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default NavBar;