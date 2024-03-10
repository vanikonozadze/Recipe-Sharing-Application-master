import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-update-form',
  templateUrl: './recipe-update-form.component.html',
  styleUrls: ['./recipe-update-form.component.css'],
})
export class RecipeUpdateFormComponent implements OnInit {
  RecipeDetails: Recipe = {
    id: '',
    title: '',
    description: '',
    thumbnail: '',
    ingredients: [],
    cookingInstructions: '',
  };

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.recipeService.getRecipe(id).subscribe({
            next: (response) => {
              this.RecipeDetails = response;
              console.log(this.RecipeDetails);
            },
          });
        }
      },
    });
  }

  onSubmit(): void {
    this.recipeService.editRecipe(this.RecipeDetails).subscribe({
      next: () => {
        console.log('Recipe updated successfully');
        this.router.navigate(['/recipes', this.RecipeDetails.id]);
      },
      error: (error) => {
        console.error('Error updating recipe:', error);
      },
    });
  }

  addIngredient(): void {
    this.RecipeDetails.ingredients.push('');
  }

  removeIngredient(index: number): void {
    this.RecipeDetails.ingredients.splice(index, 1);
  }

  updateIngredient(index: number, value: string): void {
    this.RecipeDetails.ingredients[index] = value;
  }
}
