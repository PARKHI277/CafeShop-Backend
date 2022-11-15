require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Product = new mongoose.model("Product", ProductSchema);
module.exports = Product;
