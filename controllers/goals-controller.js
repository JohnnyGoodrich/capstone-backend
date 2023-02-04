const express = require('express')
const router = express.Router()

//model import - automatically pointing to models/index
const { Goals } = require('../models');

//JSON body parser
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.get('/', async (req, res) => {
    try {
        const allGoals = await Goals.find({})
        res.status(200).json(allGoals)
    } catch (err) {
        res.status(400).json({ error: err })
    }
});

router.put('/', async (req, res) => {
    try {
        const goalItem = await Goals.findOneAndUpdate( {_id: "63de8b2d4524880f30cd53cd"}, req.body)
        console.log(goalItem)
        res.status(200).json(goalItem)
    } catch (err) {
        res.status(400).json({ error: err })
    }
})

router.post('/', async (req, res) => {
    try {
        const newGoal = await Goals.create(req.body)
        res.status(200).json(newGoal)
    } catch (err) {
        res.status(400).json({ error: err })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteGoalItem = await Goals.findByIdAndDeflete(req.params.id);
        // const deletedReviews = await MovieReview.deleteMany({ title: req.params.id });
        res.redirect(200, '/')

    } catch (err) {
        res.status(400).json({ error: err })
    }
})

module.exports = router