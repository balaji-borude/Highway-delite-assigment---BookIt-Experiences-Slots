// routes/experienceRoutes.js
import express from "express";
import { getAllExperiences } from "../controller/experienceController";

const router = express.Router();

router.get("/getAllExperiences", getAllExperiences);

export default router;
