import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrls: ['./currencyformatter.component.css']
})
export class CurrencyformatterComponent {
  numberInput: number = 0;
  selectedCurrency: string = 'USD';
  formattedCurrency: string | null = null;
  euroExchangeRate: number = 1; // Default to 1

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEuroExchangeRate();
  }

  formatCurrency() {
    const formatter = new Intl.NumberFormat(this.getLocale(), {
      style: 'currency',
      currency: this.selectedCurrency
    });

    if (this.selectedCurrency === 'EUR') {
      this.formattedCurrency = formatter.format(this.numberInput * this.euroExchangeRate);
    } else {
      this.formattedCurrency = formatter.format(this.numberInput);
    }
  }

  getEuroExchangeRate() {
    this.http.get('https://api.exchangerate-api.com/v4/latest/USD')
      .subscribe((data: any) => {
        this.euroExchangeRate = data.rates.EUR;
      });
  }

  getLocale(): string {
    switch (this.selectedCurrency) {
      case 'USD':
        return 'en-US';
      case 'PHP':
        return 'fil-PH';
      case 'EUR':
        return 'de-DE'; // Assuming German locale for Euro
      default:
        return 'en-US';
    }
  }
}
