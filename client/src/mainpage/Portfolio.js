import React, {useState, useContext, useEffect} from "react"
import {HeadContext, PortfolioContext} from '../component/Context'
import Card from "../component/Card"

function Portfolio(){
    const [setHeadTitle,setHeadDescription,mainHeadDescription] = useContext(HeadContext)
    const context = useContext(PortfolioContext)
    const category = new Set(context.map(({category}) => category).sort())
    const filterBtn = ['all', ...category]
    const [itemList , setItemList] = useState([])
    const [activeFilter, setActiveFilter] = useState('all')

    useEffect(() => window.scrollTo(0, 0),[])
    useEffect(() => setItemList(context),[context])
    useEffect(() => setHeadTitle('My Portfolio'),[])
    useEffect(() => setHeadDescription(mainHeadDescription),[])

    const filterItem = ({target:{value}}) => {
        const filtered = context.filter(({category}) => ['all',category].includes(value))
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
                    {filterBtn.map((value,key) => 
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