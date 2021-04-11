import React ,{Component}from 'react'
import axios from 'axios'

export default class Homepage extends Component {
    state = {data:''}

    componentDidMount(){
        axios.get('http://localhost:8080/')
        .then(res=>this.setState({data:res.data}))
    }

    render(){
        return(
            <React.Fragment>
                {this.state.data}
            </React.Fragment>
        )
    }
}
