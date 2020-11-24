const Joi = require('@hapi/joi');

const categoryValidation = (req) => {
    const require = Joi.object({
        category_id:Joi.number().integer(),
        category_name: Joi.string(),
    });

    return require.validate(req);
};

const productValidation = (req) => {
    const require = Joi.object({
        product_id:Joi.number().integer(),
        category_id:Joi.number().integer(),
        product_name: Joi.string(),
        description: Joi.string(),
        price: Joi.number().integer(),

    });

    return require.validate(req);
};




module.exports.categoryValidation = categoryValidation;
module.exports.productValidation = productValidation;

