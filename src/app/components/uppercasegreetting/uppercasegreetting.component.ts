import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreetting',
  templateUrl: './uppercasegreetting.component.html',
  styleUrl: './uppercasegreetting.component.css'
})
export class UppercasegreettingComponent {
  userName: string = '';
  greeting: string | null = null;

  greetUser() {
    this.greeting = this.userName.toUpperCase();
  }
}
