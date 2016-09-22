import {Component, OnInit, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe";
import {Output} from "@angular/core/src/metadata/directives";

@Component({
    selector: 'rb-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Schnitzel','Very Tasty', 'http://www.churchplanting.com/wp-content/uploads/2012/02/dummy.jpg', []),
        new Recipe('Salad','Very Healthy', 'http://www.churchplanting.com/wp-content/uploads/2012/02/dummy.jpg', []),
    ];
    @Output() recipeSelected = new EventEmitter<Recipe>();
    constructor() {
    }

    ngOnInit() {
    }

    onSelected(recipe: Recipe){
        this.recipeSelected.emit(recipe);
    }
}
