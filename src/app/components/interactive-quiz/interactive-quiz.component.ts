import { Component } from '@angular/core';

@Component({
  selector: 'app-interactive-quiz',
  templateUrl: './interactive-quiz.component.html',
  styleUrl: './interactive-quiz.component.css'
})
export class InteractiveQuizComponent {
  questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Rome", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Jupiter", "Saturn", "Neptune"],
      correctAnswer: "Jupiter"
    },
    // Add more questions here...
  ];
  currentQuestionIndex = 0;
  selectedAnswer: string | null = null;
  isCorrect: boolean | null = null;
  correctAnswers = 0;

  constructor() { }

  ngOnInit() { }

  selectAnswer(option: string) {
    this.selectedAnswer = option;
    this.isCorrect = option === this.questions[this.currentQuestionIndex].correctAnswer;
    if (this.isCorrect) {
      this.correctAnswers++;
    }
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.selectedAnswer = null;
    this.isCorrect = null;
  }
}
