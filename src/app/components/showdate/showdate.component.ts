import { Component } from '@angular/core';

@Component({
  selector: 'app-showdate',
  templateUrl: './showdate.component.html',
  styleUrl: './showdate.component.css'
})
export class ShowdateComponent {
  showusername: string = '';

  showDateTime() {
    const now = new Date();
    this.showusername = now.toLocaleString(); // Formats the date and time
  }
}
