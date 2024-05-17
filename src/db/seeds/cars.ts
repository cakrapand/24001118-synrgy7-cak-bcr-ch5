import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("cars").del();

  // Inserts seed entries
  await knex("cars").insert([
    {
      name: "Subaru",
      price: 1000,
      photoUrl: "Photo URL",
      startRent: new Date(),
      finishRent: new Date(),
    },
    {
      name: "McLaren",
      price: 2000,
      photoUrl: "Photo URL",
      startRent: new Date(),
      finishRent: new Date(),
    },
    {
      name: "Supra",
      price: 3000,
      photoUrl: "Photo URL",
      startRent: new Date(),
      finishRent: new Date(),
    },
  ]);
}
