import { Request, Response, Router } from "express";
import { getCars } from "../services/cars.service";

export const carsRouter = Router();

carsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const cars = await getCars();
    return res.send(cars);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});
