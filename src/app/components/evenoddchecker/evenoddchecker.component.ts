import { Component } from '@angular/core';

@Component({
  selector: 'app-evenoddchecker',

  templateUrl: './evenoddchecker.component.html',
  styleUrl: './evenoddchecker.component.css'
})
export class EvenoddcheckerComponent {
  inputNumber: number = 0;
  result: string = '';
  // @ts-ignore
  result: string;

  checkEvenOdd() {
    if (this.inputNumber % 2 === 0) {
      this.result = 'Even';
    } else {
      this.result = 'Odd';
    }
  }
}
