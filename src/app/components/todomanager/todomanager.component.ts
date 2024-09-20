import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrls: ['./todomanager.component.css']
})
export class TodomanagerComponent {
  newTask: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.newTask) {
      this.tasks.push(this.newTask);
      this.newTask = ''; // Clear input field
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
