import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreetting',
  templateUrl: './uppercasegreetting.component.html',
  styleUrl: './uppercasegreetting.component.css'
})
export class UppercasegreettingComponent {
  userName: string = '';
  uppercasegreeting: string | null = null;

  greetUser() {
    this.uppercasegreeting = this.userName.toUpperCase();
  }
}
