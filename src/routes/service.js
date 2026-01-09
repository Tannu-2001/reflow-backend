import express from "express";
import {
  getServices,
  getService,
  createService,
} from "../controllers/serviceController.js";

const router = express.Router();

router.get("/", getServices);
router.get("/:slug", getService);
router.post("/", createService);

export default router;