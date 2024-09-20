import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BmisolverComponent {
  height: number = 0;
  weight: number = 0;
  bmi: number | null = null;

  calculateBMI() {
    this.bmi = this.weight / (this.height * this.height);
  }
}
