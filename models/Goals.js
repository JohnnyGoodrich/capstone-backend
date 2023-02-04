const mongoose = require("mongoose")

const GoalsSchema = new mongoose.Schema({
   
    calories: {
        type: Number,
        required: true,
   
    },
    protein: {
        type: Number,
        required: true,
    },
    carbohydrates: {
        type: Number,
        required: true,
    },
    fat: {
        type: Number,
        required: true,
    },

  
}, {timestamps: true})

const Goals = mongoose.model("Goals", GoalsSchema)
module.exports = Goals