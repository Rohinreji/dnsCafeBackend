const productSchema = require("./productSchema");

const addProduct = async (req, res) => {
  try {
    const { productName, description, price, category, menuDescription } =
      req.body;
    const product = new productSchema({
      productName,
      description,
      price,
      category,
      menuDescription,
    });
    const existingProduct = await productSchema.findOne({
      productName,
    });
    if (existingProduct) {
      res.status(409).json({
        msg: "Already Existed",
      });
    }
    const result = await product.save();
    res.status(200).json({
      msg: "product added",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      err: error,
      msg: "something went wrong!!",
    });
  }
};

const getCategoryBrunch = async (req, res) => {
  try {
    const category = await productSchema.find({ category: "Brunch" });
    res.status(200).json({
      data: category,
      msg: "data retrieved",
    });
  } catch (error) {
    res.status(402).json({
      msg: "something went wrong!!",
      error: error,
    });
  }
};

const getCategoryDrinks = async (req, res) => {
  try {
    const category = await productSchema.find({ category: "Drinks" });
    res.status(200).json({
      data: category,
      msg: "data retrieved",
    });
  } catch (error) {
    res.status(402).json({
      msg: "something went wrong!!",
      error: error,
    });
  }
};
const getCategorySnacks = async (req, res) => {
  try {
    const category = await productSchema.find({ category: "Snacks" });
    res.status(200).json({
      data: category,
      msg: "data retrieved",
    });
  } catch (error) {
    res.status(402).json({
      msg: "something went wrong!!",
      error: error,
    });
  }
};
module.exports = {
  addProduct,
  getCategoryBrunch,
  getCategorySnacks,
  getCategoryDrinks,
};
