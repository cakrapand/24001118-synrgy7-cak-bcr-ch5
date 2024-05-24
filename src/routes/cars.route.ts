import { Router } from "express";
import { destroy, get, getAll, create, update } from "../controllers/cars.controller";
import uploadOnMemory from "../config/multer";
import { uploadPhoto } from "../middleware/upload-photo";

export const carsRouter = Router();

carsRouter.post("/cars", uploadOnMemory.single("photo"), uploadPhoto, create);
carsRouter.get("/cars", getAll);
carsRouter.get("/cars/:id", get);
carsRouter.put("/cars/:id", uploadOnMemory.single("photo"), uploadPhoto, update);
carsRouter.delete("/cars/:id", destroy);
