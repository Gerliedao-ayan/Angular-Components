import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrls: ['./compoundinterestcalculator.component.css']
})
export class CompoundinterestcalculatorComponent {
  principal: number = 0;
  rate: number = 0;
  time: number = 0;
  frequency: number = 1; // Default to annual compounding
  compoundinterestcalculator: number | null = null;

  calculateCompoundInterest() {
    const r = this.rate / 100; // Convert percentage to decimal
    this.compoundinterestcalculator = this.principal * Math.pow(1 + (r / this.frequency), this.frequency * this.time) - this.principal;
  }
}
