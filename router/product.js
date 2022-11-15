const express = require("express");
const router = new express.Router();
const Product = require("../models/product");

router.post("/add", async (req, res) => {
  try {
    const { productName, about, price } = req.body;

    const cartCreate = new Product({
      productName,
      about,
      price,
    });

    const saveProduct = await cartCreate.save();

    res.status(201).send({
      message: "Product Successfully Added to Cart",
      cartCreate,
    });
  } catch (error) {
    res.status(400).send(`err ${error}`);
  }
});
module.exports = router;
