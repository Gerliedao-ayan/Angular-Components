import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrls: ['./todomanager.component.css']
})
export class TodomanagerComponent {
  newTas: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.newTas) {
      this.tasks.push(this.newTas);
      this.newTas = ''; // Clear input field
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
