import { Component } from '@angular/core';

@Component({
  selector: 'app-wordrevser',
  templateUrl: './wordrevser.component.html',
  styleUrl: './wordrevser.component.css'
})
export class WordrevserComponent {
  wordreverser: string = '';
  reversedWord: string = '';

  reverseWord() {
    this.reversedWord = this.wordreverser.split('').reverse().join('');
  }
}
