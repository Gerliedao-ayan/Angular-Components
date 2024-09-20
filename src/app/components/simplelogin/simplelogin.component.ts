import { Component } from '@angular/core';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrl: './simplelogin.component.css'
})
export class SimpleloginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  onSubmit() {
    // In a real application, you would validate the email and password
    // and handle the login process here.
    if (this.email === 'user@example.com' && this.password === 'password') {
      // Successful login
      console.log('Login successful!');
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
