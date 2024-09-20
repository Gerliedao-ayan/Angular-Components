import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrls: ['./uppercaseconverter.component.css']
})
export class UppercaseconverterComponent {
  inputString: string = '';
  uppercaseString: string = '';

  convertToUppercase() {
    this.uppercaseString = this.inputString.toUpperCase();
  }
}
