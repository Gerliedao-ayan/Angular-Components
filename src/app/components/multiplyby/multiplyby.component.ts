import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplyby',
  templateUrl: './multiplyby.component.html',
  styleUrl: './multiplyby.component.css'
})
export class MultiplybyComponent {
  numberInput: number = 0;
  multiplier: number = 2; // Default multiplier
  result: number | null = null;

  multiply() {
    this.result = this.numberInput * this.multiplier;
  }
}
