const mongoose = require("mongoose")
const Meal = require("./Meal")

const MealItemSchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: false,
        minlegnth: 1,
        maxlength: 50
    },
    calories: {
        type: Number,
        required: false,
    },
    protein: {
        type: Number,
        required: false,
    },
    carbohydrates: {
        type: Number,
        required: false,
    },
    fat: {
        type: Number,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    title: {
        type: mongoose.Types.ObjectId,
        ref: "Meal",
    },
    ingredients:{
        type: Array,

    },
    // Auth
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
}, {timestamps: true})

const MealItem = mongoose.model("MealItem", MealItemSchema)
module.exports = MealItem