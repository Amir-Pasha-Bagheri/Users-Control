const express = require('express')
const cors =  require('cors')

const app = express()
app.use(cors())

app.get('/',(req,res)=>{
    res.send('home')
})

app.get('/Signin',(req,res)=>{
    res.send('Sign In Page')
})

app.get('/Login',(req,res)=>{
    res.send('Log In Page')
})

app.listen(8080,()=>{console.log('Running On Port 8000...')})