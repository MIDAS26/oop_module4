import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oopModule4';
  isLab20: boolean = false;
  isLab21: boolean = false;
  isLab22: boolean = false;
  isLab23: boolean = false;

  toggleComponent(value: string): void {
    this.isLab20 = false;
    this.isLab21 = false;
    this.isLab22 = false;
    this.isLab23 = false;
    switch (value) {
      case'Lab20':
        this.isLab20 = true;
        break
      case 'Lab21':
        this.isLab21 = true;
        break;
      case 'Lab22':
        this.isLab22 = true;
        break;
      case 'Lab23':
        this.isLab23 = true;
        break;
    }
  }
}
