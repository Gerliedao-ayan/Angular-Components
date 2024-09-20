import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawing-board',
  templateUrl: './drawing-board.component.html',
  styleUrls: ['./drawing-board.component.css']
})
export class DrawingBoardComponent {
  @ViewChild('canvas', { static: true }) canvas: ElementRef | undefined;
  private ctx: CanvasRenderingContext2D | undefined;
  private isDrawing = false;
  private lastX: number | undefined;
  private lastY: number | undefined;
  currentColor = 'black';

  ngOnInit() {
    // @ts-ignore
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  startDrawing(event: MouseEvent | TouchEvent) {
    this.isDrawing = true;
    this.lastX = this.getX(event);
    this.lastY = this.getY(event);
  }

  draw(event: MouseEvent | TouchEvent) {
    if (this.isDrawing) {
      const currentX = this.getX(event);
      const currentY = this.getY(event);
      // @ts-ignore
      this.ctx.beginPath();
      // @ts-ignore
      this.ctx.strokeStyle = this.currentColor;
      // @ts-ignore
      this.ctx.lineWidth = 5; // Adjust line width as needed
      // @ts-ignore
      this.ctx.lineCap = 'round'; // Set line cap style
      // @ts-ignore
      this.ctx.moveTo(this.lastX, this.lastY);
      // @ts-ignore
      this.ctx.lineTo(currentX, currentY);
      // @ts-ignore
      this.ctx.stroke();
      this.lastX = currentX;
      this.lastY = currentY;
    }
  }

  stopDrawing() {
    this.isDrawing = false;
  }

  changeColor(color: string) {
    this.currentColor = color;
  }

  clearCanvas() {
    // @ts-ignore
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  private getX(event: MouseEvent | TouchEvent): number {
    // @ts-ignore
    return event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
  }

  private getY(event: MouseEvent | TouchEvent): number {
    // @ts-ignore
    return event.type.startsWith('touch') ? event.touches[0].clientY : event.clientY;
  }
}
