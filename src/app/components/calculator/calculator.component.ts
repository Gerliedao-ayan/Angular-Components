import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  // @ts-ignore
  result: number = null;
  // @ts-ignore
  result: number;
  // @ts-ignore
  result: number | undefined;

  add() {
    this.result = this.num1 + this.num2;
  }

  subtract() {
    this.result = this.num1 - this.num2;
  }

  multiply() {
    this.result = this.num1 * this.num2;
  }

  divide() {
    // @ts-ignore
    this.result = this.num2 !== 0 ? this.num1 / this.num2 : 'Infinity';
  }
}
