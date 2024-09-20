import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonnaccigenerator',
  templateUrl: './fibonnaccigenerator.component.html',
  styleUrl: './fibonnaccigenerator.component.css'
})
export class FibonnaccigeneratorComponent {
  ount: number = 0;
  fibonacciNumbers: number[] = [];
  counts: any;

  generateFibonacciNumbers() {
    this.fibonacciNumbers = [];
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= this.counts; i++) {
      this.fibonacciNumbers.push(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }
  }
}
