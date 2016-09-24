import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {Input} from "@angular/core/src/metadata/directives";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
    selector: 'rb-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    @Input() selectedRecipe: Recipe;

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit() {
    }

    onAddToShoppingList() {
        this.shoppingListService.addItems(this.selectedRecipe.ingredients);
    }
}
