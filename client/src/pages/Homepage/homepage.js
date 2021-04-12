import React ,{Component}from 'react'
import axios from 'axios'
import './homepage.css'
import {Link} from 'react-router-dom'

export default class Homepage extends Component {
    state = {currentUser:null}

    
    componentDidMount(){
        axios.get('http://localhost:8080/')
        .then(res=>this.setState({currentUser:res.data.username}))
    }

    render(){
        return(
            <React.Fragment>
                <h3>{this.state.data}</h3>
                <Link to="/Signin"><button className='button'>Sign In</button></Link>
                <Link to="/Login"><button className='button'>Log In</button></Link><br/>
                {this.state.currentUser!==null?<Link to='/Login'><button className='buttonAccount'>{this.state.currentUser}</button></Link>:false}
            </React.Fragment>
        )
    }
}
