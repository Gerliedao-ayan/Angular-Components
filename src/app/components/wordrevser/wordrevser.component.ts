import { Component } from '@angular/core';

@Component({
  selector: 'app-wordrevser',
  templateUrl: './wordrevser.component.html',
  styleUrl: './wordrevser.component.css'
})
export class WordrevserComponent {
  inputWord: string = '';
  reversedWord: string = '';

  reverseWord() {
    this.reversedWord = this.inputWord.split('').reverse().join('');
  }
}
