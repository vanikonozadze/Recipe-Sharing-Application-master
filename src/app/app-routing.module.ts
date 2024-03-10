import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeUpdateFormComponent } from './components/recipe-update-form/recipe-update-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'recipes',
    component: HomeComponent,
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailsComponent,
  },
  {
    path: 'add-recipe',
    component: RecipeFormComponent,
  },
  {
    path: 'recipes/:id/edit',
    component: RecipeUpdateFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
