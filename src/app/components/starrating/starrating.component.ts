import { Component } from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrl: './starrating.component.css'
})
export class StarratingComponent {
  rating = 0;
  stars = [1, 2, 3, 4, 5];

  setRating(star: number) {
    this.rating = star;
  }
}
