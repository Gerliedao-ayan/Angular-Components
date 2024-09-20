import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrls: ['./factorialcalculator.component.css']
})
export class FactorialcalculatorComponent {
  number: number = 0;
  factorialValue: number | null = null;
  // @ts-ignore
  factorialValue: null;

  calculateFactorial() {
    if (this.number < 0) {
      this.factorialValue = null; // Factorial of negative numbers is not defined
    } else {
      let factorial = 1;
      for (let i = 1; i <= this.number; i++) {
        factorial *= i;
      }
      this.factorialValue = factorial;
    }
  }
}
