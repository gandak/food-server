import { Request, Response } from "express";
import foodModel from "../../models/food.model";

export const createFood = async (req: Request, res: Response) => {
  try {
    const { foodName, price, image, ingredients, category } = req.body;
    const newFood = await foodModel.create({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
      category: category,
    });
    res.status(200).json({ message: "Successfully created food", newFood });
  } catch (error) {
    res.status(500).json({ message: "Error while creating food ", error });
  }
};

export const getAllFood = async (req: Request, res: Response) => {
  try {
    const allFood = await foodModel.find().populate("category");

    res.status(200).json({ message: "Successfully found foods", allFood });
  } catch (error) {
    res.status(500).json({ message: "Error while getting foods", error });
  }
};

export const getFood = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.params;
    const foundFood = await foodModel
      .find({ _id: foodId })
      .populate("category");

    res
      .status(200)
      .json({ message: "Successfully found food by ID", foundFood });
  } catch (error) {
    res.status(500).json({ message: "Error while getting food by ID", error });
  }
};

export const updateFood = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const { foodName, price, image, ingredients, category } = req.body;
    if (price) await foodModel.updateOne({ _id }, { price });
    if (foodName) await foodModel.updateOne({ _id }, { foodName });
    if (image) await foodModel.updateOne({ _id }, { image });
    if (ingredients) await foodModel.updateOne({ _id }, { ingredients });
    if (category) await foodModel.updateOne({ _id }, { category });

    const foundFood = await foodModel.find({ _id });

    res.status(200).json({ message: "Successfully edited food", foundFood });
  } catch (error) {
    res.status(500).json({ message: "Error while editing food", error });
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    await foodModel.deleteOne({ _id });

    res.status(200).json({ message: "Successfully deleted food" });
  } catch (error) {
    res.status(500).json({ message: "Error while deleting food", error });
  }
};
