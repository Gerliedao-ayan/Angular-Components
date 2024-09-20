import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrls: ['./palindromechecker.component.css']
})
export class PalindromecheckerComponent{
  inputWord: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome() {
    const cleanedWord = this.inputWord.toLowerCase().replace(/[^a-z]/g, '');
    this.isPalindrome = cleanedWord === cleanedWord.split('').reverse().join('');
  }
}
