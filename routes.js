const express = require("express");
const router = express.Router();

const product = require("./product/productController");

router.post("/addProduct", product.addProduct);
router.get("/getCategoryBrunch", product.getCategoryBrunch);
router.get("/getCategoryDrinks", product.getCategoryDrinks);
router.get("/getCategorySnacks", product.getCategorySnacks);

module.exports = router;
