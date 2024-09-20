import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrls: ['./todomanager.component.css']
})
export class TodomanagerComponent {
  textlength: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.textlength) {
      this.tasks.push(this.textlength);
      this.textlength = ''; // Clear input field
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
