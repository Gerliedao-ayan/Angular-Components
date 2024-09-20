import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  tasks: { name: string; completed: boolean }[] = [];
  newTask: string = '';

  constructor() { }

  ngOnInit() {
    // Load tasks from local storage or a service if needed
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  editTask(index: number) {
    // Handle editing the task (e.g., open a modal or update the task in place)
    console.log("Edit task at index:", index);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
