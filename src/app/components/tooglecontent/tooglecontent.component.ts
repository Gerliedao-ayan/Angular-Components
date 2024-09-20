import { Component } from '@angular/core';

@Component({
  selector: 'app-tooglecontent',
  templateUrl: './tooglecontent.component.html',
  styleUrl: './tooglecontent.component.css'
})
export class TooglecontentComponent {
  showContent = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
