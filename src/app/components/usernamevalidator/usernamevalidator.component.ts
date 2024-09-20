import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrls: ['./usernamevalidator.component.css']
})
export class UsernamevalidatorComponent {
  username: string = '';
  validationMessage: string = '';

  validateUsername() {
    if (this.username.length < 6) {
      this.validationMessage = 'Username must be at least 6 characters long.';
    } else if (!this.username.match(/^[a-zA-Z0-9]+$/)) {
      this.validationMessage = 'Username can only contain letters and numbers.';
    } else {
      this.validationMessage = 'Valid username!';
    }
  }
}
