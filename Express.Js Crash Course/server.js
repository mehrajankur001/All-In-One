const express = require('express');
const path = require('path');
const bP = require('body-parser');

const logger = require('./middleware/logger');

const app = express();

const PORT = process.env.PORT || 5000;

//create a static folder
app.use(express.static('public'));

//create route for my members api
app.use('/api/members', require('./router/api/members'));

//init logger
app.use(logger);


app.listen(PORT, () => {
    console.log(`App is running of port ${PORT}`)
})