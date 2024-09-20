import { Component } from '@angular/core';

@Component({
  selector: 'app-spellingchecker',
  templateUrl: './spellingchecker.component.html',
  styleUrl: './spellingchecker.component.css'
})
export class SpellingcheckerComponent {
  sentence: string = '';
  checkedWords: { word: string; isCorrect: boolean }[] = [];
  dictionary = ['hello', 'world', 'the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog']; // Add more words

  checkSpelling() {
    this.checkedWords = this.sentence.split(' ').map(word => {
      return {
        word: word,
        isCorrect: this.dictionary.includes(word.toLowerCase())
      };
    });
  }
}
