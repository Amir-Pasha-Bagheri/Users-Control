import React ,{Component}from 'react'
import axios from 'axios'
import './homepage.css'
import {Link} from 'react-router-dom'

export default class Homepage extends Component {
    _isMounted = false
    state = {currentUser:''}

    componentWillMount(){
        this._isMounted = true
        axios.get('http://localhost:8080/', {withCredentials: true})
        .then(res=>this.setState({currentUser:res.data}))
        //.then(res=>console.log(res.data))
    }
    
    componentWillUnmount(){
        this._isMounted = false
    }
    
    render(){
        return(
            <React.Fragment>
                <Link to="/Signup"><button className='button'>Sign Up</button></Link>
                <Link to="/Login"><button className='button'>Log In</button></Link><br/>
                {this.state.currentUser!==''?<Link to='/Profile'><button className='buttonAccount'>{this.state.currentUser}</button></Link>:false}
            </React.Fragment>
        )
    }
}
