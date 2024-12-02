import express from "express";
import { albums } from "../data/albums.js";

const albumsRoute = express.Router();

albumsRoute.get("/", (req, res) => {
  res.status(200).send({ status: 200, message: "success", data: albums });
});

export default albumsRoute;
