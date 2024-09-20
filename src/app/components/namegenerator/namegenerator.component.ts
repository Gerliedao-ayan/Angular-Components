import { Component } from '@angular/core';

@Component({
  selector: 'app-namegenerator',
  templateUrl: './namegenerator.component.html',
  styleUrl: './namegenerator.component.css'
})
export class NamegeneratorComponent {
  names = [
    "Alice", "Bob", "Charlie", "David", "Emily", "Frank", "Grace", "Henry", "Isabella", "Jack",
    "Katherine", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quinn", "Ryan", "Sophia", "Thomas",
    // Add more names here...
  ];

  generatedName: string | null = null;

  generateName() {
    const randomIndex = Math.floor(Math.random() * this.names.length);
    this.generatedName = this.names[randomIndex];
  }
}
