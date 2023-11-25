const express = require("express")

const Workout = require('../models/workoutModels')

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
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
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