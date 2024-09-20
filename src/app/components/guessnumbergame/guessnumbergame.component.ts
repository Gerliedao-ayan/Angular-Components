import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrls: ['./guessnumbergame.component.css']
})
export class GuessnumbergameComponent {
  // @ts-ignore
  userGuess: number = null;
  secretNumber: number = Math.floor(Math.random() * 100) + 1;
  message: string = '';

  checkGuess() {
    if (this.userGuess === this.secretNumber) {
      this.message = 'Congratulations! You guessed the number!';
    } else if (this.userGuess < this.secretNumber) {
      this.message = 'Too low! Try again.';
    } else {
      this.message = 'Too high! Try again.';
    }
  }
}
