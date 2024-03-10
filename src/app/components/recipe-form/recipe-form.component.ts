import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  recipeForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.recipeForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      thumbnail: ['', Validators.required],
      ingredients: this.formBuilder.array([''], Validators.required),
      cookingInstructions: ['', Validators.required],
    });
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.formBuilder.control(''));
  }

  removeIngredient(index: number) {
    if (index == 0) {
      alert("Can't remove the first ingredients field!");
    } else {
      this.ingredients.removeAt(index);
    }
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      const newRecipe: Recipe = this.recipeForm.value;
      this.recipesService.addRecipe(newRecipe).subscribe(
        (response) => {
          console.log('Recipe added successfully:', response);
          this.recipeForm.reset();
        },
        (error) => {
          console.error('Error adding recipe:', error);
        }
      );
    } else {
      console.error('Form invalid. Please fill all required fields.');
    }
  }
}
