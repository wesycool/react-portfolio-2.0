import React from "react"
import Jumbotron from "../component/Jumbotron"
import './Home.css'

function Home(){
    const info = {
        title : 'main',
        p : 'To improve is to change;<br/>to be perfect is to change often',
        footer: '~ Winston Churchill ~'
    }

    return(
        <Jumbotron page={info} />
    )
}

export default Home