import React from "react"
import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const {pathname} = useLocation()

    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="row">
                    <button class="navbar-toggler col-2 col-sm-1" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class='col-8 col-sm-10 col-md-1 ml-md-2 ml-lg-5 navbar-brand'>
                        <Link to="/" class="navbar-brand">E D M U N D</Link>
                    </div>


                    <div class="collapse navbar-collapse col-12 col-md mr-md-2 mr-lg-5 justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-md-0">
                            <li class="nav-item">
                                <Link to="/about" class={pathname === '/about' ? "nav-link active" : "nav-link"}>ABOUT</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class={pathname === '/contact' ? "nav-link active" : "nav-link"}>CONTACT</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default NavBar;