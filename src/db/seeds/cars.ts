import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("cars").del();

  // Inserts seed entries
  await knex("cars").insert([
    { id: 1, name: "Subaru" },
    { id: 2, name: "Supra" },
    { id: 3, name: "McLaren" },
  ]);
}
