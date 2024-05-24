import express from "express";
import knex from "knex";
import { Model } from "objection";
import { router } from "./routes/api.route";

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
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
