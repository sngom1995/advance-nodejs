import recipes from '../../db/recipes.js';

export const getAll = () => {
    return recipes;
}

export const saveRecipes = (recipe) => {
    recipes.id = recipes.length + 1;
    recipes.push(recipe);
    return recipe;
   
}

