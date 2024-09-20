import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrls: ['./uppercaseconverter.component.css']
})
export class UppercaseconverterComponent {
  inputString: string = '';
  uppercaseconverter: string = '';

  convertToUppercase() {
    this.uppercaseconverter = this.inputString.toUpperCase();
  }
}
