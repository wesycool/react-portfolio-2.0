import React, { useRef, useContext, useEffect } from "react";
import emailjs from 'emailjs-com';
import env from "react-dotenv";
import {HeadContext} from "../component/Context"
import './Contact.css'

function Contact(){
    const [setHeadTitle,setHeadDescription,mainHeadDescription] = useContext(HeadContext)
    useEffect(() => setHeadTitle('Contact Me'),[])
    useEffect(() => setHeadDescription(mainHeadDescription),[])
    const {current} = useRef({})

    const sendMessage = () => {
        const {firstName, lastName, email, message} = current
        const template_params = {
            "reply_to": email.value,
            "from_name": `${firstName.value} ${lastName.value}`,
            "to_name": "Edmund",
            "message_html": message.value
        }

        emailjs.send(env.SERVICEID, env.TEMPLATEID, template_params, env.USERID)
        Object.values(current).map(e => e.value = '')
    }

    return(
        <div className='container'>
            <div className='shadow-sm d-flex justify-content-center' style={{background:'url(./assets/img/portfolioBG.jpg)',backgroundSize:'cover'}} id='contactBG'>
                <div className="col-12 col-md-9 col-lg-5">
                    <div className="transparent pl-3 pr-3 pb-3">
                        <h1 className="dosis text-uppercase text-center pt-5">Get in touch</h1>
                        <div class="mb-3 row">
                            <label for="name" class="form-label">Name</label>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="First name" ref={e => current['firstName'] = e}/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name" ref={e => current['lastName'] = e}/>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" ref={e => current['email'] = e} placeholder="name@example.com"/>
                        </div>

                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" ref={e => current['message'] = e} rows="5"></textarea>
                        </div>

                        <input type="button" onClick={sendMessage} value="submit" className="btn btn-secondary"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact