import axios from "axios";
import React, { Component } from "react";
import history from '../../history'


export default class Account extends Component{

    state={username:null,password:null}
    
    componentWillMount(){
        axios.get('http://localhost:8080/Profile/')
        .then(res=>this.setState({username:res.data.username,password:res.data.password}))
    }

    componentDidUpdate(){
        if(this.state.username===null){
            history.goBack()
        }
    }
    
    render(){

        return(
            <React.Fragment>
                profile
            </React.Fragment>
        )
    }
} 