import axios from "axios"
import React, { Component } from "react"
import history from '../../history'

export default class Login extends Component{
    _isMounted = false
    state={
        mesage:null
    }

    componentDidMount(){
        this._isMounted = true
    }

    componentDidUpdate(){
        const msg = document.getElementById('DangerMessage')
        if(msg.innerHTML==='Error!') msg.style.display = 'none'
        else msg.style.display = 'block'

        if(this.state.mesage!=='No User With Given Username'&&this.state.mesage!=='Password Incorrect') history.push('/')
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    render(){

        const enterUserName = (event)=>{
            let userName = document.getElementById('username').value
            const allowed = /[A-Za-z0-9_]/g
            let sub = userName.substring(0,userName.length-1)
            if(!allowed.test(event.key))
            document.getElementById('username').value = sub
        }
    
        const enterPassword = (event) =>{
            let password = document.getElementById('password').value
            const allowed = /[A-Za-z0-9_]/g
            let sub = password.substring(0, password.length - 1)
            if(!allowed.test(event.key)){
                document.getElementById('password').value = sub
            }
    
            // Declaring the Message
            const lower = document.getElementById('lowercase')
            const upper = document.getElementById('uppercase')
            const number = document.getElementById('number')
            const chars = document.getElementById('chars')
            const length = document.getElementById('password').value.length
            //lowercase checked
            if(password.match(/[a-z]/)){
                lower.classList.remove('invalid')
                lower.classList.add('valid')
            }
            else{
                lower.classList.remove('valid')
                lower.classList.add('invalid')
            }
            //upper case checked
            if(password.match(/[A-Z]/)){
                upper.classList.remove('invalid')
                upper.classList.add('valid')
            }
            else{
                upper.classList.remove('valid')
                upper.classList.add('invalid')
            }
            //number checked
            if(password.match(/[0-9]/)){
                number.classList.remove('invalid')
                number.classList.add('valid')
            }
            else{
                number.classList.remove('valid')
                number.classList.add('invalid')
            }
            //password length checked
            if(length >= 6){
                chars.classList.remove('invalid')
                chars.classList.add('valid')
            }
            else{
                chars.classList.remove('valid')
                chars.classList.add('invalid')
            }
        }
        //show password
        function checkbox(){
            const x = document.getElementById('password')
            if(x.type === 'password') {
                x.type = 'text'
                x.setAttribute('autoComplete','off')
            }
            else {
                x.type = 'password'
            }
        }

        const submit = (e) =>{
            e.preventDefault()
            axios.post('http://localhost:8080/Login',{
                username:document.getElementById('username').value,
                password:document.getElementById('password').value
            },{
                withCredentials: true
            })
            .then(res=>this.setState({mesage:res.data}))
        }

        return(
            <React.Fragment>

                <h2 style={{textAlign:"center",marginTop:"30px"}}>Log In Page</h2>

                <h3 className="DangerMessage bg-danger" id="DangerMessage" style={{display:"none"}}>{this.state.mesage}</h3>

                <form className="SignInForm" method='POST' onSubmit={submit}>
                    <hr/>

                    <label htmlFor="username">Username :</label>
                    <input type="text" id="username" onKeyUp={enterUserName} className="form-control" pattern=".{8,}" name="username" title="Your Username Must Contain 8 Characters." placeholder="Your Userame Must Contain 6 Characters" required/>
                    
                    <label htmlFor="password">Password :</label>
                        <div className="input-group mb-3">
                            <input type="password" id="password" onKeyUp={enterPassword} className="form-control" pattern="(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{6,}" name="password" placeholder="At least one Lowercase, Uppercase and number" title="Your Password Must Contain at least 6 Characters one Lowercase, one Uppercase and Number." required/>
                            <div className="input-group-append input-group-text">
                                ???? <input type="checkbox" id="checkbox" onClick={checkbox}/>
                            </div>
                        </div>

                    <div id='validStatus' className="validStatus">
                        <p id="lowercase" className="invalid">At least One Lowercase.</p>
                        <p id="uppercase" className="invalid">At least One Uppercase.</p>
                        <p id="number" className="invalid">At least One Number.</p>
                        <p id="chars" className="invalid">At least 6 Characters Or More.</p><br/>
                    </div>
                    <button className="SubmitAccount bg-success" type='submit'>Submit</button>

                </form>
            </React.Fragment>
        )
    }
}