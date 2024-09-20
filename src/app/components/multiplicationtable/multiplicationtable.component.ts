import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {
  multiplicationtable: number = 0;
  table: number[] = [];

  generateTable() {
    this.table = [];
    for (let i = 1; i <= 10; i++) {
      this.table.push(i);
    }
  }
}
