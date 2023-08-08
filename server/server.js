const express = require('express')
require('dotenv').config()
const dbConnect = require('./config/dbconnect')
const initRoute = require('./routes')

const app = express()
const port = process.env.PORT || 8888
app.use(express.json())
app.use(express.urlencoded({extended : true}))
dbConnect()
initRoute(app)

app.use('/',(req,res)=>{res.send('SERVER ON')})

app.listen(port, ()=>{
    console.log('Server running')
})