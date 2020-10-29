import React, {useState, useContext, useEffect} from "react"
import {useLocation} from "react-router-dom"
import Card from "../component/Card"
import HeadContext from "../component/HeadContext"
import PortfolioContext from "../component/PortfolioContext"

function Portfolio(){
    const setHeadTitle = useContext(HeadContext)
    const location = useLocation().pathname.split('/')
    useEffect(()=> setHeadTitle(location[location.length -1]),[])

    const context = useContext(PortfolioContext)
    const category = new Set(context.map(({category}) => category).sort())
    const filterBtn = ['all', ...category]
    const [itemList , setItemList] = useState([])
    const [activeFilter, setActiveFilter] = useState('all')

    useEffect(()=> window.scrollTo(0, 0),[])
    useEffect(() => setItemList(context),[context])
    
    const filterItem = ({target:{value}}) => {
        const filtered = context.filter( ({category}) => ['all',category].includes(value) )
        setItemList(filtered)
        setActiveFilter(value)
    }

    return(
        <div className='container mb-5'>
            <div className='shadow-sm' style={{background:'url(./assets/img/portfolioBG.jpg)', height:'150px', backgroundSize:'cover'}}>
                <h1 className="dosis text-uppercase text-center pt-5">Portfolio</h1>
            </div>
            <div className='row mt-4 ml-2'>
                <u className='nav'>
                    {filterBtn.map( (value,key) => 
                        <button onClick={filterItem} value={value} className={`btn btn-sm ${value === activeFilter? 'text-dark' : 'link-secondary' } text-uppercase`} key={key}>{value}</button>
                    )}
                </u>
            </div>
            <div className='row'>
                {itemList.map((item,key) => <Card item={item} key={key}/>)}
            </div>
        </div>
    )
}

export default Portfolio