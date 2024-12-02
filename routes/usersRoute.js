import express from "express";
import { users } from "../data/users.js";

const usersRoute = express.Router();

usersRoute.get("/", (req, res) => {
  res.status(200).send({ status: 200, message: "success", data: users });
});

export default usersRoute;
