import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorite-recipes.component.html',
  styleUrls: ['./favorite-recipes.component.css'],
})
export class FavoriteRecipesComponent implements OnInit {
  showContainer: boolean = false;
  favRecipes: Recipe[] = [];

  constructor(public recipeService: RecipesService) {}

  ngOnInit(): void {
    this.getFavRecipes();
    setTimeout(() => {
      this.showContainer = true;
    }, 300);
  }

  toggleFavView() {
    this.recipeService.toggleFavBoolean();
  }

  handleSidebarClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('button')) {
      event.stopPropagation();
    }
  }

  getFavRecipes() {
    this.recipeService.getFavoriteRecipes().subscribe({
      next: (response) => {
        this.favRecipes = response;
      },
    });
  }
}
