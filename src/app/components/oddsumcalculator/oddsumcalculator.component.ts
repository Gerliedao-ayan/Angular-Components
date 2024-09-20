import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
  inputNumber: number = 0;
  oddsumcalculator: number | null = null;

  calculateOddSum() {
    this.oddsumcalculator = 0;
    for (let i = 1; i <= this.inputNumber; i += 2) {
      this.oddsumcalculator += i;
    }
  }
}
