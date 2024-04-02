const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const port = 3001

const app = express()
app.use(express.json)
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Users")

app.post('/Signup', (req, res)=>{
    console.log(req.body);  
})

app.listen(port, () => {
    console.log("Server is running on port",port)
})