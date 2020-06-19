import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'This is a test', 'https://storage.needpix.com/rsynced_images/recipes-1152341_1280.jpg'),
    new Recipe('Test Recipe 2', 'This is a test', 'https://storage.needpix.com/rsynced_images/recipes-1152341_1280.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}