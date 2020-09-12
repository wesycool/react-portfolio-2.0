import React, {useState, useEffect} from "react"
import Card from "../component/Card"
const item = [
    {title:'Casino App', category: 'mobile app', description:'A mobile game application that simulates poker slot machines at a real casino.', link:'', img:''},
    {title:'Bookify', category: 'web dev', description:'A web application that helps connect consumers with businesses through minimal contact and precise bookings.', link:'', img:''}, 
    {title:'Dice Pizzeria', category: 'web dev', description:'A full service restaurant management and online ordering system.', link:'', img:''}, 
    {title:'nutShell', category: 'web dev', description:'A mobile first web application that aims to consolidate the digital organizational tools we employ on a daily basis into one space.', link:'', img:''},
    {title:'Google Books', category: 'web dev', description:'React app that allows to search books and save it using Google Books API.', link:'', img:''},
    {title:'Employee Directory', category: 'web dev', description:'Employee directory web application, where the user can search by first name, last name, city, province and/or any combination.', link:'', img:''},
    {title:'Budget Tracker', category: 'web dev', description:'A budget app that allows inputting and tracking all transactions in either online or offline mode.', link:'', img:''},
    {title:'Eat-Da-Burger', category: 'web dev', description:'A web application that allows you to add burgers of your choices and devour it.', link:'', img:''},
    {title:'Employee Summary', category: 'web dev', description:'A command line application that generates information about the software engineering team onto a website.', link:'', img:''},
    {title:'Weather Dashboard', category: 'web dev', description:'A web application that gets current weather and a 5-day forecast from anywhere in the world.', link:'', img:''},
    {title:'Rock Paper Scissors', category: 'web dev', description:'A Rock-Paper-Scissors web applicaiton game.', link:'', img:''},
]

function Portfolio(){
    const [itemList , setItemList] = useState([])
    const [filterBtn, setFilterBtn] = useState([])
    const [activeFilter, setActiveFilter] = useState('all')

    useEffect(() => {
        const newFilterBtn = new Set(item.map(({category}) => category))
        setFilterBtn(['all',...newFilterBtn])
        setItemList(item)
    },[])


    const filterItem = ({target:{value}}) => {
        const filtered = item.filter( ({category}) => {return value === 'all' || value === category })
        setItemList(filtered)
        setActiveFilter(value)
    }

    return(
        <div className='container'>
            <div className='shadow-sm' style={{background:'url(./assets/img/portfolioBG.jpg) center', height:'150px', backgroundSize:'cover'}}>
                <h2 className="doris text-uppercase text-center pt-5">Portfolio</h2>
            </div>
            <div className='row mt-4 ml-2'>
                <u className='nav'>
                    {filterBtn.map( (value) => 
                        <button onClick={filterItem} value={value} className={`btn btn-sm ${value === activeFilter? 'text-dark' : 'link-secondary' } text-uppercase`}>{value}</button>
                    )}
                </u>
            </div>
            <div className='row'>
                {itemList.map((item) => <Card item={item}/>)}
            </div>
        </div>

    )
}

export default Portfolio