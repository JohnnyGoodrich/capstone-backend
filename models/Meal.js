const mongoose = require("mongoose")

const MealSchema = new mongoose.Schema({
   
    title: {
        type: String,
        required: true,
        minlegnth: 1,
        maxlength: 50
    },
    // meal: {
    //     type: Number,
    //     required: false,
    // },
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    //   }

  
}, {timestamps: true})

const Meal = mongoose.model("Meal", MealSchema)
module.exports = Meal