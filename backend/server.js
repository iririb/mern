// call library to access .env file
require('dotenv').config()

// creating a express application
const express = require('express')
const mongoose = require('mongoose')
// get the router, in this case calling the workouts.js file
const workoutRoutes = require('./routes/workouts')

const app = express()

// middleware

// read json body req
app.use(express.json())

//we need to end with next function or else the next part of code won't trigger
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// get method
// app.get('/',(req, res)=>{
//     res.json({mssg : 'welcome to app'})
// })

// we will use method define in workoutRoutes
app.use('/api/workouts', workoutRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => {
        // listen for request
        // we call the port number from .env
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB & listening on port 4000!!!")
        })

    })
    .catch((error) => {
        console.log(error)
    })

