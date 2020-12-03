import express from "express";
const router = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";

import {
  authUser,
  deleteUser,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserProfile,
} from "../Controllers/userController.js";

router.post("/login", authUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route("/").post(registerUser).get(protect, admin, getUsers);
export default router;

router.route("/:id").delete(protect, admin, deleteUser);
