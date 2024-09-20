import { Component } from '@angular/core';

@Component({
  selector: 'app-showdate',
  templateUrl: './showdate.component.html',
  styleUrl: './showdate.component.css'
})
export class ShowdateComponent {
  showdate: string = '';

  showDateTime() {
    const now = new Date();
    this.showdate = now.toLocaleString(); // Formats the date and time
  }
}
