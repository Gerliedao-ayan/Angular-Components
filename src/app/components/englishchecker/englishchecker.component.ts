import { Component } from '@angular/core';

@Component({
  selector: 'app-englishchecker',
  templateUrl: './englishchecker.component.html',
  styleUrl: './englishchecker.component.css'
})
export class EnglishcheckerComponent {
  sentence: string = '';
  isEnglish: boolean | null = null;

  checkEnglish() {
    // Simple check: Count English alphabet characters
    const englishChars = this.sentence.match(/[a-zA-Z]/g);
    this.isEnglish = englishChars && englishChars.length > 0;
  }
}
