import React, {useContext, useEffect} from "react"
import {useLocation} from "react-router-dom"
import Jumbotron from "../component/Jumbotron"
import HeadContext from "../component/HeadContext"
import './Home.css'

function Home(){
    const setHeadTitle = useContext(HeadContext)
    const location = useLocation().pathname.split('/')
    useEffect(()=> setHeadTitle(location[location.length -1]),[])

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