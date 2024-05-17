import { Request, Response, Router } from "express";
import { CarsModel } from "../models/cars";

export const getAllCars = async () => {
  return await CarsModel.query();
};
