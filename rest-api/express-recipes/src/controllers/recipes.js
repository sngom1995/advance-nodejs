import { getAll } from "../services/recipes.js";

export const getAllRecipes = async (req, res, next) => {
    res.json(getAll());
}


export const saveRecipes = async (req, res, next) => {
    const recipe = req.body;
    res.json(saveRecipes(recipe));
}