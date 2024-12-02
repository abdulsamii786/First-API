import express from "express";
import { todos } from "../data/todos.js";

const todosRoute = express.Router();

todosRoute.get("/", (req, res) => {
  res.status(200).send({ status: 200, message: "success", data: todos });
});

export default todosRoute;
