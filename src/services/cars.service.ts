import { getAllCars } from "../repositories/cars.repository";

export const getCars = async () => {
  try {
    return await getAllCars();
  } catch (error: any) {
    throw error;
  }
};
