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
        users.push(newUser)
        res.send('ok')
        currentUser.username = req.body.username
        currentUser.password = req.body.password
    }
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