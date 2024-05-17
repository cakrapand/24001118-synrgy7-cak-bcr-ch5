import { Router } from "express";
import { carsRouter } from "../controllers/cars.controller";

export const routes = Router();

routes.use("/cars", carsRouter);
