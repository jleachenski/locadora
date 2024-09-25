import { Router } from "express";
import { store, index } from "../controllers/movie-controller.js";

const router = Router();

router.post("/", store);
router.get("/", index);

export default router;
