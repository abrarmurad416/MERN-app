require('dotenv').config()

const express = require('express')
const workoutRoutes = require("./routes/workouts")

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

// listen for requests
// ctrl + c to cancel out of process
// install nodemon npm install -g nodemon
// install dotenv npm install dotenv
app.listen(process.env.PORT, () => {
    console.log("listening to", process.env.PORT)
})

