import { ShoppingService } from './../../services/shopping.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingItems :any[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private shoppingService: ShoppingService) {
  }

  ionViewWillEnter() {
    this.getItems();
  }

  addToShoppingList(f: NgForm){
    this.shoppingService.addItem(f.value.name, f.value.amount);
    f.resetForm();
    this.getItems();
  }

  private getItems() {
    this.shoppingItems = this.shoppingService.getItems();
  }

  removeItem(id: number) {
    this.shoppingService.removeItem(id);
    this.getItems();
  }

}
