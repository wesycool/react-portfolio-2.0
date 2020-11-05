import React, {useContext, useEffect} from "react"
import Jumbotron from "../component/Jumbotron"
import HeadContext from "../component/HeadContext"
import './Home.css'

function Home(){
    const [setHeadTitle,setHeadDescription] = useContext(HeadContext)
    useEffect(()=> {
        setHeadTitle()
        setHeadDescription("Hi, I'm Edmund! I'm a Business Analyst and Process Consultant from Toronto.\nI enjoy understanding the thought process of how things works. I also love learning game-changing technology trends and I'm currently into mobile/web development and data science.")
    },[])

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