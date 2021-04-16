const express = require('express')
const cors =  require('cors')
const bcrypt = require('bcrypt')
const passport = require('passport')

const app = express()

const initializePassport = require('./passport-config')
initializePassport(passport,username=>users.find(user=>user.username===username))

const users = []
let currentUser = {
    username:null,
    password:null
}

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res)=>{
    res.send(currentUser)
})

app.get('/Signin',(req,res)=>{
    res.send('Sign Up Page')
})

app.post('/Signin',async (req,res)=>{
    const hashedPassword = bcrypt.hash(req.body.password, 10)
    users.push({
        id: Date.now().toString(),
        username: req.body.username ,
        password: hashedPassword
    })
})

app.get('/Login',(req,res)=>{
    res.send(users)
})

app.post('/Login',(req,res)=>{

    currentUser.username = req.body.username
    currentUser.password = req.body.password
    res.send(currentUser)
})

app.get('/Profile',(req,res)=>{
    res.send(currentUser)
})

app.post('/Profile',(req,res)=>{
    if(req.body.changePassword==true){
        const findUser = users.find(user=>user.username===req.body.username)
        findUser.password = req.body.password
        currentUser.password = req.body.password
        res.send(findUser.password)
    }
    else{
        currentUser.username = null
        currentUser.password = null
        res.send(currentUser)
    }
})

app.listen(8080,()=>{console.log('Running On Port 8000...')})