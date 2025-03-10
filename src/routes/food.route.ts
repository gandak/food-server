import express from "express";
import {
  createFood,
  deleteFood,
  getAllFood,
  getFood,
  updateFood,
} from "../controllers/food/food.controller";

const foodRoute = express.Router();

foodRoute.post("/", createFood);
foodRoute.get("/", getAllFood);
foodRoute.get("/:foodId", getFood);
foodRoute.patch("/:foodId", updateFood);
foodRoute.delete("/:foodId", deleteFood);

export default foodRoute;
