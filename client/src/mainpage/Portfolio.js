import React, {useState, useContext, useEffect} from "react"
import Card from "../component/Card"
import PortfolioContext from "../component/PortfolioContext"

function Portfolio(){
    const [itemList , setItemList] = useState([])
    const [filterBtn, setFilterBtn] = useState([])
    const [activeFilter, setActiveFilter] = useState('all')
    const context = useContext(PortfolioContext)


    useEffect(() => {
        const newFilterBtn = new Set(context.map(({category}) => category))
        setFilterBtn(['all',...newFilterBtn])
        setItemList(context)
    },[])

    const filterItem = ({target:{value}}) => {
        const filtered = context.filter( ({category}) => {return value === 'all' || value === category })
        setItemList(filtered)
        setActiveFilter(value)
    }

    return(
        <div className='container mb-5'>
            <div className='shadow-sm' style={{background:'url(./assets/img/portfolioBG.jpg) center', height:'150px', backgroundSize:'cover'}}>
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