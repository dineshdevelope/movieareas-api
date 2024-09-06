import express from "express";
const router = express.Router();
import {
  readData,
  createData,
  updateData,
  deleteData,
} from "../controllers/movies.controllers.js";

//Read
router.get("/", readData);

//Create
router.post("/", createData);

//Update
router.put("/:id", updateData);

//Delete
router.delete("/:id", deleteData);

export default router;
