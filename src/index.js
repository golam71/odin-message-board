import express from "express";
const app = new express();
import routes from "./routes.js";
import path from "node:path";
import dateAPI from "../utils/dateAPI.js";



app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(import.meta.dirname, "../views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(import.meta.dirname, "../public")));

app.use(routes);
app.listen(3000, () => {
  console.log("Running on port 3000");
});
