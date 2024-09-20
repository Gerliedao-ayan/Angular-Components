import { Component } from '@angular/core';

@Component({
  selector: 'app-countercomponent',
  templateUrl: './countercomponent.component.html',
  styleUrl: './countercomponent.component.css'
})
export class CountercomponentComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
