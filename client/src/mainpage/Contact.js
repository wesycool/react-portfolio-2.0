import React, {useState, useContext, useEffect} from "react"
import './Contact.css'

function Contact(){

    return(
        <div className='container'>
            <div className='shadow-sm d-flex justify-content-center' style={{background:'url(./assets/img/portfolioBG.jpg)',backgroundSize:'cover'}} id='contactBG'>
                <div className="col-12 col-md-9 col-lg-5">
                    <div className="transparent pl-3 pr-3 pb-3">
                        <h1 className="dosis text-uppercase text-center pt-5">Get in touch</h1>
                        <div class="mb-3 row">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>

                        <input type="button"  value="submit" className="btn btn-secondary"/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact