require('dotenv').config()

const express = require('express')


// express app
const app = express()

app.use((req, res, next) => {
    console.log("hello", req.path, req.method)
    next()
})

// routes
app.get('/', (req, res) => {
    res.json({msg: "Welcome to the app"})
})

// listen for requests
// ctrl + c to cancel out of process
// install nodemon npm install -g nodemon
// install dotenv npm install dotenv
app.listen(process.env.PORT, () => {
    console.log("listening to", process.env.PORT)
})

