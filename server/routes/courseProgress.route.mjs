import express from "express"
import isAuthenticated from "../middlewares/isAuthenticated.mjs";
import { getCourseProgress, markAsCompleted, markAsInCompleted, updateLectureProgress } from "../controllers/courseProgress.controller.mjs";

const router = express.Router()

router.route("/:courseId").get(isAuthenticated, getCourseProgress);
router.route("/:courseId/lecture/:lectureId/view").post(isAuthenticated, updateLectureProgress);
router.route("/:courseId/complete").post(isAuthenticated, markAsCompleted);
router.route("/:courseId/incomplete").post(isAuthenticated, markAsInCompleted);

export default router;