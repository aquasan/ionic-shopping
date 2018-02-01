import { Ingredient } from './../models/ingredient.model';
import { Recipe } from "../models/recipe.model";

export class RecipeService {

    recipeList: Recipe[] = [];

    constructor() {}

    addRecipe(name: string, description: string, 
            difficulty: string, ingredients: Ingredient[]) {
        this.recipeList.push(new Recipe(name, description, difficulty, ingredients));
    }

    removeRecipe(id: number){
        this.recipeList.splice(id, 1);
    }

    getRecipes() {
        return this.recipeList.slice();
    }

    editRecipe(id: number, name: string, description: string,
            difficulty: string, ingredients: Ingredient[]) {

        this.recipeList[id] = new Recipe(name, description, difficulty, ingredients);
        console.log(this.recipeList);
    }
}