import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',

  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  name: string = '';
  emai: string = '';
  submittedDataa: any = null;

  onSubmit() {
    this.submittedDataa = {
      name: this.name,
      emai: this.emai
    };
  }
}
