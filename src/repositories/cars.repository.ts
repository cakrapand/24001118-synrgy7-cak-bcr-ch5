import { ICar } from "../interfaces/cars.interface";
import { Cars, CarsModel } from "../models/cars";

export const insertCar = async (car: ICar) => {
  return await CarsModel.query().insert(car);
};

export const getCarById = async (id: number) => {
  return await CarsModel.query().findById(id).throwIfNotFound();
};

export const getAllCars = async () => {
  return await CarsModel.query();
};

export const updateCarById = async (id: number, car: ICar) => {
  return await CarsModel.query().where("id", id).update(car);
};

export const deleteCarById = async (id: number) => {
  return await CarsModel.query().where("id", id).del();
};
