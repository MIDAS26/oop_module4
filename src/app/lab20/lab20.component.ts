import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab20',
  templateUrl: './lab20.component.html',
  styleUrls: ['./lab20.component.css']
})
export class Lab20Component implements OnInit {

  isLab20part1: boolean = false;
  isLab20part2: boolean = false;

  constructor() { }

  toggleComponent(value: string): void {
    this.isLab20part1 = false;
    this.isLab20part2 = false;
    switch (value) {
      case'Lab20part1':
        this.isLab20part1 = true;
        break;
      case'Lab20part2':
        this.isLab20part2 = true;
        break;
    }
  }

  ngOnInit(): void {
  }

}
