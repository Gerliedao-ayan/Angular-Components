import { Component } from '@angular/core';

@Component({
  selector: 'app-agegenerator',
  templateUrl: './agegenerator.component.html',
  styleUrl: './agegenerator.component.css'
})
export class AgegeneratorComponent {
  birthDate: Date | null = null;
  age: number | null = null;

  calculateAge() {
    if (this.birthDate) {
      const today = new Date();
      const birthDate = new Date(this.birthDate);
      let age = today.getFullYear() - birthDate.getFullYear();

      // Adjust age if birthday has not passed yet this year
      if (today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
      }

      this.age = age;
    }
  }
}
