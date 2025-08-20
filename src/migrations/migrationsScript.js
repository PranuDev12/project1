const mongoose = require("mongoose");
const Product = require("../models/productModel");

const migrate = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/productBank');
    await Product.updateMany({
        status: { $exists: false }
    }, { $set: { status: 'IN', review: "P" } });

    console.log("Migration complete ✅");
    mongoose.disconnect();
};

migrate();
