import { ICar } from "../interfaces/cars.interface";
import {
  deleteCarById,
  getAllCars,
  getCarById,
  insertCar,
  updateCarById,
} from "../repositories/cars.repository";

export const createCar = async (car: ICar) => {
  try {
    return await insertCar(car);
  } catch (error: any) {
    throw error;
  }
};

export const getCars = async () => {
  try {
    return await getAllCars();
  } catch (error: any) {
    throw error;
  }
};

export const getCar = async (id: number) => {
  try {
    return await getCarById(id);
  } catch (error: any) {
    throw error;
  }
};

export const updateCar = async (id: number, car: ICar) => {
  try {
    return await updateCarById(id, car);
  } catch (error: any) {
    throw error;
  }
};

export const deleteCar = async (id: number) => {
  try {
    return await deleteCarById(id);
  } catch (error: any) {
    throw error;
  }
};
