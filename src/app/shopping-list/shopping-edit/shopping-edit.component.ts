import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() addIngredient = new EventEmitter<Ingredient>();

  public onIngredientAdded(ingredient: string, amount: number) {
    this.addIngredient.emit(new Ingredient(ingredient, amount));
  }
}
