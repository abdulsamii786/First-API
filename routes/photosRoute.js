import express from "express";
import { photos } from "../data/photos.js";

const photosRoute = express.Router();

photosRoute.get("/", (req, res) => {
  res.status(200).send({ status: 200, message: "success", data: photos });
});

export default photosRoute;
