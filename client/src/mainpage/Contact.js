import React, {useRef,useContext, useEffect} from "react";
import emailjs from 'emailjs-com';
import HeadContext from "../component/HeadContext"
import './Contact.css'
require('dotenv').config()


function Contact(){
    const [setHeadTitle,setHeadDescription] = useContext(HeadContext)
    useEffect(()=> setHeadTitle('Contact Me'),[])
    
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const message = useRef()

    const sendMessage = () =>{

        const template_params = {
            "reply_to": email.current.value,
            "from_name": `${firstName.current.value} ${lastName.current.value}`,
            "to_name": "Edmund",
            "message_html": message.current.value
         }

         emailjs.send("default_service", "template_mp8gIrQa", template_params, "user_Lb7RlXKq0CTUC0zKpSJZc");

         firstName.current.value = ''
         lastName.current.value = ''
         email.current.value = ''
         message.current.value = ''
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
                                <input type="text" class="form-control" placeholder="First name" ref={firstName}/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name" ref={lastName}/>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" ref={email} placeholder="name@example.com"/>
                        </div>

                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" ref={message} rows="5"></textarea>
                        </div>

                        <input type="button" onClick={sendMessage} value="submit" className="btn btn-secondary"/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact