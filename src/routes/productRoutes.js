const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');

router.post("/createProduct", productController.createProduct);
router.get("/getAllProducts", productController.getProducts);
router.delete("/deleteProduct/:id", productController.deleteProduct);
router.post("/updateProduct/:id", productController.updateProduct);


module.exports = router;
