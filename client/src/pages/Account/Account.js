import axios from "axios";
import React, { Component } from "react";
import history from '../../history'
import './Account.css'


export default class Account extends Component{

    state={username:null,password:null}
    
    componentDidMount(){
        axios.get('http://localhost:8080/Profile/')
        .then(res=>this.setState({username:res.data.username,password:res.data.password}))
    }

    componentDidUpdate(){
        if(this.state.username===null){
            history.goBack()
        }
    }
    
    render(){

        //Change Password Container Appear
        const ChangePass = () => document.getElementById("ChanePassContainer").style.display==="block"? document.getElementById("ChanePassContainer").style.display="none":document.getElementById("ChanePassContainer").style.display = "block"

        const enterPassword1 = (event) =>{
            let password = document.getElementById('password1').value
            const allowed = /[A-Za-z0-9_]/g
            let sub = password.substring(0, password.length - 1)
            if(!allowed.test(event.key)){
                document.getElementById('password1').value = sub
            }
            // Declaring the Message
            const lower = document.getElementById('lowercase')
            const upper = document.getElementById('uppercase')
            const number = document.getElementById('number')
            const chars = document.getElementById('chars')
            const length = document.getElementById('password1').value.length
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

        const enterPassword2 = (event) =>{
            let password = document.getElementById('password2').value
            const allowed = /[A-Za-z0-9_]/g
            let sub = password.substring(0, password.length - 1)
            if(!allowed.test(event.key)){
                document.getElementById('password2').value = sub
            }
        }
        //Password Show
        function checkbox1(){
            const x = document.getElementById('password1')
            if(x.type === 'password') {
                x.type = 'text'
                x.setAttribute('autoComplete','off')
            }
            else {
                x.type = 'password'
            }
        }
        function checkbox2(){
            const y = document.getElementById('password2')
            if(y.type === 'password') {
                y.type = 'text'
                y.setAttribute('autoComplete','off')
            }
            else {
                y.type = 'password'
            }
        }

        const checkNewPass = (e) =>{
            e.preventDefault()
            const pass1 = document.getElementById('password1').value
            const pass2 = document.getElementById('password2').value
            const messageDanger = document.getElementById('DangerMessage')
            const messageSuccess = document.getElementById('SuccessMessage')
            if(pass1!==pass2){
                messageSuccess.style.display = 'none'
                messageDanger.style.display = 'block'
                messageDanger.innerHTML = 'Your Entered Passwords Are Not Same !'
            }
            else{
                if(pass1===this.state.password){
                    messageSuccess.style.display = 'none'
                    messageDanger.style.display = 'block'
                    messageDanger.innerHTML = 'Your New Password Cannot Be Your Old Password !'
                }
                else{
                    messageSuccess.style.display = 'block'
                    messageDanger.style.display = 'none'
        
                    axios.post('http://localhost:8080/Profile/',{changePassword:true,password:pass1})
                    .then((res)=>this.setState({password:res.data}))
                }
                    
            }
        }

        //Log Out Dispatch
        const LogOut = () =>{
            axios.post('http://localhost:8080/Profile/',{changePassword:false})
                .then((res)=>this.setState({username:res.data.username,password:res.data.password}))
        }

        return(
            <React.Fragment>
                <h3 className="SuccessMessage" id="SuccessMessage" style={{display:"none"}}>Password Updated !!!</h3>

                <h3 className="DangerMessage bg-danger" id="DangerMessage" style={{display:"none"}}>Error!</h3>

                <div className="Container">
                    <hr/>

                    <p>Username : <span className="UsePass">{this.state.username}</span><br/></p>
                    <p>password : <span className="UsePass" id="CurrentPassContainer">{this.state.password}</span></p><br/>
                    <button className="ChangePass" onClick={ChangePass}>Change Password</button><br/><br/>
                    
                    <form className="ChanePassContainer" id="ChanePassContainer" method='POST' onSubmit={checkNewPass}>
                        <div className="input-group mb-3">
                            <input type="password" id="password1" onKeyUp={enterPassword1} className="form-control" pattern="(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{6,}" name="password" placeholder="At least one Lowercase, Uppercase and number And 6 Characters" title="Your Password Must Contain at least 6 Characters one Lowercase, one Uppercase and Number." required/>
                            <div className="input-group-append input-group-text">
                                👁 <input type="checkbox" id="checkbox1" onClick={checkbox1}/>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" id="password2" onKeyUp={enterPassword2} className="form-control" pattern="(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{6,}" name="password" placeholder="Repeat Your Password" title="Your Password Must Contain at least 6 Characters one Lowercase, one Uppercase and Number." required/>
                            <div className="input-group-append input-group-text">
                                👁 <input type="checkbox" id="checkbox2" onClick={checkbox2}/>
                            </div>
                        </div>
        
                        <div id='validStatus' className="validStatus" style={{display:'none'}}>
                            <p id="lowercase" className="invalid">At least One Lowercase.</p>
                            <p id="uppercase" className="invalid">At least One Uppercase.</p>
                            <p id="number" className="invalid">At least One Number.</p>
                            <p id="chars" className="invalid">At least 6 Characters Or More.</p><br/>
                        </div>

                        <button className="ChangePass" type="submit">Done</button><br/><br/>
                    </form>

                    <button className="LogOut" onClick={LogOut}>Log Out</button><br/><br/>
                </div>
                <br/><br/>
            </React.Fragment>
        )
    }
} 