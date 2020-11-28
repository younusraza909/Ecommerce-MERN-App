import express from "express";

import {addOrderItem} from "../Controllers/orderController.js";
import {protect} from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItem);

export default router;
