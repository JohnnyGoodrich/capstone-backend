const express = require('express')
const router = express.Router()

//model import - automatically pointing to models/index
const { Food } = require('../models');
const { Meal } = require('../models');
const { MealItem } = require('../models');

//JSON body parser
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//GET All food route - http://localhost:4000/food
router.get('/', async (req, res) => {
    try {
        const allFood = await Meal.find({})
        res.status(200).json(allFood)
    } catch (err) {
        res.status(400).json({ error: err })
    }
});

//GET show route for reviews - display details - http://localhost:4000/reviews/
// router.get('/:id', async (req, res) => {
//     try {
//         const foundFood = await Meal.findById(req.params.id);
//         res.status(200).json(foundFood)
//     } catch (err) {
//         res.status(400).json({ error: err })
//     }
// })

router.get('/:id', async (req, res) => {
    try {
        const foundFood = await Meal.findById(req.params.id);
        const allFoods = await MealItem.find({ title: req.params.id });
        res.status(200).json({ title: foundFood, foods: allFoods })
    } catch (err) {
        res.status(400).json({ error: err })
    }
})

//create route
// router.post('/:id', async (req, res) => {
// router.post('/', async (req, res) => {
//     try {
//         const newMeal = await Meal.create(req.body)
//         res.status(200).json(newMeal)
//     } catch (err) {
//         res.status(400).json({ error: err })
//     }
// })
router.post('/', async (req, res) => {
    try {
        const newFood = await Meal.create(req.body)
        res.status(200).json(newFood)
    } catch (err) {
        res.status(400).json({ error: err })
    }
})
router.post('/:id', async (req, res) => {
    try {
        delete req.body._id

        req.body.title = req.params.id
        const newFood = await MealItem.create(req.body)
        res.status(200).json(newFood)
    } catch (err) {

        res.status(400).json({ error: err.message })
    }
})

//update review
router.put('/:id', async (req, res) => {
    try {
        const foodItem = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log(foodItem)
        res.status(200).json(foodItem)
    } catch (err) {
        res.status(400).json({ error: err })
    }
})

//delete route
// router.delete('/edit/:id', async (req, res) => {
//     try {
//         const deletedReview = await MovieReview.findByIdAndDelete(req.params.id);
//         const deletedReviews = await MovieReview.deleteMany({ title: req.params.id });
//         res.redirect(200, '/review')

//     } catch (err) {
//         res.status(400).json({ error: err })
//     }
// })

router.delete('/:id/mealitem', async (req, res) => {
    try {
        const deleteFoodItem = await Meal.findByIdAndDelete(req.params.id);
        // const deletedReviews = await MovieReview.deleteMany({ title: req.params.id });
        res.redirect(200, '/movie')

    } catch (err) {
        res.status(400).json({ error: err })
    }
})
module.exports = router