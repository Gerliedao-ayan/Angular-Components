import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrl: './temperatureconverter.component.css'
})
export class TemperatureconverterComponent {
  celsius: number = 0;
  fahrenheit: number = 0;
  // @ts-ignore
  celsiusValue: number = null;
  // @ts-ignore
  fahrenheitValue: number = null;

  convertToCelsius() {
    this.celsiusValue = ((this.fahrenheit - 32) * 5) / 9;
  }

  convertToFahrenheit() {
    this.fahrenheitValue = (this.celsius * 9) / 5 + 32;
  }
}
