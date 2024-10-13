require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const dataRoutes = require('./routes/dataRoutes')
const app = express()

app.use(express.json())
app.use((request, response, next) =>{
    console.log(request.path, request.method)
    next()
})

//init the app
mongoose.connect(process.env.DB_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('Connected to the database...')
            console.log('Listening to port ', process.env.PORT)
        })
    })
    .catch(err =>{
        console.log(err)
    })


const requestMapper = '/api/v1'

app.use(requestMapper+'/data', dataRoutes)

app.use((request, response) =>{
    response.status(404).json({error: "No such method exist"});
});
