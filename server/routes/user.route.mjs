import express from "express";
import { getUserProfile, login, logout, register, updateProfile } from "../controllers/user.controller.mjs";
import isAuthenticated from "../middlewares/isAuthenticated.mjs";
import upload from "../utils/multer.mjs";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile").get(isAuthenticated, getUserProfile);
router.route("/profile/update").put(isAuthenticated, upload.single("profilePhoto"), updateProfile);

export default router;