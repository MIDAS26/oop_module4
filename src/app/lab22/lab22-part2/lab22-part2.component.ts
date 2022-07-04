import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab22-part2',
  templateUrl: './lab22-part2.component.html',
  styleUrls: ['./lab22-part2.component.css']
})
export class Lab22Part2Component implements OnInit {
  output: string = '';
  amount: string | number = '';
  initialSalary: number = 0;
  positionType: string = '';
  positionTypes: string[] = ["Sys-admin", "Front-end", "Back-end", "DevOps", "maintain", "Data-since"];
  salaryArr: number[] = [];

  constructor() { }

  changeValue(value: string): void {
    this.positionType = value;
  }

  changeSalary(value: number): void {
    this.initialSalary = value;
  }

  getAmount(event: any): void {
    this.amount = event.target.value;
  }

  onClickConvert(): void {
    if (this.positionType == '' || this.amount == '' || this.initialSalary == 0) {
      alert('Please enter all fields')
    } else {
      this.output = "Position: " + this.positionType + "<br>" + "Initial salary: " + this.initialSalary + " $" + "<br>" + "Years of experiance: " + this.amount;
    }
  }

  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.salaryArr.push(1000 + i * 200)
    }
  }

}
