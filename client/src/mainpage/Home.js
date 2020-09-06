import React, {useState, useEffect} from "react"
import './Home.css'

function Home(){
    const [ mainBG, setMainBG ] = useState()

    useEffect(() => {
        const handleResize = () => {
            const orientation = window.screen.orientation.type.split('-')
            setMainBG(`./assets/img/mainBG-${orientation[0]}.jpg`)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
    },[])

    return(
        <div className="main-bg" style={{backgroundImage:`url(${mainBG})`}}>
            <blockquote>
                <p>To improve is to change;<br/>to be perfect is to change often</p>
                <footer>~ Winston Churchill ~</footer>
            </blockquote>
        </div>
    )
}

export default Home