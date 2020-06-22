import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Puri Bhaji', 
      'Tasty snack', 
      'https://storage.needpix.com/rsynced_images/recipes-1152341_1280.jpg',
      [
        new Ingredient('Puri', 5),
        new Ingredient('Potatoes', 4)
      ]),
    new Recipe(
      'Bhel Puri', 
      'Appetizer', 
      'https://storage.needpix.com/rsynced_images/recipes-1152341_1280.jpg',
      [
        new Ingredient('Bhel', 2),
        new Ingredient('Sev', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}