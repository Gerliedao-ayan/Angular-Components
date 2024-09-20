import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bookmarklist',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './bookmarklist.component.html',
  styleUrl: './bookmarklist.component.css'
})
export class BookmarklistComponent {
  newUrl: string = '';
  bookmarks: string[] = [];

  addBookmark() {
    if (this.newUrl) {
      this.bookmarks.push(this.newUrl);
      this.newUrl = ''; // Clear input field
    }
  }
}
