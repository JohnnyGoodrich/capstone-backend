const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const cors = require('cors')
const morgan = require('morgan')

const foodController = require('./controllers/food-controller')
const mealController = require('./controllers/meal-controller')


/* SECTION DB CONNNECTION */
require("dotenv").config();
require('./config/db.connection');

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/food', foodController)
app.use('/meal', mealController)

app.get('/', (req, res)=>res.redirect('/food'))



app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));