import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrls: ['./multiplicationchecker.component.css']
})
export class MultiplicationcheckerComponent {
  number1: number = 0;
  number2: number = 0;
  isMultiple: boolean | null = null;

  checkMultiple() {
    this.isMultiple = (this.number1 % this.number2) === 0;
  }
}
