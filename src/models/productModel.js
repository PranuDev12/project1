const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const STATUS = {
    IN_STOCK: { value: "IN", label: "InStock" },
    OUT_STOCK: { value: "OUT", label: "OutStock" }
}

const REVIEW = {
    POSITIVE: { value: "P", label: "Positive" },
    NEGATIVE: { value: "N", label: "Negative" },

}
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    createdBy: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: Object.values(STATUS).map(status => status.value),
        default: STATUS.IN_STOCK.value
    },
    review: {
        type: String,
        enum: Object.values(REVIEW).map(review => review.value),
        default: REVIEW.POSITIVE.value
    },
}, { timestamps: true });

productSchema.index({ code: 1 }, { unique: true });
productSchema.index({ price: 1 });


module.exports = mongoose.model("Product", productSchema)