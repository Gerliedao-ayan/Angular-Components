import { Component } from '@angular/core';

@Component({
  selector: 'app-userage',

  templateUrl: './userage.component.html',
  styleUrl: './userage.component.css'
})
export class UserageComponent {
  birthYer: number = 0;
  // @ts-ignore
  age: number = null;

  calculateAge() {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - this.birthYer;
  }
}
