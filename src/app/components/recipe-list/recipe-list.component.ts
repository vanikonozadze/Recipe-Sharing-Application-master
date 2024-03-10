import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  searchTerm: string = '';

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.recipesService.getRecipes().subscribe({
      next: (response) => {
        this.recipes = response;
        this.filteredRecipes = [...this.recipes];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  filterRecipes() {
    this.filteredRecipes = this.recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
    );
  }

  onRecipeDeleted(): void {
    this.getRecipes();
  }
}
