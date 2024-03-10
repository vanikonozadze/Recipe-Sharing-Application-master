import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/models/recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
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
            },
          });
        }
      },
    });
  }
}
