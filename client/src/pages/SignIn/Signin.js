import axios from "axios"
import React, { Component } from "react"

export default class Signin extends Component{
    _isMounted = false
    state={data:''}

    componentDidMount(){
        this._isMounted = true
        axios.get('http://localhost:8080/Signin')
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