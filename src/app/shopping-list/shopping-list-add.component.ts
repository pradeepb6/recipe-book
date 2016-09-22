import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit {

  items: Ingredient[];
  constructor() { }

  ngOnInit() {
  }

}
