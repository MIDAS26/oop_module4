import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab22',
  templateUrl: './lab22.component.html',
  styleUrls: ['./lab22.component.css']
})
export class Lab22Component implements OnInit {

  isLab22part1: boolean = false;
  isLab22part2: boolean = false;
  isLab22part3: boolean = false;

  constructor() { }

  toggleComponent(value: string): void {
    this.isLab22part1 = false;
    this.isLab22part2 = false;
    this.isLab22part3 = false;
    switch (value) {
      case'Lab22part1':
        this.isLab22part1 = true;
        break;
      case'Lab22part2':
        this.isLab22part2 = true;
        break;
      case'Lab22part3':
        this.isLab22part3 = true;
        break;
    }
  }
  ngOnInit(): void {
  }

}
