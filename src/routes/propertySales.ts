import { Router } from "express";
import { getPropertySales } from "../controllers/propertySaleController";

const router = Router();

// Property Sales Route
router.get("/", getPropertySales);

export default router;