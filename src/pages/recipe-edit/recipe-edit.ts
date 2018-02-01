import { Recipe } from './../../models/recipe.model';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, 
  ActionSheetController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';


@IonicPage()
@Component({
  selector: 'page-recipe-edit',
  templateUrl: 'recipe-edit.html',
})
export class RecipeEditPage implements OnInit {

  mode: string = 'New';
  index: number;
  recipe: Recipe;
  recipeForm: FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public recipeService: RecipeService,
    public actionSheet: ActionSheetController,
    public alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.mode = this.navParams.get('mode');
    this.recipe = this.navParams.get('recipe');
    this.index = this.navParams.get('index');
    let name = null;
    let description = null;
    let difficulty = 'Medium';
    let ingredients = [];
    if (this.mode == 'Edit') {
      name = this.recipe.name;
      description = this.recipe.description;
      difficulty = this.recipe.difficulty;
      for(let ingredient of this.recipe.ingredients)
      {
        ingredients.push(new FormGroup({
          name: new FormControl(ingredient.name),
          amount:new FormControl(ingredient.amount)
        }));
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      description: new FormControl(description, Validators.required),
      difficulty: new FormControl(difficulty, Validators.required),
      ingredients: new FormArray(ingredients)
    });
  }

  ionViewWillEnter() {
    
  }

  addRecipe() {

  }

  editRecipe() {

  }

  submitRecipe() {
    let value = this.recipeForm.value;
    if(this.mode == "Edit"){
      this.recipeService.editRecipe(this.index, value.name, 
        value.description, value.difficulty, value.ingredients);
      this.navCtrl.popToRoot();
    }
    else {
      this.recipeService.addRecipe(value.name, 
        value.description, value.difficulty, value.ingredients);
      this.navCtrl.pop();
    }
  }
  
  manageIngredients() {

    const action = this.actionSheet.create({
      title: 'Manage Ingredients',
      buttons: [
        {
          text: 'Add Ingredients',
          handler: () => {
            this.showPrompt();
          }
        },
        {
          text: 'Remove all Ingredients',
          handler: () => {

            this.recipeForm.setControl('ingredients', new FormArray([]));

          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    action.present();

  }

  private showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Add Ingredient',
      message: 'Enter name and amount of ingredient to be used',
      inputs: [
        {
          name: 'name',
          placeholder: 'milk'
        },
        {
          name: 'amount',
          placeholder: '1'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            (<FormArray>this.recipeForm.get('ingredients')).push(
              new FormGroup({
                name: new FormControl(data.name),
                amount: new FormControl(data.amount)
              })
            );
          }
        }
      ]
    });
    prompt.present();
  }
}
