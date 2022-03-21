import { recipe } from './Model/Types';

export const formatIngredients = (recipe: recipe) => {
    recipe.ingredients = (recipe.ingredients as string).split(",");
    recipe.steps = (recipe.steps as string).split(",");
    return recipe;
}