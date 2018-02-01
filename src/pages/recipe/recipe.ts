import { RecipeEditPage } from './../recipe-edit/recipe-edit';
import { RecipeService } from './../../services/recipe.service';
import { Recipe } from './../../models/recipe.model';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingService } from '../../services/shopping.service';


@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage implements OnInit{

  recipe: Recipe;
  index: number;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public recipeService: RecipeService,
    public shoppingService: ShoppingService) {
  }

  ionViewWillEnter() {
    
  }
  ngOnInit() {
    this.recipe = this.navParams.get('recipe');
    this.index = this.navParams.get('index');
  }

  deleteRecipe() {
    this.recipeService.removeRecipe(this.index);
    this.navCtrl.pop();
  }

  editRecipe() {
    this.navCtrl.push(RecipeEditPage, {'recipe': this.recipe, 'mode': 'Edit', 'index': this.index});
  }

  addToShoppingList() {
    for(let ing of this.recipe.ingredients) {
      this.shoppingService.addItem(ing.name, ing.amount);
    }
  }
}
