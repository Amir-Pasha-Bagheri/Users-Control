const express = require('express')
const cors =  require('cors')

const app = express()
app.use(cors())

app.get('/',(req,res)=>{
    res.send('home')
})

app.listen(8080,()=>{console.log('Running On Port 8000...')})