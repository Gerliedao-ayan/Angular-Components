import { Component } from '@angular/core';

@Component({
  selector: 'app-worldshuffler',
  templateUrl: './worldshuffler.component.html',
  styleUrl: './worldshuffler.component.css'
})
export class WorldshufflerComponent {
  inputWord: string = '';
  shuffledWord: string = '';

  shuffleWord() {
    const letters = this.inputWord.split('');
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    this.shuffledWord = letters.join('');
  }
}
