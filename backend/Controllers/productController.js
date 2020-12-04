import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//@desc   Fetch all products
//@route  GET /api/products
//@access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

//@desc   Fetch  product with id
//@route  GET /api/products/:id
//@access  Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    // res.status(404).json({message: "Product not found"});
    res.status(404);
    throw new Error("Product not found");
  }
});

//@desc   Delete a  product with id
//@route  DEL /api/products/:id
//@access  Private/Admins

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Product Deleted" });
  } else {
    // res.status(404).json({message: "Product not found"});
    res.status(404);
    throw new Error("Product not found");
  }
});

//@desc   Create a  product
//@route  POST /api/products
//@access  Private/Admins

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample Name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample Brand",
    category: "Sample Category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample Description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

//@desc   Update a  product
//@route  PUT /api/products/:id
//@access  Private/Admins

const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});
export {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
};
