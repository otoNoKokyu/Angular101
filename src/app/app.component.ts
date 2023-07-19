import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backgroundColor = 'bg-lightblue'; // Initial background color class

  changeBackgroundColor(): void {
    // Generate a random color class from Tailwind CSS
    const randomColor = 'bg-red-500';
    this.backgroundColor = randomColor;
  }

}
