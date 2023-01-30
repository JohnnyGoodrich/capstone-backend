const mongoose = require("mongoose")

const FoodSchema = new mongoose.Schema({
   
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
  
}, {timestamps: true})

const Food = mongoose.model("Food", FoodSchema)
module.exports = Food