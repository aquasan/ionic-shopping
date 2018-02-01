import { RecipeService } from './../../services/recipe.service';
import { Recipe } from './../../models/recipe.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipePage } from '../recipe/recipe';
import { RecipeEditPage } from '../recipe-edit/recipe-edit';


@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  recipes: Recipe[] = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public recipeService: RecipeService) {
  }

  ionViewWillEnter() {
    this.getRecipes();
  }

  private getRecipes() {
    this.recipes = this.recipeService.getRecipes();
  }

  removeRecipe(id: number) {
    this.recipeService.removeRecipe(id);
    this.getRecipes();
  }

  listRecipe(recipe: Recipe, index: number) {
    this.navCtrl.push(RecipePage, {'recipe': recipe, 'index': index});
  }

  goToAddRecipe(){
    this.navCtrl.push(RecipeEditPage, {'mode': 'New'});
  }

}
