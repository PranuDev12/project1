const productRepository = require('../repositories/productRepository');

async function createProduct(productData) {
    return await productRepository.createProduct(productData);
}

async function getAllProducts(page = 1, limit = 10, sortBy = "createdAt", order = "desc", search = "", price=1, status = '', review = '') {
    const pageInt = parseInt(page, 10) || 1;
    const limitInt = parseInt(limit, 10) || 10;
    const skip = (pageInt - 1) * limitInt;
    const sortOrder = order === "asc" ? 1 : -1;
    const sort = { [sortBy]: sortOrder };

    const filter = {};
    if (search) {
        filter.name = { $regex: search, $options: "i" };
    }

    if (price) {
        // if (typeof price === "object") {
        //     filter.price = {};
        //     if (price.min !== undefined) filter.price.$gte = price.min;
        //     if (price.max !== undefined) filter.price.$lte = price.max;
        // } else {
        //     filter.price = Number(price);
        // }

        filter.price = Number(price)

    }
    if (status) {
        filter.status = status
    }
    if (review) {
        filter.review = review
    }

    return await productRepository.getAllProducts(filter, sort, skip, limitInt);
}


async function getProductById(productId) {
    const product = await productRepository.getProductById(productId);
    if (!product) {
        throw new Error("Product not found");
    }
    return product;
}

async function deleteProduct(productId) {
    return await productRepository.deleteProduct(productId);
}

async function updatedProduct(productId, updateData) {
    return await productRepository.updateProduct(productId, updateData);
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProduct,
    updatedProduct
};