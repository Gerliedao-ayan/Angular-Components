import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-usegreeting',
  templateUrl: './usegreeting.component.html',
  styleUrl: './usegreeting.component.css'
})
export class UsegreetingComponent {
  userName: string = '';
  greeting: string = '';

  greetUser() {
    this.greeting = this.userName;
  }
}
