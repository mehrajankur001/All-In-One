const express = require('express');
const router = express.Router();

const Product = require('../model/product');

const { v4: uuidv4 } = require('uuid');

//index
router.get('/', async (req, res) => {
    const products = await Product.find();
    try {
        res.render('product/product', { products: products });
    } catch (error) {
        res.redirect('/')
    }
});

//new
router.get('/new', async (req, res) => {
    renderNewPage(res, new Product());
})

//post
router.post('/', async (req, res) => {
    const product = new Product({
        senderName: req.body.senderName,
        senderAddress: req.body.senderAddress,
        senderNumber: req.body.senderNumber,
        receiverName: req.body.receiverName,
        receiverAddress: req.body.receiverAddress,
        receiverNumber: req.body.receiverNumber,
        unId: uuidv4()
    });
    try {
        const newProduct = await product.save();
        res.redirect(`/product/${product.id}`);
    } catch (error) {
        renderNewPage(res, product, true);
    }
});
//show
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.render(`product/show`, { product: product });
    } catch (error) {
        res.redirect('/')
    }
});

//edit
router.get('/:id/edit', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.render(`product/edit`, { product: product });
    } catch (error) {
        res.redirect('/')
    }
});
//update
router.put('/:id', async (req, res) => {
    let product
    try {
        product = await Product.findById(req.params.id);
        product.currentStatus = req.body.currentStatus;
        await product.save();
        res.redirect(`/product/${product.id}`);
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
});

//status
router.get('/:id/status', async (req, res) => {
    const searchOpt = await Product.find();
    if (req.query.id != null && req.query.id != '') {
        searchOpt.id = req.query.id;
    }
    try {

    } catch (error) {

    }
});

//delete
router.delete('/:id', async (req, res) => {
    let product
    try {
        product = await Product.findByIdAndDelete(req.params.id);
        res.redirect(`/product`);
    } catch (error) {
        console.log(error)
        res.redirect(`/product/${product.id}`);
    }
});

const renderNewPage = async (res, product, hasError = false) => {
    try {
        const params = {
            product: product
        }
        if (hasError) {
            params.errorMessage = 'Error creating product'
        };
        console.log(params);
        res.render('product/new', params);
    } catch {
        res.redirect('/');
    }

}

module.exports = router;