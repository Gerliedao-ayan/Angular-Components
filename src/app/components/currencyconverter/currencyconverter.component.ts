import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  inputValue: number = 0;
  // @ts-ignore
  convertedValue: number = null;
  // @ts-ignore
  convertedValue: number;

  convertCurrency() {
    this.convertedValue = this.inputValue * 56; // 1 dollar = 56 Php
  }
}
