import { Router } from "express";
import dateAPI from "../utils/dateAPI.js";
const routes = new Router();

export let messages = [
  {
    text: "Hi there!",
    user: "Golam",
    added: dateAPI(),
  },
  {
    text: "Hello World!",
    user: "Jack",
    added: dateAPI(),
  },
];

routes.get("/", (req, res) => {
  res.render("index.ejs", { messages });
});

routes.get("/new", (req, res) => {
  res.render("new.ejs");
});

routes.get("/msg/:id", (req, res) => {
  const id = Number(req.params.id);

  if (id >= 0 && id < messages.length) {
    const msg = messages[id];
    res.render("msg.ejs", { msg });
  } else {
    res.status(404);
    res.render("404.ejs");
  }
});

routes.post("/new", (req, res) => {
  req.body.added = dateAPI();
  messages.push(req.body);
  res.redirect("/");
});

routes.use((req, res) => {
  res.statusCode = 404;
  res.render("404.ejs");
});

export default routes;
