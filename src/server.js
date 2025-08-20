const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/mongoConnection");

const app = express();

app.use(express.json());

app.use("/cms/users", userRoutes);
app.use("/cms/products", productRoutes);


connectDB()

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});