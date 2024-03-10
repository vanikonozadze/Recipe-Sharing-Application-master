import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-fav-recipe',
  templateUrl: './fav-recipe.component.html',
  styleUrls: ['./fav-recipe.component.css'],
})
export class FavRecipeComponent implements OnInit {
  @Input() element!: Recipe;

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {}

  deleteFavRecipe() {
    this.recipeService.deleteFavRecipe(this.element.id).subscribe({
      next: (response) => {
        alert('Fav recipe deleted successfully');
      },
    });
  }
}
