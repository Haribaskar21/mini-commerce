const productModel = require('../models/productmodel');

// Get products API -/api/v1/products
exports.getProducts = async (req, res, next) => {
    const products = await productModel.find({});

    res.json({
        success: true,
        products
    })
}

// Get Single products API -/api/v1/products/:id
exports.getSingleProducts = async (req, res, next) => {
    const product = await productModel.findById(req.params.id);
    res.json({
        success: true,
        product
    })
}
