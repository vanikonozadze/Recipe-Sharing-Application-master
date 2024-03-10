import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  @Input() element!: Recipe;
  @Output() recipeDeleted: EventEmitter<void> = new EventEmitter<void>();

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {}

  onDeleteRecipe(): void {
    if (confirm('Are you sure you want to delete this recipe?')) {
      this.recipesService.deleteRecipe(this.element.id).subscribe(
        (response) => {
          alert('Recipe deleted successfully');
          this.recipeDeleted.emit();
        },
        (error) => {
          console.error('Error deleting recipe:', error);
        }
      );
    }
  }

  addFavRecipe(recipe: Recipe): void {
    this.recipesService.getFavoriteRecipes().subscribe((favoriteRecipes) => {
      const existingRecipe = favoriteRecipes.find((r) => r.id === recipe.id);
      if (existingRecipe) {
        alert('Recipe already exists in favorites.');
        return;
      }
      this.recipesService.addFavRecipe(recipe).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        },
      });
    });
  }
}
