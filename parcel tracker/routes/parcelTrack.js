const express = require('express');
const router = express.Router();

const Product = require('../model/product');

router.get('/', async (req, res) => {
    const products = await Product.find();
    try {
        res.render('product/product', { products: products });
    } catch (error) {
        res.redirect('/')
    }
});


module.exports = router;