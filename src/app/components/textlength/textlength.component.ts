import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})
export class TextlengthComponent {
  inputString: string = '';
  stringLength: null = null;

  calculateLength() {
    // @ts-ignore
    this.stringLength = this.inputString.length;
  }
}
