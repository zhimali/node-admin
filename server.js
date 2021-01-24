const express = require('express')
const app = express()

app.get('/',(res,req)=>{
    res.send('get success')
})


const port = process.env.port || 5000
app.listen(port,()=>{
    console.log('success')
})