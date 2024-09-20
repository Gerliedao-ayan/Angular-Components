import { Component } from '@angular/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrl: './colorpicker.component.css'
})
export class ColorpickerComponent {
  selectedColor: string = '#FFFFFF'; // Default color
  hexCodeVisible: boolean = false;

  constructor() { }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  toggleHexCodeVisibility(): void {
    this.hexCodeVisible = !this.hexCodeVisible;
  }
}
