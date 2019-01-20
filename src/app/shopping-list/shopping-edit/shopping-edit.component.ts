import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private shoppingListService: ShoppingListService) {}

  public onIngredientAdded(ingredient: string, amount: number) {
    this.shoppingListService.addIngredient(new Ingredient(ingredient, amount));
  }

  public deleteIngredient(name: string) {
    this.shoppingListService.deleteIngredient(name);
  }

  public clearList() {
    this.shoppingListService.clearList();
  }
}
