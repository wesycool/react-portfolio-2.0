import React, {useContext, useEffect} from "react"
import Jumbotron from "../component/Jumbotron"
import HeadContext from "../component/HeadContext"
import './Home.css'

function Home(){
    const [setHeadTitle,setHeadDescription,mainHeadDescription] = useContext(HeadContext)
    useEffect(()=> {
        setHeadTitle()
        setHeadDescription(mainHeadDescription)
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