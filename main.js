import express from "express";
import movieRoutes from "./routes/movies.route.js";
const app = express();
const PORT = 5555;

app.get("/", (req, res) => {
  res.json({
    message: "Hello EveryOne",
  });
});

//CRUD functionality of movies
app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`server is Runing at http://127.0.0.1:${PORT}`);
});
