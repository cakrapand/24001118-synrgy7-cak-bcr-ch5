import express from "express";
import knex from "knex";
import { Model } from "objection";
import { routes } from "./routes/api.route";

const port = 3000;
const app = express();

const knexInstance = knex({
  client: "postgresql",
  connection: {
    database: "bcr",
    user: "postgres",
    password: "cakra",
  },
});

Model.knex(knexInstance);

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
