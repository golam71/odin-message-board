import { formatDate } from "../../utils/dateAPI.js";
import * as Message from "../models/message.js";

export const listMessages = async (req, res, next) => {
  try {
    const messages = await Message.findAll();
    res.render("index", { messages, formatDate });
  } catch (error) {
    next(error);
  }
};

export const showNewForm = (req, res) => {
  res.render("new");
};

export const showMessage = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(404).render("404");
    }

    const message = await Message.findById(id);
    if (!message) {
      return res.status(404).render("404");
    }

    res.render("msg", { message, formatDate });
  } catch (error) {
    next(error);
  }
};

export const createMessage = async (req, res, next) => {
  try {
    const username = req.body.user?.trim();
    const content = req.body.text?.trim();

    if (!username || !content) {
      return res.status(400).render("error", {
        error: { message: "Name and message are required." },
      });
    }

    await Message.create(username, content);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};
