import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public recipeService: RecipesService) {}

  ngOnInit(): void {}

  toggleFavView() {
    this.recipeService.toggleFavBoolean();
  }
}
