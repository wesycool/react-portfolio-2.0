import React from "react"
import Jumbotron from "../component/Jumbotron"
import './Home.css'

function Home(){
    const info = {
        title : 'main',
        p : 'To improve is to change;<br/>to be perfect is to change often',
        quotes: true,
        footer: '~ Winston Churchill ~'
    }

    return(
        <div>
            <Jumbotron info={info} />
        </div>
    )
}

export default Home