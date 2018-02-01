import { Ingredient } from './../models/ingredient.model';
export class ShoppingService {

    shoppingItems: Ingredient[] = [];
    cosntructor() {}

    addItem(name: string, amount: number){
        this.shoppingItems.push(
            new Ingredient(name, amount)
        );
        console.log(this.shoppingItems);
    }

    removeItem(id: number) {
        this.shoppingItems.splice(id, 1);
    }

    getItems() {
        return this.shoppingItems.slice();
    }

}