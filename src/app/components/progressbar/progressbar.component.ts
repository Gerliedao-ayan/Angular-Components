import { Component } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.css'
})
export class ProgressbarComponent {
  progress = 0;

  increaseProgress() {
    if (this.progress < 100) {
      this.progress += 10;
    }
  }
}
