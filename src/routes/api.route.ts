import { Router } from "express";
import { carsRouter } from "./cars.route";

export const router = Router();

router.use("/api", carsRouter);
