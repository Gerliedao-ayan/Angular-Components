import { Component } from '@angular/core';

@Component({
  selector: 'app-charactercounter',
  templateUrl: './charactercounter.component.html',
  styleUrl: './charactercounter.component.css'
})
export class CharactercounterComponent {
  inputString: string = '';
  // @ts-ignore
  characterCount: number = null;

  countCharacters() {
    this.characterCount = this.inputString.length;
  }
}
