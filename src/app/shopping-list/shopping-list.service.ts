import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  private ingredientsMap: Map<string, Ingredient>;
  public ingredientAdded = new EventEmitter<Ingredient[]>();

  constructor() {
    this.ingredientsMap = new Map<string, Ingredient>();
    this.init();
  }

  private init() {
    this.addIngredient(new Ingredient('Apple', 5));
    this.addIngredient(new Ingredient('Onion', 2));
    this.addIngredient(new Ingredient('Tomato', 2));
  }

  public addIngredient(ingredient: Ingredient) {
    if (!this.ingredientsMap.has(ingredient.name)) {
      this.ingredientsMap.set(ingredient.name, ingredient);
      this.ingredientAdded.emit(this.getIngredients());
    }
  }

  public addIngredients(ingredient: Ingredient[]) {
    console.log(ingredient);
    ingredient.forEach(i => {
      if (!this.ingredientsMap.has(i.name)) {
        this.ingredientsMap.set(i.name, i);
      }
    });
    console.log(this.getIngredients());
    this.ingredientAdded.emit(this.getIngredients());
  }

  public deleteIngredient(name: string): boolean {
    const deleted = this.ingredientsMap.delete(name);
    if (deleted) {  this.ingredientAdded.emit(this.getIngredients());  }
    return deleted;
  }

  public clearList() {
    this.ingredientsMap.clear();
    this.ingredientAdded.emit(this.getIngredients());
  }

  public getIngredients(): Ingredient[] {
    return Array.from(this.ingredientsMap.values());
  }
}
