import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import {getProducts, getProductById} from "../Controllers/productController.js";

const router = express.Router();
//@desc   Fetch all products
//@route  GET /api/products
//@access  Public
router.route("/").get(getProducts);

//@desc   Fetch  product with id
//@route  GET /api/products/:id
//@access  Public

router.route("/:id").get(getProductById);

export default router;
