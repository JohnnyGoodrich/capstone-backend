const mongoose = require("mongoose")

const MealSchema = new mongoose.Schema({
   
    title: {
        type: String,
        required: false,
        minlegnth: 1,
        maxlength: 50
    },
    // meal: {
    //     type: Number,
    //     required: false,
    // },

  
}, {timestamps: true})

const Meal = mongoose.model("Meal", MealSchema)
module.exports = Meal