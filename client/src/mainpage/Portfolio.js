import React from "react"
import {Link} from "react-router-dom"
import Card from "../component/Card"

function Portfolio(){
    const item = [
        {title:'Casino App', description:'A mobile game application that simulates poker slot machines at a real casino.', link:'', img:''},
        {title:'Bookify', description:'A web application that helps connect consumers with businesses through minimal contact and precise bookings.', link:'', img:''}, 
        {title:'Dice Pizzeria', description:'A full service restaurant management and online ordering system.', link:'', img:''}, 
        {title:'nutShell', description:'A mobile first web application that aims to consolidate the digital organizational tools we employ on a daily basis into one space.', link:'', img:''},
        {title:'Google Books', description:'React app that allows to search books and save it using Google Books API.', link:'', img:''},
        {title:'Employee Directory', description:'Employee directory web application, where the user can search by first name, last name, city, province and/or any combination.', link:'', img:''},
        {title:'Budget Tracker', description:'A budget app that allows inputting and tracking all transactions in either online or offline mode.', link:'', img:''},
        {title:'Eat-Da-Burger', description:'A web application that allows you to add burgers of your choices and devour it.', link:'', img:''},
        {title:'Employee Summary', description:'A command line application that generates information about the software engineering team onto a website.', link:'', img:''},
        {title:'Weather Dashboard', description:'A web application that gets current weather and a 5-day forecast from anywhere in the world.', link:'', img:''},
        {title:'Rock Paper Scissors', description:'A Rock-Paper-Scissors web applicaiton game.', link:'', img:''},
    ]
    return(
        <div className='container'>
            <div className='shadow-sm' style={{background:'url(./assets/img/portfolioBG.jpg) center', height:'150px', backgroundSize:'cover'}}>
                <h2 className="doris text-uppercase text-center" style={{paddingTop:'50px'}}>Portfolio</h2>
            </div>
            <div className='row mt-3'>
                <u className='nav text-uppercase' style={{fontSize:'small'}}>
                    <Link to='' className='nav-link text-dark'>All</Link>
                    <Link to='' className='nav-link link-secondary'>Web Dev</Link>
                    <Link to='' className='nav-link link-secondary'>Mobile App</Link>
                </u>
            </div>
            <div className='row'>
                {item.map((item) => <Card item={item}/>)}
            </div>
        </div>

    )
}

export default Portfolio