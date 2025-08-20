const productService = require('../services/productService');

const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json({ success: true, data: product });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

const getProducts = async (req, res) => {

    try {

        const { page, limit, sortBy, order, search, price, status, review } = req.query;
        const products = await productService.getAllProducts(
            page,
            limit,
            sortBy,
            order,
            search,
            price, status, review
        );
        res.status(200).json({ success: true, data: products });
    } catch (err) {
        console.log(err, 'error in khj')
        res.status(400).json({ success: false, message: err.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await productService.deleteProduct(id);

        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, data: deletedProduct });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await productService.updatedProduct(id, req.body);
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" })
        }
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(400).json({ success: false, message: err.message });

    }


}

module.exports = {
    createProduct,
    getProducts,
    deleteProduct,
    updateProduct
};