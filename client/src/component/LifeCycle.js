import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class LifeCycle extends Component{

    componentWillMount(){
        document.title = `Edmund Wong`
        console.log('Will Mount')
        console.log(document.title)
    }

    componentDidMount(){
        console.log('Did Mount')
    }

    render(){
        return (
            <div></div>
        )
    }
}

export default LifeCycle