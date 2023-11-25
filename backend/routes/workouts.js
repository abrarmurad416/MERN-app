const express = require("express")

const router = express.Router()

// get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET ALL WORKOUTS'})
})

// get a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET SINGLE WORKOUT'})
})

// post new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST A WORKOUT'})
})

// delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE A WORKOUT'})
})

// update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE A WORKOUT'})
})


// this is the router
module.exports = router