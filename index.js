import express from "express";
import dotenv from "dotenv";
import albumsRoute from "./routes/albumsRoute.js";
import commentsRoute from "./routes/usersRoute.js";
import photosRoute from "./routes/photosRoute.js";
import postsRoute from "./routes/postsRoute.js";
import todosRoute from "./routes/todosRoute.js";
import usersRoute from "./routes/usersRoute.js";
const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.status(200).send("Welcome To My API");
});

app.use("/albums", albumsRoute);
app.use("/comments", commentsRoute);
app.use("/photos", photosRoute);
app.use("/posts", postsRoute);
app.use("/todos", todosRoute);
app.use("/users", usersRoute);

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on port${PORT}`);
});
