import { Recipe } from './recipe.model';
import { EventEmitter, Output, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  public selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Hamburger', 'This is a simple Hamburger recipie',
     'https://media-cdn.tripadvisor.com/media/photo-s/10/7f/41/6f/hamburguer-montado-e.jpg',
     [new Ingredient('Beef', 20), new Ingredient('Onion', 7), new Ingredient('Egg', 10)]),
     new Recipe('Pizza', 'This is a simple Pizza recipie',
     'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000rUR6KMAW/594d19e4e4b0eb79076f898b.jpg&w=620&h=400',
     [new Ingredient('Meet', 20)]),
     new Recipe('Burrito', 'This is a simple Burrito recipie',
     'https://d12ph5aixxtnio.cloudfront.net/uploads/images/recipes/_full/burrito_samosa_tn.jpg', 
     [new Ingredient('Meet', 20)])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
