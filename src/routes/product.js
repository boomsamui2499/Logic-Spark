
const route = require('express').Router();
const product = require('../controller/product.controller');

route.get('/select', product.select);
route.post('/addCategory', product.addCategory);
route.post('/addProduct', product.addProduct);
route.post('/updateCategory', product.updateCategory);
route.post('/updateProduct', product.updateProduct);
route.post('/deleteCategory', product.deleteCategory);
route.post('/deleteProduct', product.deleteProduct);

module.exports = route;
