import axios from "axios"
import React, { Component } from "react"

export default class Login extends Component{
    _isMounted = false
    state={data:''}

    componentDidMount(){
        this._isMounted = true
        axios.get('http://localhost:8080/Login')
        .then(res=>this.setState({data:res.data}))
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    render(){
        return(
            <React.Fragment>
                {this.state.data}
            </React.Fragment>
        )
    }
}