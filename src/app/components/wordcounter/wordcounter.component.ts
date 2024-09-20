import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrls: ['./wordcounter.component.css']
})
export class WordcounterComponent {
  inputString: string = '';
  // @ts-ignore
  wordCount: number = null;

  countWords() {
    const words = this.inputString.trim().split(/\s+/);
    this.wordCount = words.length;
  }
}
