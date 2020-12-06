import express from "express";

import {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
  getMyOrder,
  getOrders,
  updateOrderToDelivered,
} from "../Controllers/orderController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItem).get(protect, admin, getOrders);
router.route("/myorders").get(protect, getMyOrder);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
