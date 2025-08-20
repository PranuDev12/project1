const Product = require ('../models/productModel');

const createProduct = async (productData) => {
    return await Product.create(productData)
}

const getAllProducts = async (filter, sort, skip, limit) => {
    return await Product.find(filter).sort().skip(skip).limit(limit).lean();;
}

const getProductById = async (id) => {
    return await Product.findById(id);
};

const updateProduct = async (id, updateData) => {
    return await Product.findByIdAndUpdate(id, updateData, {new: true})
}

const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};

const countProducts = async (filter) => {
    return await Product.countDocuments(filter);
};
module.exports = {
    createProduct,  
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    countProducts
}