import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cars", (table: Knex.TableBuilder) => {
    table.increments("id").primary;
    table.string("name").notNullable;
    table.integer("price").notNullable;
    table.string("photoUrl").notNullable;
    table.datetime("startRent").notNullable;
    table.datetime("finishRent").notNullable;
    table.timestamps({ defaultToNow: true, useCamelCase: true });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("cars");
}
