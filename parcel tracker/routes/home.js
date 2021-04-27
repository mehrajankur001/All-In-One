const express = require('express');
const Product = require('../model/product');
const fetch = require('node-fetch');
const router = express.Router();



let currentStatus = {
}

router.get('/', async (req, res) => {
    const searchOptions = {};

    if (req.query.unId !== null && req.query.unid !== '') {
        searchOptions.unId = req.query.unId;
    }
    try {
        const products = await Product.find(searchOptions);
        currentStatus.data = products;
        res.render('home', {
            products: products,
            searchOptions: req.query
        });
    } catch {
        res.redirect('/product')
    }

});

router.get('/currentStatus', async (req, res) => {
    try {
        res.json(currentStatus);
    } catch {
        res.redirect('/product')
    }
});



module.exports = router;