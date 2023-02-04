const express = require('express')
const router = express.Router()

//model import - automatically pointing to models/index
const { Food } = require('../models');
const { Meal } = require('../models');
const { MealItem } = require('../models');
const { Goals } = require('../models');

//JSON body parser
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//GET All food route - http://localhost:4000/food
router.get('/', async (req, res) => {
    try {
        const allFood = await MealItem.find({})
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

module.exports = router