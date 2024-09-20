import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrls: ['./palindromechecker.component.css']
})
export class PalindromecheckerComponent{
  inputWord: string = '';
  palindromechecker: boolean | null = null;

  checkPalindrome() {
    const cleanedWord = this.inputWord.toLowerCase().replace(/[^a-z]/g, '');
    this.palindromechecker = cleanedWord === cleanedWord.split('').reverse().join('');
  }
}
