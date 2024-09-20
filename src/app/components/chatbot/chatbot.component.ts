import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  messages: { text: string; isFromUser: boolean }[] = [];
  userInput: string = '';

  constructor() { }

  ngOnInit() {
    // Initialize the chatbot with a welcome message
    this.addMessage("Hello! How can I help you today?", false);
  }

  sendMessage() {
    if (this.userInput.trim() !== '') {
      this.addMessage(this.userInput, true);
      this.userInput = '';

      // Simulate a response from the chatbot (replace with actual chatbot logic)
      setTimeout(() => {
        this.addMessage("This is a sample response from the chatbot.", false);
      }, 1000);
    }
  }

  addMessage(text: string, isFromUser: boolean) {
    this.messages.push({ text: text, isFromUser: isFromUser });
  }
}
