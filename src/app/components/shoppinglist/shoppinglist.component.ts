import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent {
  newItem: string = '';
  shoppingList: string[] = [];

  addItem() {
    if (this.newItem) {
      this.shoppingList.push(this.newItem);
      this.newItem = ''; // Clear input field
    }
  }

  removeItem(index: number) {
    this.shoppingList.splice(index, 1);
  }
}
