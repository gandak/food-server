import foodCategoryModel from "../../models/food-category.model";
import { Request, Response } from "express";

export const getFood = async (req: Request, res: Response) => {
  try {
    const allFoods = await foodCategoryModel.find();

    res.status(200).json({ message: "Successfully received foods", allFoods });
  } catch (error) {
    res.status(500).json({ message: "Error in getting foods", error });
  }
};

export const updateFood = async (req: Request, res: Response) => {
  try {
    const { _id, categoryName } = req.body;
    await foodCategoryModel.updateOne({ _id }, { categoryName });

    const allCategories = await foodCategoryModel.find();

    res
      .status(200)
      .json({ message: "Successfully edited category", allCategories });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory", error });
  }
};

export const deteleFoodCategory = async (req: Request, res: Response) => {
  try {
    const { _id, categoryName } = req.body;
    await foodCategoryModel.deleteOne({ _id });

    const allCategories = await foodCategoryModel.find();

    res
      .status(200)
      .json({ message: "Successfully deleted category", allCategories });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory", error });
  }
};
