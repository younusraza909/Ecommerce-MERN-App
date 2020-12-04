import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../Controllers/productController.js";

const router = express.Router();
//@desc   Fetch all products
//@route  GET /api/products
//@access  Public
router.route("/").get(getProducts).post(protect, admin, createProduct);

//@desc   Fetch  product with id
//@route  GET /api/products/:id
//@access  Public

router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
