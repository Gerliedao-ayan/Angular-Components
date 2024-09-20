import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BmisolverComponent {
  height: number = 0;
  weight: number = 0;
  bmisolver: number | null = null;

  calculateBMI() {
    this.bmisolver = this.weight / (this.height * this.height);
  }
}
