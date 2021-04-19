import React ,{Component}from 'react'
import axios from 'axios'
import './homepage.css'
import {Link} from 'react-router-dom'

export default class Homepage extends Component {
    _isMounted = false
    state = {currentUser:null}

    componentDidMount(){
        this._isMounted = true
        axios.get('http://localhost:8080/',{credentials: "same-origin" })
        //.then(res=>this.setState({currentUser:res.data}))
        .then(res=>console.log(res))
    }
    
    componentDidUpdate(){
        axios.get('http://localhost:8080/')
        //.then(res=>this.setState({currentUser:res.data.username}))
        .then(res=>console.log(res))
    }
    
    componentWillUnmount(){
        this._isMounted = false
    }
    //<Link to='/Profile'><button className='buttonAccount'>{this.state.currentUser}</button></Link>
    //{this.state.currentUser!==null&&this.state.currentUser!==undefined?console.log(this.state.currentUser):console.log('no user')}
    render(){
        return(
            <React.Fragment>
                <Link to="/Signup"><button className='button'>Sign Up</button></Link>
                <Link to="/Login"><button className='button'>Log In</button></Link><br/>
            </React.Fragment>
        )
    }
}
