import { Request, Response, Router } from "express";
import { createCar, deleteCar, getCar, getCars, updateCar } from "../services/cars.service";

export const carsRouter = Router();

carsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { name, price, startRent, finishRent } = req.body;
    if (!name || !price || !startRent || !finishRent)
      return res.status(400).json({ message: "Invalid Input" });

    const cars = await createCar({ name, price, startRent, finishRent });

    return res.status(201).json({ message: "CREATED", cars });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});

carsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const cars = await getCars();
    return res.status(200).json({ message: "OK", cars });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});

carsRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cars = await getCar(+id);
    return res.status(200).json({ message: "OK", cars });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});

carsRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, startRent, finishRent } = req.body;
    if (!name || !price || !startRent || !finishRent)
      return res.status(400).json({ message: "Invalid Input" });

    const cars = await updateCar(+id, { name, price, startRent, finishRent });

    return res.status(200).json({ message: "Car updated" });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

carsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const cars = await deleteCar(+id);

    return res.status(200).json({ message: "Car Deleted" });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});
