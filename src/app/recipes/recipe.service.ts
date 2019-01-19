import { Recipe } from './recipe.model';

export class RecipeService {

  public selectedRecipe: Recipe;

  recipes: Recipe[] = [
    new Recipe('Hamburger', 'This is a simple Hamburger recipie',
     'https://media-cdn.tripadvisor.com/media/photo-s/10/7f/41/6f/hamburguer-montado-e.jpg'),
     new Recipe('Pizza', 'This is a simple Pizza recipie',
     'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000rUR6KMAW/594d19e4e4b0eb79076f898b.jpg&w=620&h=400'),
     new Recipe('Burrito', 'This is a simple Burrito recipie',
     'https://d12ph5aixxtnio.cloudfront.net/uploads/images/recipes/_full/burrito_samosa_tn.jpg')
  ];

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  public setSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
