import express from "express";
const app = express();
const PORT = 5555;

app.get("/", (req, res) => {
  res.json({
    message: "Hello EveryOne",
  });
});

app.listen(PORT, () => {
  console.log(`server is Runing at http://127.0.0.1:${PORT}`);
});
