const express = require('express');
const { getProducts, getSingelProduct } = require('../controllers/productController');
const router = express.Router();


router.route('/product').get(getProducts);
router.route('/product/:id').get(getSingelProduct);

module.exports = router;

