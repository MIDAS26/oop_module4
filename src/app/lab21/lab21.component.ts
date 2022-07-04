import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab21',
  templateUrl: './lab21.component.html',
  styleUrls: ['./lab21.component.css']
})
export class Lab21Component implements OnInit {

  isLab21part2: boolean = false;
  isLab21part3: boolean = false;

  constructor() { }

  toggleComponent(value: string): void {
    this.isLab21part2 = false;
    this.isLab21part3 = false;
    switch (value) {
      case'Lab21part2':
        this.isLab21part2 = true;
        break;
      case'Lab21part3':
        this.isLab21part3 = true;
        break;
    }
  }

  ngOnInit(): void {
  }

}
