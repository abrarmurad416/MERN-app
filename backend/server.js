require('dotenv').config()

const express = require('express')
const workoutRoutes = require("./routes/workouts")
const mongoose = require('mongoose')
// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log("hello", req.path, req.method)
    next()
})

// routes
// app.get('/', (req, res) => {
//     res.json({msg: "Welcome to the app"})
// })
app.use('/api/workouts',workoutRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log("connected to DB and listening to", process.env.PORT)
    })
 })
 .catch((error) => {
    console.log(error)
 })
// listen for requests
// ctrl + c to cancel out of process
// install nodemon npm install -g nodemon
// install dotenv npm install dotenv
// install mongodb


