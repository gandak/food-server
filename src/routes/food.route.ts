import express from "express";

const foodRoute = express.Router();

foodRoute.get("/");
foodRoute.put("/:foodId");
foodRoute.delete("/:foodId");

export default foodRoute;
