import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',

  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  name: string = '';
  emai: string = '';
  submittedData: any = null;

  onSubmit() {
    this.submittedData = {
      name: this.name,
      emai: this.emai
    };
  }
}
