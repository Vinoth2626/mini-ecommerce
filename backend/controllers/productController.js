const productModel = require("../models/productModel");
const ProductModel = require("../models/productModel");

// Get Products API -  /api/v1/product
exports.getProducts = async (req, res, next) => {
  const query = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const product = await ProductModel.find(query);
console.log('product',product);
  res.json({
    success: true,
    product,
  });
};

// Get Single Product API -  /api/v1/product/:id
exports.getSingelProduct = async (req, res, next) => {
  console.log(req.params.id, "ID");
  try {
    const product = await productModel.findById(req.params.id);
    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Unable to get product with that ID",
    });
  }
};
