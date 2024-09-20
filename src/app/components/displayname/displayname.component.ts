import { Component } from '@angular/core';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrl: './displayname.component.css'
})
export class DisplaynameComponent {
  useName: string = '';
  displaydName: string = '';

  displayUserName() {
    this.displaydName = this.useName;
  }
}
