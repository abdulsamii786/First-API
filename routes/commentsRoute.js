import express from "express";
import { comments } from "../data/comments.js";

const commentsRoute = express.Router();

commentsRoute.get("/", (req, res) => {
  res.status(200).send({ status: 200, message: "success", data: comments });
});

export default commentsRoute;
