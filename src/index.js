import express from "express";
const app = express();
import routes from "./routes.js";
import path from "node:path";

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(import.meta.dirname, "../views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(import.meta.dirname, "../public")));

app.use(routes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render("error.ejs", {
    error: { message: "Something went wrong. Please try again later." },
  });
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
