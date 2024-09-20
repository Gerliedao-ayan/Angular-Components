import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  styleUrl: './divisiblechecker.component.css'
})
export class DivisiblecheckerComponent {
  number1: number = 0;
  number2: number = 0;
  divisiblechecker: boolean | null = null;

  checkDivisibility() {
    this.divisiblechecker = this.number1 % this.number2 === 0;
  }
}
