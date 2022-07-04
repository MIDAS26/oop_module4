import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab20-part1',
  templateUrl: './lab20-part1.component.html',
  styleUrls: ['./lab20-part1.component.css']
})
export class Lab20Part1Component implements OnInit {

  output: number | string = '';

  constructor() { }

  onClickConvert(value: string): void {
    if (isNaN(parseFloat(value))) {
      this.output = "Invalid data type";
    } else {
      console.log(parseFloat(value))
      this.output = (parseFloat(value) * 1.60934).toFixed(1) + " km";
    }
  }

  ngOnInit(): void {
  }

}
