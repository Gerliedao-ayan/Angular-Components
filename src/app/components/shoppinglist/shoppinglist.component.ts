import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent {
  newItem: string = '';
  shoppinglist: string[] = [];

  addItem() {
    if (this.newItem) {
      this.shoppinglist.push(this.newItem);
      this.newItem = ''; // Clear input field
    }
  }

  removeItem(index: number) {
    this.shoppinglist.splice(index, 1);
  }
}
