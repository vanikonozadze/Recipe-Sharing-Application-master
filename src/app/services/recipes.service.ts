import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  baseApiUrl: string = 'http://localhost:3000/recipes';
  favApiUrl: string = 'http://localhost:3000/favoriteRecipes';
  favoriteBoolean: boolean = false;

  constructor(private http: HttpClient) {}

  toggleFavBoolean() {
    this.favoriteBoolean = !this.favoriteBoolean;
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseApiUrl);
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(this.baseApiUrl + '/' + id);
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<Recipe>(this.baseApiUrl, recipe, httpOptions);
  }

  deleteRecipe(id: string): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.baseApiUrl}/${id}`);
  }

  editRecipe(recipe: Recipe): Observable<Recipe> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.put<Recipe>(
      `${this.baseApiUrl}/${recipe.id}`,
      recipe,
      httpOptions
    );
  }

  getFavoriteRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.favApiUrl);
  }

  addFavRecipe(recipe: Recipe): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(this.favApiUrl, recipe, httpOptions);
  }

  deleteFavRecipe(id: string): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.favApiUrl}/${id}`);
  }
}
