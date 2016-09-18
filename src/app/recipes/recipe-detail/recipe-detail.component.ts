import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
    selector: 'rb-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    @Input() selectedRecipe: Recipe;

    constructor() {
    }

    ngOnInit() {
    }

}
