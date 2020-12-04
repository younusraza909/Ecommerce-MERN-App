import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  getProducts,
  getProductById,
  deleteProduct,
} from "../Controllers/productController.js";

const router = express.Router();
//@desc   Fetch all products
//@route  GET /api/products
//@access  Public
router.route("/").get(getProducts);

//@desc   Fetch  product with id
//@route  GET /api/products/:id
//@access  Public

router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct);

export default router;
