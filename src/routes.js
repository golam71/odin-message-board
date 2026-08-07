import { Router } from "express";
import dateAPI from "../utils/dateAPI.js";
const routes = new Router();

import { messages } from "./index.js";

routes.get("/", (req, res) => {
  res.render("index.ejs", { messages });
});

routes.get("/new", (req, res) => {
  res.render("new.ejs");
});

routes.get("/msg/:id", (req, res) => {
  let msg = messages[req.params.id];
  res.render("msg.ejs", { msg });
});

routes.post("/new", (req, res) => {
  console.log(req.body);
  req.body.added = dateAPI();
  messages.push(req.body);
  res.redirect("/");
});

export default routes;
