import { Model, ModelObject } from "objection";

export class CarsModel extends Model {
  id!: number;
  name!: string;

  static get tableName() {
    return "cars";
  }
}

export type Cars = ModelObject<CarsModel>;
