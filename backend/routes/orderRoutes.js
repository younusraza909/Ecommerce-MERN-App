import express from "express";

import {addOrderItem,getOrderById} from "../Controllers/orderController.js";
import {protect} from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItem);
router.route("/:id").get(protect,getOrderById)

export default router;
