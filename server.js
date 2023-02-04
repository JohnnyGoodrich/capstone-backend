const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const cors = require('cors')
const morgan = require('morgan')

const foodController = require('./controllers/food-controller')
const mealController = require('./controllers/meal-controller')
const mealItemController = require('./controllers/mealitem-controller')
const goalsController = require('./controllers/goals-controller')


/* SECTION DB CONNNECTION */
require("dotenv").config();
require('./config/db.connection');

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/food', foodController)
app.use('/meal', mealController)
app.use('/mealitems', mealItemController)
app.use('/goals', goalsController)

app.get('/', (req, res)=>res.redirect('/food'))



app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));