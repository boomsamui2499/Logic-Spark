const Product = require('../models/product.model');
const { productValidation, categoryValidation } = require('../validate/validate');



//select Product
exports.select = async (req, res) => {
    Product.select(req.query, (err, data) => {
        if (err) res.status(500).send({ message: err.message || 'can\'t get Product select all' }); else res.send(data);
    });

};

exports.addCategory = async (req, res) => {

    if (!req.body) return res.status(400).send({ message: 'content can not be empty!' });
            const { error } = categoryValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });



    const add = new Product({
        category_name: req.body.category_name
    });

    Product.addCategory(add, (err, data) => {
        if (err) res.status(500).send({ message: err.message || 'can\'t add Category' }); else res.send(data);
    });


};

exports.addProduct = async (req, res) => {
    if (!req.body) return res.status(400).send({ message: 'content can not be empty!' });
            const { error } = productValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });


    const add = new Product({
        
        product_name: req.body.product_name,
        category_id: req.body.category_id,
        description: req.body.description,
        price: req.body.price
    });

    Product.addProduct(add, (err, data) => {
        if (err) res.status(500).send({ message: err.message || 'can\'t add Product' }); else res.send(data);
    });


};



// //update Product
exports.updateCategory = async (req, res) => {

    if (!req.body) return res.status(400).send({ message: 'content can not be empty!' });
            const { error } = categoryValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });


    const update = new Product({
        category_id: req.body.category_id,
        category_name: req.body.category_name



    });

    Product.updateCategory(update, (err, data) => {
        if (err) res.status(500).send({ message: err.message || 'can\'t update Category' }); else res.send(data);
    });



};
exports.updateProduct = async (req, res) => {

    if (!req.body) return res.status(400).send({ message: 'content can not be empty!' });
            const { error } = productValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });


    const update = new Product({
        product_name: req.body.product_name,
        product_id: req.body.product_id,
        description: req.body.description,
        category_id: req.body.category_id,
        price: req.body.price


    });

    Product.updateProduct(update, (err, data) => {
        if (err) res.status(500).send({ message: err.message || 'can\'t update Product' }); else res.send(data);
    });



};



//deleteCategory Product
exports.deleteCategory = async (req, res) => {

    if (!req.body) return res.status(400).send({ message: 'content can not be empty!' });


    const del = new Product({
        category_id: req.body.category_id


    });

    Product.deleteCategory(del, (err, data) => {
        if (err) res.status(500).send({ message: err.message || 'can\'t delete Category ' }); else res.send(data);
    });



};
exports.deleteProduct = async (req, res) => {

    if (!req.body) return res.status(400).send({ message: 'content can not be empty!' });


    const del  = new Product({
        product_id: req.body.product_id
    });

    Product.deleteProduct(del , (err, data) => {
        if (err) res.status(500).send({ message: err.message || 'can\'t delete Product ' }); else res.send(data);
    });



};




