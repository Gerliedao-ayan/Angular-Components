import { Component, ElementRef, ViewChild } from '@angular/core';
// @ts-ignore
import { Chart } from 'chart.js'; // Assuming you have Chart.js installed

@Component({
  selector: 'app-moodtraker',
  templateUrl: './moodtraker.component.html',
  styleUrl: './moodtraker.component.css'
})
export class MoodtrakerComponent {
  @ViewChild('moodCanvas', { static: true }) moodCanvas: ElementRef | undefined;
  moodData: { date: Date; mood: string }[] = [];
  selectedDate: Date = new Date();
  selectedMood: string = 'happy';
  moodChart: Chart | null = null;

  constructor() { }

  ngOnInit() {
    this.loadMoodData(); // Load data from local storage or a service
    this.createMoodChart();
  }

  logMood() {
    this.moodData.push({ date: this.selectedDate, mood: this.selectedMood });
    this.saveMoodData(); // Save data to local storage or a service
    this.updateMoodChart();
  }

  loadMoodData() {
    // Logic to load mood data from local storage or a service
    // Example:
    // const storedData = localStorage.getItem('moodData');
    // if (storedData) {
    //   this.moodData = JSON.parse(storedData);
    // }
  }

  saveMoodData() {
    // Logic to save mood data to local storage or a service
    // Example:
    // localStorage.setItem('moodData', JSON.stringify(this.moodData));
  }

  createMoodChart() {
    // @ts-ignore
    this.moodChart = new Chart(this.moodCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.moodData.map(entry => entry.date.toLocaleDateString()),
        datasets: [{
          label: 'Mood',
          data: this.moodData.map(entry => this.getMoodValue(entry.mood)),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: 5, // Adjust based on the mood rating scale
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    });
  }

  updateMoodChart() {
    if (this.moodChart) {
      this.moodChart.data.labels = this.moodData.map(entry => entry.date.toLocaleDateString());
      this.moodChart.data.datasets[0].data = this.moodData.map(entry => this.getMoodValue(entry.mood));
      this.moodChart.update();
    }
  }

  getMoodValue(mood: string): number {
    switch (mood) {
      case 'happy':
        return 5;
      case 'neutral':
        return 3;
      case 'sad':
        return 1;
      case 'angry':
        return 1;
      case 'stressed':
        return 2;
      default:
        return 0;
    }
  }
}
