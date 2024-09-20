import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrls: ['./todomanager.component.css']
})
export class TodomanagerComponent {
  currencyconverter: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.currencyconverter) {
      this.tasks.push(this.currencyconverter);
      this.currencyconverter = ''; // Clear input field
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
