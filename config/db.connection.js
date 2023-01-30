// DEPENDENCIES

// pull PORT from .env || 4000
const mongoose = require('mongoose');
const { MONGODB_URI } = process.env
require('dotenv').config

// DATABASE CONNECTION
mongoose.set('strictQuery', true);
mongoose.connect(MONGODB_URI)

// Connection Events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));