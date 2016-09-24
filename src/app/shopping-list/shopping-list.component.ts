import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "./shopping-list.service";
import {Ingredient} from "../shared/ingredient";

@Component({
    selector: 'rb-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    items: Ingredient[] = [];

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit() {
        this.items = this.shoppingListService.getItems();
    }

}
