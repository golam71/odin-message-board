import { Router } from "express";
import {
  listMessages,
  showNewForm,
  showMessage,
  createMessage,
} from "./controllers/messageController.js";

const router = new Router();

router.get("/", listMessages);
router.get("/new", showNewForm);
router.get("/msg/:id", showMessage);
router.post("/new", createMessage);

router.use((req, res) => {
  res.status(404).render("404");
});

export default router;
