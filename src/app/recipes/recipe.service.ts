import {Injectable} from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Schnitzel','Very Tasty', 'http://www.churchplanting.com/wp-content/uploads/2012/02/dummy.jpg', [
            new Ingredient('French Fries', 2),
            new Ingredient('White Egg', 1)
        ]),
        new Recipe('Salad','Very Healthy', 'http://www.churchplanting.com/wp-content/uploads/2012/02/dummy.jpg', []),
    ];

    constructor() {
    }

    getRecipes() {
        return this.recipes;
    }

}
