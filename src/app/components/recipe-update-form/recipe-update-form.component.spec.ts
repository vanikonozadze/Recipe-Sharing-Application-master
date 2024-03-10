import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeUpdateFormComponent } from './recipe-update-form.component';

describe('RecipeUpdateFormComponent', () => {
  let component: RecipeUpdateFormComponent;
  let fixture: ComponentFixture<RecipeUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
