import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrls: ['./usernamevalidator.component.css']
})
export class UsernamevalidatorComponent {
  username: string = '';
  usernamevalidator: string = '';

  validateUsername() {
    if (this.username.length < 6) {
      this.usernamevalidator = 'Username must be at least 6 characters long.';
    } else if (!this.username.match(/^[a-zA-Z0-9]+$/)) {
      this.usernamevalidator = 'Username can only contain letters and numbers.';
    } else {
      this.usernamevalidator = 'Valid username!';
    }
  }
}
