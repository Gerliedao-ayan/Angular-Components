import { Component } from '@angular/core';

@Component({
  selector: 'app-simplecalculator',
  templateUrl: './simplecalculator.component.html',
  styleUrl: './simplecalculator.component.css'
})
export class SimplecalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  operator: string = '+';

  calculate() {
    return this.operator === '+' ? this.num1 + this.num2 : this.num1 - this.num2;
  }
}
