import { Router } from "express";
import dateAPI from "../utils/dateAPI.js";
import {
  getMessages,
  getNew,
  getMessage,
  postMessage,
} from "./controllers/messageController.js";
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

routes.get("/", getMessages);
routes.get("/new", getNew);
routes.get("/msg/:id", getMessage);
routes.post("/new", postMessage);

routes.use((req, res) => {
  res.statusCode = 404;
  res.render("404.ejs");
});

export default routes;
