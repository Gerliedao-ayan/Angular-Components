import { Component } from '@angular/core';

@Component({
  selector: 'app-interestcalculator',
  templateUrl: './interestcalculator.component.html',
  styleUrls: ['./interestcalculator.component.css']
})
export class InterestcalculatorComponent {
  principal: number = 0;
  rate: number = 0;
  time: number = 0;
  interestcalculator: number | null = null;

  calculateSimpleInterest() {
    this.interestcalculator = (this.principal * this.rate * this.time) / 100;
  }
}
