import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab23',
  templateUrl: './lab23.component.html',
  styleUrls: ['./lab23.component.css']
})
export class Lab23Component implements OnInit {
  isLab23part2: boolean = false;
  isLab23part3: boolean = false;

  constructor() { }

  toggleComponent(value: string): void {
    this.isLab23part2 = false;
    this.isLab23part3 = false;
    switch (value) {
      case'Lab23part2':
        this.isLab23part2 = true;
        break;
      case'Lab23part3':
        this.isLab23part3 = true;
        break;
    }
  }

  ngOnInit(): void {
  }

}
