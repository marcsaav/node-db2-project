const express = require('express')

const router = express.Router()

const Car = require('./cars-model')

router.get('/', async (req, res) => {
    try {
        const data = await Car.getAll()
        res
            .status(200)
            .json(data)
    }
    catch(err) {
        res
            .status(500)
            .json({ message: err.message})
    }
})

router.post('/', async (req, res) => {
    try {
        const newCar = await Car.createCar(req.body)
        res
            .status(500)
            .json(newCar)
    }
    catch(err) {
        res
            .status(500)
            .json({ message: err.message})
    }
})