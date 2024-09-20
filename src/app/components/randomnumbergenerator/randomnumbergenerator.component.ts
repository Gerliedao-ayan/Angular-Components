import { Component } from '@angular/core';

@Component({
  selector: 'app-randomnumbergenerator',
  templateUrl: './randomnumbergenerator.component.html',
  styleUrls: ['./randomnumbergenerator.component.css']
})
export class RandomnumbergeneratorComponent {
  min: number = 0;
  max: number = 10;
  randomnumbergenerator: number | null = null;

  generateRandomNumber() {
    this.randomnumbergenerator = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}
