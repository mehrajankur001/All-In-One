if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();

const expressEjsLayouts = require('express-ejs-layouts');


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressEjsLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ limit: '10mb', extended: false }));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection
db.on('error', (err) => console.error(err));
db.once('open', () => console.log("Mongoose Connected"));

const homeRoute = require('./routes/home');
app.use('/', homeRoute);

const productRoute = require('./routes/product');
app.use('/product', productRoute);

app.listen(9111, () => {
    console.log('Server 9111');
})