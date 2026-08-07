import dateAPI from "../../utils/dateAPI.js";
import { messages } from "../routes.js";

export const getMessages = (req, res) => {
  res.render("index.ejs", { messages });
};

export const getNew = (req, res) => {
  res.render("new.ejs");
};

export const getMessage = (req, res) => {
  const id = Number(req.params.id);
  if (id >= 0 && id < messages.length) {
    res.render("msg.ejs", { msg: messages[id] });
  } else {
    res.status(404).render("404.ejs");
  }
};

export const postMessage = (req, res) => {
  const { user, text } = req.body;
  if (!user?.trim() || !text?.trim()) {
    return res
      .status(400)
      .render("error.ejs", {
        error: { message: "Name and message are required" },
      });
  }
  messages.push({ user, text, added: dateAPI() });
  res.redirect("/");
};
