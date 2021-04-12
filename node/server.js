const express = require('express')
const cors =  require('cors')

const app = express()

const users = []
let currentUser = {
    username:null,
    password:null
}

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send(currentUser)
})

app.get('/Signin',(req,res)=>{
    res.send('Sign In Page')
})

app.post('/Signin',(req,res)=>{
    const checkUser = users.find(user=>user.username===req.body.username)
    if(checkUser){
        res.send('This Username Already Exist !')
    }
    else{
        const newUser = {username:req.body.username,password:req.body.password}
        currentUser = newUser
        users.push(newUser)
        res.send('ok')
        console.log(users);
    }
})

app.get('/Login',(req,res)=>{
    res.send('Log In Page')
})

app.get('/Profile',(req,res)=>{
    res.send(currentUser)
})

app.listen(8080,()=>{console.log('Running On Port 8000...')})